import re
import os

# Replace all HTML tables in DOT file with just the two numbers within each.
# This allows the javascript interactive network to read it properly.

file_names = ['graph_dot_out_granular_visjs_MI_subjects',
              'graph_dot_out_granular_visjs_Controls',
              'graph_dot_out_granular_visjs_MI_subjects_PRI_SEC',
              'graph_dot_out_granular_visjs_Controls_PRI_SEC']

js_names = ['dot_granular_MI_pri',
            'dot_granular_CTL_pri',
            'dot_granular_MI_pri_sec',
            'dot_granular_CTL_pri_sec']

js_files = ['network_MI_pri_dot.js',
            'network_CTL_pri_dot.js',
            'network_MI_pri_sec_dot.js',
            'network_CTL_pri_sec_dot.js']


root = 'dot_data_from_laser'
pat = 'label=<<.*?<TD BORDER="0">([0-9,]+)</TD>.*?<TD BORDER="0">\(([0-9\.%]+)\)</TD>.*?>>'

for fileI,file_name in enumerate(file_names):

    ## Open file, replace first two groups with the two numbers
    with open('{}.txt'.format(os.path.join(root,file_name)),'r') as f:
        print(file_name)
        dot = f.read()
        s = re.sub(pat, 'label="\g<1> (\g<2>)"', dot, count=0, flags=re.DOTALL)
        # "\n" -> "'\n'+"
        s = re.sub('\n', "'+\n'", s)
        # end
        s = re.sub("'}'\+\n'", "'}'\n", s)
        # start
        s = re.sub("^strict", "'strict", s)

        # Font size for the sub chapters:
        #    s = re.sub("fontsize=[0-9]+,", "fontsize=20,", s)
    
        ## we need to give IDs to the node (Initial/MI: id=1, ... etc)
        s = re.sub('("?[a-zA-Z0-9 //\-\.]+(\'\+\n\'[a-zA-Z \.]+)?"?)[\t]+\[color=".*?",\'\+',
                   '\g<0>\n\'\t\tid=\g<1>,\'+', s, count=0)

        # for the sub-chapters (XNN-YMM), add label=XNN-YMM
        s = re.sub('id="([A-N][0-9][0-9]-[A-N][0-9][0-9])",\'\+',
                   '\g<0>\n\'\t\t\tlabel="\g<1>",\'+', s, count=0)

        # remove empty label
        s = re.sub('\'[\t]+label="",\'\+\n','', s, count=0)

        # Set the fontsize for the Initial MI and Censor
        s = re.sub('fontsize=[0-9][0-9]?\.?0?','fontsize=30', s, count=0)

        # Initial non-MI replace with Initial 
        s = re.sub('Initial non-MI','Initial', s, count=0)
        
        # for initial MI and censor, give these a label
        s = re.sub('id="?((Initial( MI)?)|(Censor))"?,\'\+',
                   '\g<0>\n\'\t\t\tlabel="\g<1>",\'+', s, count=0)

        # set initial and censor fillcolors
        s = re.sub('fillcolor="#666666"',
                   'fillcolor="#eeeeee"', s, count=0)
        s = re.sub('fillcolor="#df2020"',
                   'fillcolor="#FD7F7F"', s, count=0)

        # s = re.sub('(Nervous|Digestive|Circulatory)',
        #            '"\g<0> System"', s, count=0)    

        # for EDGES, convert label="count,(prc)" to title="count,(prc)"
        #diag = '("[A-N][0-9][0-9]-[A-N][0-9][0-9]")|(Initial MI)|(Censor)'
        diag = '("[A-N][0-9][0-9]-[A-N][0-9][0-9]")|("Initial( MI)?")|(Censor)'
        before = """(?P<before>(?P<diag1>{}) -> (?P<diag2>{})(.*?\n)(.*?\n)(.*?\n)(.*?\n)\'[\t]+)""".format(diag,diag)
        ptn = "{}label=\"(?P<counts>[0-9,]+.*?%\))\",\'\+".format(before)
        s = re.sub(ptn,
                   '\g<before>title="\g<diag1>->\g<diag2>: \g<counts>",\'+', s, count=0)

        # for Initial non-MI, set outgoing edge colour to red
        # diag = '"Initial"'
        # diagEnd = '("[A-N][0-9][0-9]-[A-N][0-9][0-9]")|(Censor)'
        # before = """(?P<before>(?P<diag1>{}) -> (?P<diag2>{})(.*?\n)(.*?\n)\'[\t]+)""".format(diag,diagEnd)
        # ptn = "{}color=\"#[0-9a-z][0-9a-z][0-9a-z][0-9a-z][0-9a-z][0-9a-z]\",\'\+".format(before)
        # s = re.sub(ptn, '\g<before>color=red,\'+', s, count=0)

        # update penwidth for edges using percentage (found in title)
        before = """(?P<before>title=(.*?)\(<?(?P<prc>[0-9.]+)%\)\",\'\+\n\'[\t]+)"""
        ptn = "{}penwidth=[0-9.]+,\'\+".format(before)
        s = re.sub(ptn,'\g<before>penwidth=\g<prc>,\'+', s, count=0)
        #s = re.sub(ptn,'\g<before>penwidth=1,\'+', s, count=0)
    
        # remove quotes
        s = re.sub('title=""(Initial( MI)?)"->',
                   'title="\g<1>->', s, count=0)
        s = re.sub('title=""({})"->'.format("[A-N][0-9][0-9]-[A-N][0-9][0-9]"),
                   'title="\g<1>->', s, count=0)
        s = re.sub('title=(.*?->)"({})"'.format("[A-N][0-9][0-9]-[A-N][0-9][0-9]"),
                   'title=\g<1>\g<2>', s, count=0)

        # for NODES, convert comment="full desc" to title="full desc"
        s = re.sub('comment=("?.*?"?,\'\+)',
                   'title=\g<1>', s, count=0)
        s = re.sub('title="Initial"','title="Initial non-MI diagnosis"', s, count=0)
#        s = re.sub('title="Initial MI"','title="Initial MI diagnosis"', s, count=0)

        # For the controls file, replace 'Initial MI' with 'Initial non-MI'
        # s = re.sub('"Initial MI"([\t]+\[color)','"Initial"\g<1>', s, count=0)
        # s = re.sub('id="Initial MI"','id="Initial"', s, count=0)
        # s = re.sub('"Initial MI" ->','"Initial" ->', s, count=0)
        #    if file_name=='graph_dot_out_granular_visjs_Controls' or \
            #       file_name=='graph_dot_out_granular_visjs_Controls_PRI_SEC':
        #        s = re.sub('label="Initial MI"','label="Initial non-MI"', s, count=0)
        #        s = re.sub('title="Initial MI"','title="Initial non-MI"', s, count=0)
        print(s[-400:])

        # ## Write new file
        # with open(os.path.join('tmp','{}_AMENDED.txt'.format(file_name)),'w') as f:
        #     f.write(s)

        ## js file
        with open(os.path.join('tmp', js_files[fileI]),'w') as f:
            f.write('top.' + js_names[fileI] + '=\n' + s)
        
