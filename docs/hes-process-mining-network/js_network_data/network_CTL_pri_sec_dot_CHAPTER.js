top.dot_chapter_CTL_pri_sec=
'strict digraph "" {'+
'	graph [dpi=300,'+
'		margin=0.1,'+
'		size=12'+
'	];'+
'	node [label="\N"];'+
'	Initial	[color="#222222",'+
'		id=Initial,'+
'		fillcolor="#eeeeee",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label=Initial,'+
'		penwidth=20,'+
'		style="filled,bold",'+
'		width=10];'+
'	"Infectious/'+
'Parasitic"	[color="#222222",'+
'		id="Infectious/'+
'Parasitic",'+
'		fillcolor="#fc8d62",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Infectious/'+
'Parasitic",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f3655c",'+
'		constraint=True,'+
'		title="Initial->Infectious/'+
'Parasitic: 32,332 (1.72%)",'+
'		labelfloat=False,'+
'		penwidth=6.72130252962049,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms	[color="#222222",'+
'		id=Neoplasms,'+
'		fillcolor="#8da0cb",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label=Neoplasms,'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#8a2881",'+
'		constraint=True,'+
'		title="Initial->Neoplasms: 104,756 (5.58%)",'+
'		labelfloat=False,'+
'		penwidth=10.577037232244344,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune"	[color="#222222",'+
'		id="Blood/'+
'Immune",'+
'		fillcolor="#e78ac3",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Blood/'+
'Immune",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ef5e5d",'+
'		constraint=True,'+
'		title="Initial->Blood/'+
'Immune: 35,241 (1.88%)",'+
'		labelfloat=False,'+
'		penwidth=6.876172907532961,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic"	[color="#222222",'+
'		id="Endocrine/'+
'Metabolic",'+
'		fillcolor="#a6d854",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Endocrine/'+
'Metabolic",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#872781",'+
'		constraint=True,'+
'		title="Initial->Endocrine/'+
'Metabolic: 109,263 (5.82%)",'+
'		labelfloat=False,'+
'		penwidth=10.816982503214266,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural"	[color="#222222",'+
'		id="Mental/'+
'Behavioural",'+
'		fillcolor="#ffd92f",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Mental/'+
'Behavioural",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9a2d7f",'+
'		constraint=True,'+
'		title="Initial->Mental/'+
'Behavioural: 90,374 (4.81%)",'+
'		labelfloat=False,'+
'		penwidth=9.811363194727274,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System"	[color="#222222",'+
'		id="Nervous'+
'System",'+
'		fillcolor="#e5c494",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Nervous'+
' System",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e55063",'+
'		constraint=True,'+
'		title="Initial->Nervous'+
' System: 41,812 (2.23%)",'+
'		labelfloat=False,'+
'		penwidth=7.226002145505751,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa"	[color="#222222",'+
'		id="Eye/'+
'Adnexa",'+
'		fillcolor="#b3b3b3",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Eye/'+
'Adnexa",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b63679",'+
'		constraint=True,'+
'		title="Initial->Eye/'+
'Adnexa: 70,204 (3.74%)",'+
'		labelfloat=False,'+
'		penwidth=8.737545552068443,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid"	[color="#222222",'+
'		id="Ear/'+
'Mastoid",'+
'		fillcolor="#1b9e77",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Ear/'+
'Mastoid",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec085",'+
'		constraint=True,'+
'		title="Initial->Ear/'+
'Mastoid: 9,292 (0.49%)",'+
'		labelfloat=False,'+
'		penwidth=5.494690804937325,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System"	[color="#222222",'+
'		id="Circulatory'+
'System",'+
'		fillcolor="#d95f02",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Circulatory'+
' System",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#180f3f",'+
'		constraint=True,'+
'		title="Initial->Circulatory'+
' System: 281,011 (14.96%)",'+
'		labelfloat=False,'+
'		penwidth=19.96056368771445,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System"	[color="#222222",'+
'		id="Respiratory'+
'System",'+
'		fillcolor="#7570b3",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Respiratory'+
' System",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#6c1d80",'+
'		constraint=True,'+
'		title="Initial->Respiratory'+
' System: 138,883 (7.39%)",'+
'		labelfloat=False,'+
'		penwidth=12.393902611075175,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System"	[color="#222222",'+
'		id="Digestive'+
'System",'+
'		fillcolor="#e7298a",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Digestive'+
' System",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#2b115e",'+
'		constraint=True,'+
'		title="Initial->Digestive'+
' System: 237,110 (12.62%)",'+
'		labelfloat=False,'+
'		penwidth=17.62334661630318,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue"	[color="#222222",'+
'		id="Skin/Subcut.'+
'Tissue",'+
'		fillcolor="#66a61e",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Skin/Subcut'+
' Tissue",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ee5d5d",'+
'		constraint=True,'+
'		title="Initial->Skin/Subcut.'+
' Tissue: 36,125 (1.92%)",'+
'		labelfloat=False,'+
'		penwidth=6.923235614330701,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal"	[color="#222222",'+
'		id="Musculo-'+
'skeletal",'+
'		fillcolor="#e6ab02",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Musculo'+
'skeletal",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#5d177e",'+
'		constraint=True,'+
'		title="Initial->Musculo'+
'skeletal: 159,697 (8.5%)",'+
'		labelfloat=False,'+
'		penwidth=13.502005755066294,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary"	[color="#222222",'+
'		id="Genito-'+
'urinary",'+
'		fillcolor="#a6761d",'+
'		fixedsize=True,'+
'		fontcolor="#ffffff",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label="Genito'+
'urinary",'+
'		penwidth=5,'+
'		style=filled,'+
'		width=10];'+
'	Initial -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#7e2481",'+
'		constraint=True,'+
'		title="Initial->Genito'+
'urinary: 117,092 (6.23%)",'+
'		labelfloat=False,'+
'		penwidth=11.233785593168454,'+
'		style=solid,'+
'		weight=2];'+
'	Censor	[color="#222222",'+
'		id=Censor,'+
'		fillcolor="#eeeeee",'+
'		fixedsize=True,'+
'		fontcolor="#000000",'+
'		fontsize=30,'+
'		height=5.0,'+
'		label=Censor,'+
'		penwidth=20,'+
'		style="filled,bold",'+
'		width=10];'+
'	Initial -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#000003",'+
'		constraint=True,'+
'		title="Initial->Censor: 415,153 (22.1%)",'+
'		labelfloat=False,'+
'		penwidth=20,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7735c",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Infectious/'+
'Parasitic: 27,765 (1.48%)",'+
'		labelfloat=False,'+
'		penwidth=6.478162957284205,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#feb77d",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Neoplasms: 11,294 (0.6%)",'+
'		labelfloat=False,'+
'		penwidth=5.601273993861618,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8460",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Blood/'+
'Immune: 23,063 (1.23%)",'+
'		labelfloat=False,'+
'		penwidth=6.227836206873604,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ef5e5d",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Endocrine/'+
'Metabolic: 35,087 (1.87%)",'+
'		labelfloat=False,'+
'		penwidth=6.867974200692631,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8861",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Mental/'+
'Behavioural: 21,393 (1.14%)",'+
'		labelfloat=False,'+
'		penwidth=6.138928152176517,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec689",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Nervous'+
' System: 8,446 (0.45%)",'+
'		labelfloat=False,'+
'		penwidth=5.449651155671615,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd698",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Eye/'+
'Adnexa: 5,775 (0.31%)",'+
'		labelfloat=False,'+
'		penwidth=5.307451506512382,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcf0b1",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Ear/'+
'Mastoid: 1,773 (0.09%)",'+
'		labelfloat=False,'+
'		penwidth=5.094391605376009,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#da4769",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Circulatory'+
' System: 48,457 (2.58%)",'+
'		labelfloat=False,'+
'		penwidth=7.579771021830387,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#dd4968",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Respiratory'+
' System: 46,682 (2.49%)",'+
'		labelfloat=False,'+
'		penwidth=7.485272939742167,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d3426d",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Digestive'+
' System: 52,694 (2.81%)",'+
'		labelfloat=False,'+
'		penwidth=7.80534193665168,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9969",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Skin/Subcut.'+
' Tissue: 17,190 (0.92%)",'+
'		labelfloat=False,'+
'		penwidth=5.91516734146283,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8660",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Musculo'+
'skeletal: 22,553 (1.2%)",'+
'		labelfloat=False,'+
'		penwidth=6.200684645259524,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d9466a",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Genito'+
'urinary: 48,809 (2.6%)",'+
'		labelfloat=False,'+
'		penwidth=7.598510923179714,'+
'		style=solid,'+
'		weight=2];'+
'	"Infectious/'+
'Parasitic" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e55063",'+
'		constraint=True,'+
'		title="Infectious/'+
'Parasitic->Censor: 42,368 (2.26%)",'+
'		labelfloat=False,'+
'		penwidth=7.255602671500709,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#feb179",'+
'		constraint=True,'+
'		title="Neoplasms->Infectious/'+
'Parasitic: 12,305 (0.66%)",'+
'		labelfloat=False,'+
'		penwidth=5.655097971884824,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ae347b",'+
'		constraint=True,'+
'		title="Neoplasms->Neoplasms: 76,577 (4.08%)",'+
'		labelfloat=False,'+
'		penwidth=9.076833595532237,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9567",'+
'		constraint=True,'+
'		title="Neoplasms->Blood/'+
'Immune: 18,263 (0.97%)",'+
'		labelfloat=False,'+
'		penwidth=5.972292097564612,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8775c",'+
'		constraint=True,'+
'		title="Neoplasms->Endocrine/'+
'Metabolic: 26,142 (1.39%)",'+
'		labelfloat=False,'+
'		penwidth=6.391757105324102,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9969",'+
'		constraint=True,'+
'		title="Neoplasms->Mental/'+
'Behavioural: 17,425 (0.93%)",'+
'		labelfloat=False,'+
'		penwidth=5.92767835514775,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#febe83",'+
'		constraint=True,'+
'		title="Neoplasms->Nervous'+
' System: 9,770 (0.52%)",'+
'		labelfloat=False,'+
'		penwidth=5.520138739156012,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#febe83",'+
'		constraint=True,'+
'		title="Neoplasms->Eye/'+
'Adnexa: 9,767 (0.52%)",'+
'		labelfloat=False,'+
'		penwidth=5.519979024087695,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fceaac",'+
'		constraint=True,'+
'		title="Neoplasms->Ear/'+
'Mastoid: 2,307 (0.12%)",'+
'		labelfloat=False,'+
'		penwidth=5.122820887536634,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cd3f70",'+
'		constraint=True,'+
'		title="Neoplasms->Circulatory'+
' System: 56,124 (2.99%)",'+
'		labelfloat=False,'+
'		penwidth=7.987949498095398,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#dd4968",'+
'		constraint=True,'+
'		title="Neoplasms->Respiratory'+
' System: 47,209 (2.51%)",'+
'		labelfloat=False,'+
'		penwidth=7.51332955341005,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b3357a",'+
'		constraint=True,'+
'		title="Neoplasms->Digestive'+
' System: 73,304 (3.9%)",'+
'		labelfloat=False,'+
'		penwidth=8.902584455997168,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9567",'+
'		constraint=True,'+
'		title="Neoplasms->Skin/Subcut.'+
' Tissue: 18,472 (0.98%)",'+
'		labelfloat=False,'+
'		penwidth=5.983418913990774,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8755c",'+
'		constraint=True,'+
'		title="Neoplasms->Musculo'+
'skeletal: 27,358 (1.46%)",'+
'		labelfloat=False,'+
'		penwidth=6.456494946349046,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ec585f",'+
'		constraint=True,'+
'		title="Neoplasms->Genito'+
'urinary: 37,215 (1.98%)",'+
'		labelfloat=False,'+
'		penwidth=6.981265422486285,'+
'		style=solid,'+
'		weight=2];'+
'	Neoplasms -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b53679",'+
'		constraint=True,'+
'		title="Neoplasms->Censor: 71,618 (3.81%)",'+
'		labelfloat=False,'+
'		penwidth=8.812824587602384,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fea873",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Infectious/'+
'Parasitic: 13,957 (0.74%)",'+
'		labelfloat=False,'+
'		penwidth=5.743047736172002,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9768",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Neoplasms: 18,049 (0.96%)",'+
'		labelfloat=False,'+
'		penwidth=5.960899089357919,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc9366",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Blood/'+
'Immune: 19,138 (1.02%)",'+
'		labelfloat=False,'+
'		penwidth=6.018875659157397,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8755c",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Endocrine/'+
'Metabolic: 26,821 (1.43%)",'+
'		labelfloat=False,'+
'		penwidth=6.427905949120103,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Mental/'+
'Behavioural: 16,908 (0.9%)",'+
'		labelfloat=False,'+
'		penwidth=5.900154125040927,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdcf92",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Nervous'+
' System: 6,830 (0.36%)",'+
'		labelfloat=False,'+
'		penwidth=5.3636179722042545,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fecb8e",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Eye/'+
'Adnexa: 7,185 (0.38%)",'+
'		labelfloat=False,'+
'		penwidth=5.382517588621899,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcecae",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Ear/'+
'Mastoid: 2,117 (0.11%)",'+
'		labelfloat=False,'+
'		penwidth=5.112705599876487,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e14c66",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Circulatory'+
' System: 44,495 (2.37%)",'+
'		labelfloat=False,'+
'		penwidth=7.368840654938257,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f3675b",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Respiratory'+
' System: 31,938 (1.7%)",'+
'		labelfloat=False,'+
'		penwidth=6.70032661731471,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cb3e71",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Digestive'+
' System: 57,122 (3.04%)",'+
'		labelfloat=False,'+
'		penwidth=8.041081377489226,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec286",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Skin/Subcut.'+
' Tissue: 8,788 (0.47%)",'+
'		labelfloat=False,'+
'		penwidth=5.467858673459881,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fa7f5e",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Musculo'+
'skeletal: 24,377 (1.3%)",'+
'		labelfloat=False,'+
'		penwidth=6.297791406796941,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7735c",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Genito'+
'urinary: 27,709 (1.48%)",'+
'		labelfloat=False,'+
'		penwidth=6.4751816093422665,'+
'		style=solid,'+
'		weight=2];'+
'	"Blood/'+
'Immune" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e55063",'+
'		constraint=True,'+
'		title="Blood/'+
'Immune->Censor: 42,183 (2.25%)",'+
'		labelfloat=False,'+
'		penwidth=7.245753575621092,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8460",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Infectious/'+
'Parasitic: 22,721 (1.21%)",'+
'		labelfloat=False,'+
'		penwidth=6.2096286890853385,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7715b",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Neoplasms: 28,819 (1.53%)",'+
'		labelfloat=False,'+
'		penwidth=6.534276184619971,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7735c",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Blood/'+
'Immune: 28,058 (1.49%)",'+
'		labelfloat=False,'+
'		penwidth=6.493761795623275,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ac337b",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Endocrine/'+
'Metabolic: 77,500 (4.13%)",'+
'		labelfloat=False,'+
'		penwidth=9.125972598218112,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ca3e72",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Mental/'+
'Behavioural: 58,154 (3.1%)",'+
'		labelfloat=False,'+
'		penwidth=8.09602336099066,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fa7f5e",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Nervous'+
' System: 23,904 (1.27%)",'+
'		labelfloat=False,'+
'		penwidth=6.272609664358784,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f97b5d",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Eye/'+
'Adnexa: 25,661 (1.37%)",'+
'		labelfloat=False,'+
'		penwidth=6.366149456037096,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd295",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Ear/'+
'Mastoid: 6,126 (0.33%)",'+
'		labelfloat=False,'+
'		penwidth=5.326138169505602,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#7c2381",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Circulatory'+
' System: 118,468 (6.31%)",'+
'		labelfloat=False,'+
'		penwidth=11.307041571170366,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b3357a",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Respiratory'+
' System: 72,903 (3.88%)",'+
'		labelfloat=False,'+
'		penwidth=8.881235875198646,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a4307d",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Digestive'+
' System: 83,153 (4.43%)",'+
'		labelfloat=False,'+
'		penwidth=9.426929025285556,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8660",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Skin/Subcut.'+
' Tissue: 22,385 (1.19%)",'+
'		labelfloat=False,'+
'		penwidth=6.191740601433709,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b63679",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Musculo'+
'skeletal: 70,553 (3.76%)",'+
'		labelfloat=False,'+
'		penwidth=8.756125738349452,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b63679",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Genito'+
'urinary: 69,486 (3.7%)",'+
'		labelfloat=False,'+
'		penwidth=8.699320412384306,'+
'		style=solid,'+
'		weight=2];'+
'	"Endocrine/'+
'Metabolic" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#6c1d80",'+
'		constraint=True,'+
'		title="Endocrine/'+
'Metabolic->Censor: 137,494 (7.32%)",'+
'		labelfloat=False,'+
'		penwidth=12.319954534443886,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Infectious/'+
'Parasitic: 17,034 (0.91%)",'+
'		labelfloat=False,'+
'		penwidth=5.906862157910288,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8861",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Neoplasms: 21,320 (1.14%)",'+
'		labelfloat=False,'+
'		penwidth=6.135041752180776,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fda16e",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Blood/'+
'Immune: 15,840 (0.84%)",'+
'		labelfloat=False,'+
'		penwidth=5.843295560719676,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ea5560",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Endocrine/'+
'Metabolic: 39,626 (2.11%)",'+
'		labelfloat=False,'+
'		penwidth=7.109623099057947,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b53679",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Mental/'+
'Behavioural: 71,117 (3.79%)",'+
'		labelfloat=False,'+
'		penwidth=8.786152171193258,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8660",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Nervous'+
' System: 21,992 (1.17%)",'+
'		labelfloat=False,'+
'		penwidth=6.170817927484035,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fda470",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Eye/'+
'Adnexa: 15,336 (0.82%)",'+
'		labelfloat=False,'+
'		penwidth=5.816463429242232,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd295",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Ear/'+
'Mastoid: 5,956 (0.32%)",'+
'		labelfloat=False,'+
'		penwidth=5.317087648967576,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b0347b",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Circulatory'+
' System: 74,007 (3.94%)",'+
'		labelfloat=False,'+
'		penwidth=8.940011020339714,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#c33b74",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Respiratory'+
' System: 62,678 (3.34%)",'+
'		labelfloat=False,'+
'		penwidth=8.336873684014385,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#bb3877",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Digestive'+
' System: 67,468 (3.59%)",'+
'		labelfloat=False,'+
'		penwidth=8.591885409762318,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Skin/Subcut.'+
' Tissue: 16,683 (0.89%)",'+
'		labelfloat=False,'+
'		penwidth=5.888175494917068,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cd3f70",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Musculo'+
'skeletal: 56,095 (2.99%)",'+
'		labelfloat=False,'+
'		penwidth=7.986405585768322,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e04b66",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Genito'+
'urinary: 45,379 (2.42%)",'+
'		labelfloat=False,'+
'		penwidth=7.415903361735996,'+
'		style=solid,'+
'		weight=2];'+
'	"Mental/'+
'Behavioural" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#60187f",'+
'		constraint=True,'+
'		title="Mental/'+
'Behavioural->Censor: 153,733 (8.18%)",'+
'		labelfloat=False,'+
'		penwidth=13.184492199249872,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd295",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Infectious/'+
'Parasitic: 6,064 (0.32%)",'+
'		labelfloat=False,'+
'		penwidth=5.3228373914270275,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec689",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Neoplasms: 8,596 (0.46%)",'+
'		labelfloat=False,'+
'		penwidth=5.457636909087521,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd295",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Blood/'+
'Immune: 5,991 (0.32%)",'+
'		labelfloat=False,'+
'		penwidth=5.3189509914312865,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc9064",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Endocrine/'+
'Metabolic: 19,499 (1.04%)",'+
'		labelfloat=False,'+
'		penwidth=6.038094705711677,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ee5b5e",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Mental/'+
'Behavioural: 36,795 (1.96%)",'+
'		labelfloat=False,'+
'		penwidth=6.958905312921748,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fda470",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Nervous'+
' System: 15,300 (0.81%)",'+
'		labelfloat=False,'+
'		penwidth=5.814546848422414,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec78b",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Eye/'+
'Adnexa: 7,890 (0.42%)",'+
'		labelfloat=False,'+
'		penwidth=5.420050629676657,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcecae",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Ear/'+
'Mastoid: 2,177 (0.12%)",'+
'		labelfloat=False,'+
'		penwidth=5.115899901242849,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d9466a",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Circulatory'+
' System: 49,326 (2.63%)",'+
'		labelfloat=False,'+
'		penwidth=7.626035153286537,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8775c",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Respiratory'+
' System: 26,545 (1.41%)",'+
'		labelfloat=False,'+
'		penwidth=6.413212162834836,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8460",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Digestive'+
' System: 22,700 (1.21%)",'+
'		labelfloat=False,'+
'		penwidth=6.208510683607112,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd193",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Skin/Subcut.'+
' Tissue: 6,449 (0.34%)",'+
'		labelfloat=False,'+
'		penwidth=5.343334158527853,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ef5e5d",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Musculo'+
'skeletal: 34,654 (1.84%)",'+
'		labelfloat=False,'+
'		penwidth=6.8449219924987155,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9567",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Genito'+
'urinary: 18,244 (0.97%)",'+
'		labelfloat=False,'+
'		penwidth=5.971280568798597,'+
'		style=solid,'+
'		weight=2];'+
'	"Nervous'+
'System" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e55063",'+
'		constraint=True,'+
'		title="Nervous'+
' System->Censor: 41,784 (2.22%)",'+
'		labelfloat=False,'+
'		penwidth=7.2245114715347825,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd89a",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Infectious/'+
'Parasitic: 5,036 (0.27%)",'+
'		labelfloat=False,'+
'		penwidth=5.268108361350018,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#feb77d",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Neoplasms: 11,252 (0.6%)",'+
'		labelfloat=False,'+
'		penwidth=5.5990379829051635,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdcf92",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Blood/'+
'Immune: 6,854 (0.36%)",'+
'		labelfloat=False,'+
'		penwidth=5.3648956927508,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc8e63",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Endocrine/'+
'Metabolic: 20,411 (1.09%)",'+
'		labelfloat=False,'+
'		penwidth=6.086648086480386,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fda470",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Mental/'+
'Behavioural: 14,975 (0.8%)",'+
'		labelfloat=False,'+
'		penwidth=5.797244382687952,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec78b",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Nervous'+
' System: 8,111 (0.43%)",'+
'		labelfloat=False,'+
'		penwidth=5.431816306376092,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#c63c73",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Eye/'+
'Adnexa: 59,634 (3.17%)",'+
'		labelfloat=False,'+
'		penwidth=8.174816128027599,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd193",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Ear/'+
'Mastoid: 6,340 (0.34%)",'+
'		labelfloat=False,'+
'		penwidth=5.337531177712295,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#dd4968",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Circulatory'+
' System: 47,043 (2.5%)",'+
'		labelfloat=False,'+
'		penwidth=7.504491986296447,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f56c5b",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Respiratory'+
' System: 29,666 (1.58%)",'+
'		labelfloat=False,'+
'		penwidth=6.5793690722417875,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8460",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Digestive'+
' System: 23,088 (1.23%)",'+
'		labelfloat=False,'+
'		penwidth=6.229167165776255,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd698",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Skin/Subcut.'+
' Tissue: 5,756 (0.31%)",'+
'		labelfloat=False,'+
'		penwidth=5.3064399777463676,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f66e5b",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Musculo'+
'skeletal: 29,073 (1.55%)",'+
'		labelfloat=False,'+
'		penwidth=6.547798727070905,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Genito'+
'urinary: 17,061 (0.91%)",'+
'		labelfloat=False,'+
'		penwidth=5.908299593525151,'+
'		style=solid,'+
'		weight=2];'+
'	"Eye/'+
'Adnexa" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ca3e72",'+
'		constraint=True,'+
'		title="Eye/'+
'Adnexa->Censor: 58,463 (3.11%)",'+
'		labelfloat=False,'+
'		penwidth=8.112474013027425,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fceaac",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Infectious/'+
'Parasitic: 2,279 (0.12%)",'+
'		labelfloat=False,'+
'		penwidth=5.121330213565665,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fce6a8",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Neoplasms: 2,989 (0.16%)",'+
'		labelfloat=False,'+
'		penwidth=5.159129446400954,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcf0b1",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Blood/'+
'Immune: 1,723 (0.09%)",'+
'		labelfloat=False,'+
'		penwidth=5.091729687570707,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fde1a3",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Endocrine/'+
'Metabolic: 3,635 (0.19%)",'+
'		labelfloat=False,'+
'		penwidth=5.193521424445456,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fddc9d",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Mental/'+
'Behavioural: 4,450 (0.24%)",'+
'		labelfloat=False,'+
'		penwidth=5.236910684671878,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcecae",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Nervous'+
' System: 1,944 (0.1%)",'+
'		labelfloat=False,'+
'		penwidth=5.103495364270142,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fddc9d",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Eye/'+
'Adnexa: 4,302 (0.23%)",'+
'		labelfloat=False,'+
'		penwidth=5.2290314079681846,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fce6a8",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Ear/'+
'Mastoid: 3,141 (0.17%)",'+
'		labelfloat=False,'+
'		penwidth=5.167221676529072,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec085",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Circulatory'+
' System: 9,177 (0.49%)",'+
'		labelfloat=False,'+
'		penwidth=5.488568393985131,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec78b",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Respiratory'+
' System: 7,839 (0.42%)",'+
'		labelfloat=False,'+
'		penwidth=5.417335473515249,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec98d",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Digestive'+
' System: 7,420 (0.4%)",'+
'		labelfloat=False,'+
'		penwidth=5.395028602306818,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcecae",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Skin/Subcut.'+
' Tissue: 1,994 (0.11%)",'+
'		labelfloat=False,'+
'		penwidth=5.106157282075444,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec98d",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Musculo'+
'skeletal: 7,776 (0.41%)",'+
'		labelfloat=False,'+
'		penwidth=5.413981457080569,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd698",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Genito'+
'urinary: 5,762 (0.31%)",'+
'		labelfloat=False,'+
'		penwidth=5.306759407883003,'+
'		style=solid,'+
'		weight=2];'+
'	"Ear/'+
'Mastoid" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9f6c",'+
'		constraint=True,'+
'		title="Ear/'+
'Mastoid->Censor: 16,085 (0.86%)",'+
'		labelfloat=False,'+
'		penwidth=5.856338957965656,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f1615c",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Infectious/'+
'Parasitic: 33,892 (1.8%)",'+
'		labelfloat=False,'+
'		penwidth=6.8043543651459135,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d4436d",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Neoplasms: 51,134 (2.72%)",'+
'		labelfloat=False,'+
'		penwidth=7.722290101126257,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#de4a67",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Blood/'+
'Immune: 46,095 (2.45%)",'+
'		labelfloat=False,'+
'		penwidth=7.454022024707921,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#58157e",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Endocrine/'+
'Metabolic: 166,309 (8.85%)",'+
'		labelfloat=False,'+
'		penwidth=13.854017765639433,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9f2f7e",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Mental/'+
'Behavioural: 87,648 (4.67%)",'+
'		labelfloat=False,'+
'		penwidth=9.666235435982209,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#dd4968",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Nervous'+
' System: 47,211 (2.51%)",'+
'		labelfloat=False,'+
'		penwidth=7.5134360301222625,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e85461",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Eye/'+
'Adnexa: 39,939 (2.13%)",'+
'		labelfloat=False,'+
'		penwidth=7.1262867045191385,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#feb57c",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Ear/'+
'Mastoid: 11,418 (0.61%)",'+
'		labelfloat=False,'+
'		penwidth=5.6078755500187665,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#221150",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Circulatory'+
' System: 257,896 (13.73%)",'+
'		labelfloat=False,'+
'		penwidth=18.729959086323333,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#5a157e",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Respiratory'+
' System: 162,007 (8.62%)",'+
'		labelfloat=False,'+
'		penwidth=13.624986357671247,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#6c1d80",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Digestive'+
' System: 138,455 (7.37%)",'+
'		labelfloat=False,'+
'		penwidth=12.371116594661789,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ea5560",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Skin/Subcut.'+
' Tissue: 39,300 (2.09%)",'+
'		labelfloat=False,'+
'		penwidth=7.092267394967378,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#7c2381",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Musculo'+
'skeletal: 118,743 (6.32%)",'+
'		labelfloat=False,'+
'		penwidth=11.321682119099528,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#812581",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Genito'+
'urinary: 115,400 (6.14%)",'+
'		labelfloat=False,'+
'		penwidth=11.143706294637035,'+
'		style=solid,'+
'		weight=2];'+
'	"Circulatory'+
'System" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#341068",'+
'		constraint=True,'+
'		title="Circulatory'+
' System->Censor: 220,901 (11.76%)",'+
'		labelfloat=False,'+
'		penwidth=16.760406102180376,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#de4a67",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Infectious/'+
'Parasitic: 46,152 (2.46%)",'+
'		labelfloat=False,'+
'		penwidth=7.4570566110059655,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ec585f",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Neoplasms: 37,026 (1.97%)",'+
'		labelfloat=False,'+
'		penwidth=6.971203373182243,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f3655c",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Blood/'+
'Immune: 31,977 (1.7%)",'+
'		labelfloat=False,'+
'		penwidth=6.702402913202846,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a4307d",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Endocrine/'+
'Metabolic: 82,989 (4.42%)",'+
'		labelfloat=False,'+
'		penwidth=9.418197934884166,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b3357a",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Mental/'+
'Behavioural: 73,347 (3.9%)",'+
'		labelfloat=False,'+
'		penwidth=8.904873705309727,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8775c",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Nervous'+
' System: 26,125 (1.39%)",'+
'		labelfloat=False,'+
'		penwidth=6.390852053270299,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc8c63",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Eye/'+
'Adnexa: 20,902 (1.11%)",'+
'		labelfloat=False,'+
'		penwidth=6.112788119328451,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdcf92",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Ear/'+
'Mastoid: 6,606 (0.35%)",'+
'		labelfloat=False,'+
'		penwidth=5.351692580436501,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#651a80",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Circulatory'+
' System: 147,805 (7.87%)",'+
'		labelfloat=False,'+
'		penwidth=12.868895224253265,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#57147d",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Respiratory'+
' System: 168,114 (8.95%)",'+
'		labelfloat=False,'+
'		penwidth=13.950112998410836,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#922b80",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Digestive'+
' System: 96,798 (5.15%)",'+
'		labelfloat=False,'+
'		penwidth=10.153366394352474,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8755c",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Skin/Subcut.'+
' Tissue: 26,837 (1.43%)",'+
'		labelfloat=False,'+
'		penwidth=6.428757762817799,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ae347b",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Musculo'+
'skeletal: 75,838 (4.04%)",'+
'		labelfloat=False,'+
'		penwidth=9.037490450369873,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9a2d7f",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Genito'+
'urinary: 90,034 (4.79%)",'+
'		labelfloat=False,'+
'		penwidth=9.79326215365122,'+
'		style=solid,'+
'		weight=2];'+
'	"Respiratory'+
'System" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#61187f",'+
'		constraint=True,'+
'		title="Respiratory'+
' System->Censor: 149,922 (7.98%)",'+
'		labelfloat=False,'+
'		penwidth=12.981600824129753,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d1426e",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Infectious/'+
'Parasitic: 53,131 (2.83%)",'+
'		labelfloat=False,'+
'		penwidth=7.8286070982700195,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#c53c74",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Neoplasms: 61,222 (3.26%)",'+
'		labelfloat=False,'+
'		penwidth=8.259358637523992,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#d0416f",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Blood/'+
'Immune: 54,908 (2.92%)",'+
'		labelfloat=False,'+
'		penwidth=7.923211657070453,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#ae347b",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Endocrine/'+
'Metabolic: 75,166 (4.0%)",'+
'		labelfloat=False,'+
'		penwidth=9.001714275066615,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#bd3977",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Mental/'+
'Behavioural: 66,546 (3.54%)",'+
'		labelfloat=False,'+
'		penwidth=8.542799645432549,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fa7f5e",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Nervous'+
' System: 23,915 (1.27%)",'+
'		labelfloat=False,'+
'		penwidth=6.27319528627595,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8775c",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Eye/'+
'Adnexa: 26,497 (1.41%)",'+
'		labelfloat=False,'+
'		penwidth=6.410656721741746,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fecb8e",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Ear/'+
'Mastoid: 7,235 (0.39%)",'+
'		labelfloat=False,'+
'		penwidth=5.385179506427201,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#60187f",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Circulatory'+
' System: 153,933 (8.2%)",'+
'		labelfloat=False,'+
'		penwidth=13.19513987047108,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#892881",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Respiratory'+
' System: 106,979 (5.7%)",'+
'		labelfloat=False,'+
'		penwidth=10.69538609786807,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#1e1049",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Digestive'+
' System: 265,311 (14.12%)",'+
'		labelfloat=False,'+
'		penwidth=19.12472149684962,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fa7f5e",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Skin/Subcut.'+
' Tissue: 24,457 (1.3%)",'+
'		labelfloat=False,'+
'		penwidth=6.302050475285424,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9a2d7f",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Musculo'+
'skeletal: 90,932 (4.84%)",'+
'		labelfloat=False,'+
'		penwidth=9.841070197434444,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a4307d",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Genito'+
'urinary: 83,759 (4.46%)",'+
'		labelfloat=False,'+
'		penwidth=9.459191469085818,'+
'		style=solid,'+
'		weight=2];'+
'	"Digestive'+
'System" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#350f6a",'+
'		constraint=True,'+
'		title="Digestive'+
' System->Censor: 217,548 (11.58%)",'+
'		labelfloat=False,'+
'		penwidth=16.581897894156825,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fa825f",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Infectious/'+
'Parasitic: 23,573 (1.25%)",'+
'		labelfloat=False,'+
'		penwidth=6.254987768487685,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#feaf78",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Neoplasms: 12,585 (0.67%)",'+
'		labelfloat=False,'+
'		penwidth=5.670004711594515,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec78b",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Blood/'+
'Immune: 7,999 (0.43%)",'+
'		labelfloat=False,'+
'		penwidth=5.425853610492215,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9969",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Endocrine/'+
'Metabolic: 17,191 (0.92%)",'+
'		labelfloat=False,'+
'		penwidth=5.915220579818937,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Mental/'+
'Behavioural: 16,535 (0.88%)",'+
'		labelfloat=False,'+
'		penwidth=5.880296218213374,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdcf92",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Nervous'+
' System: 6,950 (0.37%)",'+
'		labelfloat=False,'+
'		penwidth=5.370006574936979,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdd193",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Eye/'+
'Adnexa: 6,307 (0.34%)",'+
'		labelfloat=False,'+
'		penwidth=5.335774311960796,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fcecae",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Ear/'+
'Mastoid: 1,971 (0.1%)",'+
'		labelfloat=False,'+
'		penwidth=5.104932799885005,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#eb5660",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Circulatory'+
' System: 38,714 (2.06%)",'+
'		labelfloat=False,'+
'		penwidth=7.061069718289239,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f97d5d",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Respiratory'+
' System: 25,231 (1.34%)",'+
'		labelfloat=False,'+
'		penwidth=6.343256962911499,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8660",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Digestive'+
' System: 22,402 (1.19%)",'+
'		labelfloat=False,'+
'		penwidth=6.192645653487512,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f8775c",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Skin/Subcut.'+
' Tissue: 26,276 (1.4%)",'+
'		labelfloat=False,'+
'		penwidth=6.398891045042311,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f97d5d",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Musculo'+
'skeletal: 25,206 (1.34%)",'+
'		labelfloat=False,'+
'		penwidth=6.341926004008848,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc8c63",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Genito'+
'urinary: 20,988 (1.12%)",'+
'		labelfloat=False,'+
'		penwidth=6.117366617953571,'+
'		style=solid,'+
'		weight=2];'+
'	"Skin/Subcut.'+
'Tissue" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#de4a67",'+
'		constraint=True,'+
'		title="Skin/Subcut.'+
' Tissue->Censor: 45,733 (2.43%)",'+
'		labelfloat=False,'+
'		penwidth=7.434749739797534,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8861",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Infectious/'+
'Parasitic: 21,766 (1.16%)",'+
'		labelfloat=False,'+
'		penwidth=6.15878605900407,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f3675b",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Neoplasms: 31,727 (1.69%)",'+
'		labelfloat=False,'+
'		penwidth=6.689093324176336,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fb8460",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Blood/'+
'Immune: 23,126 (1.23%)",'+
'		labelfloat=False,'+
'		penwidth=6.2311902233082845,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cb3e71",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Endocrine/'+
'Metabolic: 57,577 (3.07%)",'+
'		labelfloat=False,'+
'		penwidth=8.065304829517475,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cd3f70",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Mental/'+
'Behavioural: 55,593 (2.96%)",'+
'		labelfloat=False,'+
'		penwidth=7.959679931003091,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#e85461",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Nervous'+
' System: 40,370 (2.15%)",'+
'		labelfloat=False,'+
'		penwidth=7.149232436000841,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7715b",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Eye/'+
'Adnexa: 28,202 (1.5%)",'+
'		labelfloat=False,'+
'		penwidth=6.5014281189025445,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fec286",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Ear/'+
'Mastoid: 9,063 (0.48%)",'+
'		labelfloat=False,'+
'		penwidth=5.482499221389042,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#892881",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Circulatory'+
' System: 107,205 (5.71%)",'+
'		labelfloat=False,'+
'		penwidth=10.707417966348036,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a7317d",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Respiratory'+
' System: 80,663 (4.29%)",'+
'		labelfloat=False,'+
'		penwidth=9.294365518581518,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9a2d7f",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Digestive'+
' System: 89,748 (4.78%)",'+
'		labelfloat=False,'+
'		penwidth=9.778035983804891,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f97b5d",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Skin/Subcut.'+
' Tissue: 25,390 (1.35%)",'+
'		labelfloat=False,'+
'		penwidth=6.35172186153236,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#5d177e",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Musculo'+
'skeletal: 157,773 (8.4%)",'+
'		labelfloat=False,'+
'		penwidth=13.399575157918274,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#c33b74",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Genito'+
'urinary: 62,355 (3.32%)",'+
'		labelfloat=False,'+
'		penwidth=8.319677694992134,'+
'		style=solid,'+
'		weight=2];'+
'	"Musculo-'+
'skeletal" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#58157e",'+
'		constraint=True,'+
'		title="Musculo'+
'skeletal->Censor: 164,611 (8.76%)",'+
'		labelfloat=False,'+
'		penwidth=13.763619036971376,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Infectious/'+
'Parasitic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#9f2f7e",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Infectious/'+
'Parasitic: 87,247 (4.64%)",'+
'		labelfloat=False,'+
'		penwidth=9.644886855183685,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> Neoplasms	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f56a5b",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Neoplasms: 30,915 (1.65%)",'+
'		labelfloat=False,'+
'		penwidth=6.6458637790182316,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Blood/'+
'Immune"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#f7715b",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Blood/'+
'Immune: 28,820 (1.53%)",'+
'		labelfloat=False,'+
'		penwidth=6.534329422976077,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Endocrine/'+
'Metabolic"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a4307d",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Endocrine/'+
'Metabolic: 83,848 (4.46%)",'+
'		labelfloat=False,'+
'		penwidth=9.463929682779256,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Mental/'+
'Behavioural"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#dd4968",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Mental/'+
'Behavioural: 47,370 (2.52%)",'+
'		labelfloat=False,'+
'		penwidth=7.521900928743122,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Nervous'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9567",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Nervous'+
' System: 18,746 (1.0%)",'+
'		labelfloat=False,'+
'		penwidth=5.998006223563829,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Eye/'+
'Adnexa"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fd9d6b",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Eye/'+
'Adnexa: 16,673 (0.89%)",'+
'		labelfloat=False,'+
'		penwidth=5.887643111356008,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Ear/'+
'Mastoid"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fdda9c",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Ear/'+
'Mastoid: 4,971 (0.26%)",'+
'		labelfloat=False,'+
'		penwidth=5.2646478682031255,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Circulatory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#842681",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Circulatory'+
' System: 111,259 (5.92%)",'+
'		labelfloat=False,'+
'		penwidth=10.923246262001921,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Respiratory'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#b63679",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Respiratory'+
' System: 70,662 (3.76%)",'+
'		labelfloat=False,'+
'		penwidth=8.76192871916501,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Digestive'+
'System"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#a9327c",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Digestive'+
' System: 78,556 (4.18%)",'+
'		labelfloat=False,'+
'		penwidth=9.182192302266092,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Skin/Subcut.'+
'Tissue"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#fc8c63",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Skin/Subcut.'+
' Tissue: 21,212 (1.13%)",'+
'		labelfloat=False,'+
'		penwidth=6.129292009721324,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Musculo-'+
'skeletal"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#cb3e71",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Musculo'+
'skeletal: 56,584 (3.01%)",'+
'		labelfloat=False,'+
'		penwidth=8.012439141904176,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> "Genito-'+
'urinary"	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#7a2281",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Genito'+
'urinary: 122,722 (6.53%)",'+
'		labelfloat=False,'+
'		penwidth=11.53351753804546,'+
'		style=solid,'+
'		weight=2];'+
'	"Genito-'+
'urinary" -> Censor	[arrowhead=normal,'+
'		arrowsize=5,'+
'		color="#8f2a80",'+
'		constraint=True,'+
'		title="Genito'+
'urinary->Censor: 100,749 (5.36%)",'+
'		labelfloat=False,'+
'		penwidth=10.363711139327439,'+
'		style=solid,'+
'		weight=2];'+
'}'
