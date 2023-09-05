var MI_TOTAL = 375669;
var CTL_TOTAL = 1878345;
var container = document.getElementById("mynetwork");
//var exportArea = document.getElementById("input_output");
var exportArea = document.getElementById("export-dialog-text");
// console.log(dot);


///// CHAPTER DATA

// PRIMARY trajectories
var data_ctl_pri_CHAPTER = vis.parseDOTNetwork(top.dot_chapter_CTL_pri);
var data_mi_pri_CHAPTER = vis.parseDOTNetwork(top.dot_chapter_MI_pri);
// PRIMARY and SECONDARY trajectories
var data_ctl_pri_sec_CHAPTER = vis.parseDOTNetwork(top.dot_chapter_CTL_pri_sec);
var data_mi_pri_sec_CHAPTER = vis.parseDOTNetwork(top.dot_chapter_MI_pri_sec);


///// GRANULAR DATA (ICD-10 *SUB* CHAPTERS)

// PRIMARY trajectories
var data_ctl_pri = vis.parseDOTNetwork(top.dot_granular_CTL_pri);
var data_mi_pri = vis.parseDOTNetwork(top.dot_granular_MI_pri);
// PRIMARY and SECONDARY trajectories
var data_ctl_pri_sec = vis.parseDOTNetwork(top.dot_granular_CTL_pri_sec);
var data_mi_pri_sec = vis.parseDOTNetwork(top.dot_granular_MI_pri_sec);

////////////////


var network = undefined;
//var network_unclustered = undefined;
//var data = vis.network.convertDot(dot);

// Initial mi: #df2020
// Infectious diseases: #fc8d62
// Neoplasms: #8da0cb
// blood/immune: #e78ac3
// Endo: #a6d854
// Mental: #ffd92f
// Nervous: #e5c494
// Eye: #b3b3b3
// Ear: #1b9e77
// Circ: #d95f02
// Resp: #7570b3
// Digestive: #e7298a
// Skin: #66a61e
// Musculo: #e6ab02
// Genito: #a6761d
// Censor: #666666


var cluster_colors = ['#fc8d62', '#8da0cb', '#e78ac3', '#a6761d', '#e6ab02',
		      '#66a61e', '#e7298a', '#7570b3', '#d95f02', '#1b9e77',
		      '#b3b3b3', '#e5c494', '#ffd92f', '#a6d854'];
var cluster_ids = ['Infectious/Parasitic',//0
		   'Neoplasms',//1
		   'Blood/Immune',//2
		   'Genito-urinary',//3
		   'Musculo-skeletal',//4
		   'Skin/Subcut.Tissue',//5
		   'DigestiveSystem',//6
		   'RespiratorySystem',//7
		   'CirculatorySystem',//8
		   'Ear/Mastoid',//9
		   'Eye/Adnexa',//10
		   'NervousSystem',//11
		   'Mental/Behavioural',//12
		   'Endocrine/Metabolic'];//13
// var cluster_ids_to_pos = {'Infectious/Parasitic':0,
// 			  'Neoplasms':1,//1
// 			  'Blood/Immune':2,//2
// 			  'Genito-urinary':3,//3
// 			  'Musculo-skeletal':4,//4
// 			  'Skin/Subcut.Tissue':5,//5
// 			  'DigestiveSystem':6,//6
// 			  'RespiratorySystem':7,//7
// 			  'CirculatorySystem':8,//8
// 			  'Ear/Mastoid':9,//9
// 			  'Eye/Adnexa':10,//10
// 			  'NervousSystem':11,//11
// 			  'Mental/Behavioural':12,//12
// 			  'Endocrine/Metabolic':13};//13

var cluster_labels = ['Infectious/\nParasitic','Neoplasms','Blood/Immune',
		      'Genitourinary','Musculoskeletal',
		      'Skin/Subcut.','Digestive\nSystem',
		      'Respiratory\nSystem','Circulatory\nSystem','Ear/Mastoid',
		      'Eye/Adnexa','Nervous System',
		      'Mental/\nBehavioural','Endocrine/\nMetabolic',];
var cluster_fontcolors = ['#000000','#000000', '#000000','#eeeeee','#000000',
			  '#eeeeee', '#eeeeee','#eeeeee', '#eeeeee', '#eeeeee',
			  '#000000','#000000', '#000000', '#000000'];

var _cluster_order = [0,1,2,13,12,11,9,10,8,7,6,5,4,3];
// var cluster_order = {'Infectious-Parasitic':_cluster_order[0],//0
// 		     'Neoplasms':_cluster_order[1],//1
// 		     'Blood/Immune':_cluster_order[2],//2
// 		     'Genitourinary':_cluster_order[3],//3
// 		     'Musculoskeletal':_cluster_order[4],//4
// 		     'Skin/Subcut.':_cluster_order[5],//5
// 		     'Digestive-System':_cluster_order[6],//6
// 		     'Respiratory-System':_cluster_order[7],//7
// 		     'Circulatory-System':_cluster_order[8],//8
// 		     'Ear/Mastoid':_cluster_order[9],//9
// 		     'Eye/Adnexa':_cluster_order[10],//10
// 		     'Nervous-System':_cluster_order[11],//11
// 		     'Mental/Behavioural':_cluster_order[12],//12
// 		     'Endocrine/Metabolic':_cluster_order[13]};//13

// var cluster_colors = ['#8da0cb','#fc8d62',  '#e78ac3', '#a6761d', '#e6ab02',
// 		      '#66a61e', '#e7298a', '#7570b3', '#d95f02', '#1b9e77',
// 		      '#b3b3b3', '#e5c494', '#ffd92f', '#a6d854'];
// var cluster_ids = ['Neoplasms','Infectious-Parasitic','Blood/Immune','Genitourinary',
// 		   'Musculoskeletal',
// 		   'Skin/Subcut.','Digestive-System','Respiratory-System','Circulatory-System',
// 		   'Ear/Mastoid','Eye/Adnexa', 'Nervous-System', 'Mental/Behavioural',
// 		   'Endocrine/Metabolic'];
// var cluster_labels = ['Neoplasms','Infectious/\nParasitic','Blood/Immune',
// 		      'Genitourinary','Musculoskeletal',
// 		      'Skin/Subcut.','Digestive\nSystem',
// 		      'Respiratory\nSystem','Circulatory\nSystem','Ear/Mastoid',
// 		      'Eye/Adnexa','Nervous System',
// 		      'Mental/\nBehavioural','Endocrine/\nMetabolic',];
// var cluster_fontcolors = ['#000000','#000000', '#000000','#eeeeee','#000000',
// 			  '#eeeeee', '#eeeeee','#eeeeee', '#eeeeee', '#eeeeee',
// 			  '#000000','#000000', '#000000', '#000000'];






// adding event to 'select cohort' radio buttons
const radio_buttons_cohort = document.querySelectorAll("input[name='radio_select_cohort']");
radio_buttons_cohort.forEach(button => {
  button.onclick = () => {
      if (button.checked) {
	  //console.log(button.value);
	  showSpinner();
	  setTimeout(function(){hide_and_display_network();},100);
    }
  }
})


const radio_buttons_traj = document.querySelectorAll("input[name='radio_select_traj']");
radio_buttons_traj.forEach(button => {
  button.onclick = () => {
      if (button.checked) {
	  //console.log(button.value);
	  showSpinner();
	  setTimeout(function(){hide_and_display_network();},100);
    }
  }
})


const radio_buttons_chapter = document.querySelectorAll("input[name='radio_network_chapter']");
radio_buttons_chapter.forEach(button => {
  button.onclick = () => {
      if (button.checked) {
	  //console.log(button.value);
	  showSpinner();
	  setTimeout(function(){hide_and_display_network();},100);
    }
  }
})



const radio_buttons_limit = document.querySelectorAll("input[name='radio_limit']");
radio_buttons_limit.forEach(button => {
  button.onclick = () => {
      if (button.checked) {
	  //console.log(button.value);
	  showSpinner();
	  setTimeout(function(){display_network();},100);
    }
  }
})



var prc_complete = 0;

function showSpinner() {
    document.getElementById('loader').style.display = 'inline';
}

function hideSpinner() {
    document.getElementById('loader').style.display = 'none';
}

// function addEdge(from_id, to_id){
//     network.body.data.edges.add([{from: from_id, to: to_id}])
// }




// ##############
// Export network
// ##############

var dialog = $( "#export-dialog" ).dialog({
    autoOpen: false,
    height: 700,
    width: 850,
    modal: true
});

function exportNetwork() {
    dialog.dialog( "open" );
    clearOutputArea();
    var nodes = setKeyAsID(network.getPositions());
    nodes.forEach(export_addConnections);
    // pretty print node data
    var exportValue = JSON.stringify(nodes, undefined, 2);
    exportArea.value = exportValue;

    //document.getElementById('export').style.display = "inline";
    //document.getElementById('main').style.top = "800px";
    //document.getElementById('desc').style.top = "1610px";
    hideSpinner();
}


function export_addConnections(elem, index) {
    // need to replace this with a tree of the network, then get child direct children of the element
    //elem.connected_nodes = network.getConnectedNodes(elem.id);
    connected_edges = network.getConnectedEdges(elem.id);
    // for each edge, add the title (counts and percentage)
    var dat = {};
    for (var i=0; i<connected_edges.length; i++){
	// only showing
	if (network.body.edges[connected_edges[i]].options.hidden){
	    continue;
	}
	// only outgoing
	if (network.body.edges[connected_edges[i]].fromId != elem.id){
	    continue;
	}
	
	dat[connected_edges[i]] = {count : extract_count_from_label(network.body.edges[connected_edges[i]].title),
				   from : network.body.edges[connected_edges[i]].from.id,
				   to : network.body.edges[connected_edges[i]].to.id};
    }
    elem.outgoing_edges = dat;
}


function clearOutputArea() {
    exportArea.value = "";
}


function copy_to_clipboard_json(){
    document.getElementById('export-dialog-text').select();
    document.execCommand('copy');
    alert('Copied!');
}


// ##############
// Positioning
// ##############


function position_nodes_circle() {

    var newPositions = [];
    //var cluster_colors_tmp = Object.assign(cluster_colors,[]);
    //cluster_colors_tmp = [].concat(cluster_colors_tmp, ['#eeeeee','#666666']);

    let visibleNodes = [];
    for (var i = 0; i < cluster_ids.length; i++) {

	// if (nodeIDs[i].startsWith('Initial') || nodeIDs[i]=='Censor'){
	//     continue;
	// }

	let thisNodeID = cluster_ids[_cluster_order[i]];
	let skip=true;

	var connected_edges = network.getConnectedEdges(thisNodeID);
	for (var j = 0; j < connected_edges.length; j++) {
	    if (!network.body.edges[connected_edges[j]].options.hidden){
		skip=false;
		break;
	    }
	}

	// if all edges are hidden, then skip
	if (skip){
	    continue;
	}

	visibleNodes = [].concat(visibleNodes,thisNodeID);
    }
	
    for (var i = 0; i < visibleNodes.length; i++) {
	// middle of circle.
	//let pos = cluster_ids_to_pos[visibleNodes[i]];
	let cX = 1000*Math.sin((Math.PI*2) * i/(visibleNodes.length));
	let cY = 1000*Math.cos((Math.PI*2) * i/(visibleNodes.length));

	newPositions = [].concat(newPositions, {id:visibleNodes[i],
						x:cX,
						y:cY});
    }

    network.body.data.nodes.update(newPositions);
    
    // network.moveNode('Initial MI', 0, 0)

    try {
    	network.moveNode('Initial MI', 0, 0);
    }
    catch(err) {
    	console.log('Info: Missing node: Initial MI');
    }
    try {
    	network.moveNode('Initial', 0, 0);
    }
    catch(err) {
    	console.log('Info: Missing node: Initial');
    }
    network.moveNode('Censor', 1000,1000)
}


function position_nodes_circle_edge() {
    //var numNodesInEachCluster = {};
    var nodesInEachCluster = {};
    var nodeIDs = Object.keys(network.body.nodes);
    var numNodes = 0;
    for (var i = 0; i < nodeIDs.length; i++) {

	if (nodeIDs[i].startsWith('Initial') || nodeIDs[i]=='Censor'){
	    continue;
	}

	let skip=true;
	var connected_edges = network.getConnectedEdges(nodeIDs[i]);
	if (connected_edges.length == 0){
	    continue
	}
	
	for (var j = 0; j < connected_edges.length; j++) {
	    if (!network.body.edges[connected_edges[j]].options.hidden){
		skip=false;
		break;
	    }
	}

	// if all edges are hidden, then skip
	if (skip){
	    continue;
	}
	
	    // if (network.body.nodes[nodeIDs[i]].options.hidden){
	    // 	continue;
	    // }

	
	let c = network.body.nodes[nodeIDs[i]].options.color.background;
	if (!Object.keys(nodesInEachCluster).includes(c)){
	    //numNodesInEachCluster[c] = 0;
	    nodesInEachCluster[c] = [];
	}
	//numNodesInEachCluster[c] = numNodesInEachCluster[c] + 1;
	nodesInEachCluster[c] = [].concat(nodesInEachCluster[c],nodeIDs[i])
	numNodes = numNodes + 1;
    }

    // remove init and censor
    //numNodes =  numNodes - 2;

    let sizeScale = Math.log(1.5 + numNodes/120);
    let xMax = 2500;
    let yMax = 1800;

    var newPositions = [];
    let twopi = (Math.PI*2);
    let numC = cluster_colors.length;
    let nodeI = 0;
    for (var i = 0; i < numC; i++) {

	// node offset within circle
	let tmpC = nodesInEachCluster[cluster_colors[_cluster_order[i]]];

	if (tmpC==undefined){
	    continue;
	}
	
	let numWithin = tmpC.length;
	for (var j=0; j < numWithin; j++){
	    // between -1 and 1
	    //let pos = (j-(tmpC.length/2))/(tmpC.length/2);
	    //let pos = (j-(numWithin/2))/(numWithin/2);
	    //let pos = j/6;
	    
	    // middle of circle.
	    //let cX = 1.5*1300*Math.sin(twopi * (pos*0.7+i)/numC);
	    //let cY = 1.5*1000*Math.cos(twopi * (pos*0.7+i)/numC);

	    let cX = sizeScale * xMax * Math.sin(twopi * nodeI/numNodes);
	    let cY = sizeScale * yMax * Math.cos(twopi * nodeI/numNodes);
	    
	    newPositions = [].concat(newPositions, {id:tmpC[j],
						    x:cX,// + 1300*Math.sin(twopi * ( (pos*0.7+i)/numC)),
						    y:cY});// + 1000*Math.cos(twopi * ( (pos*0.7+i)/numC))});
	    //network.body.data.nodes.update(newPositions[tmpC[j]]);
	    nodeI = nodeI + 1;
	}
    }

    network.body.data.nodes.update(newPositions);
    
    // network.moveNode('Initial MI', 0, 0)

    try {
    	network.moveNode('Initial MI', 0, 0);
    }
    catch(err) {
    	console.log('Info: Missing node: Initial MI');
    }
    try {
    	network.moveNode('Initial', 0, 0);
    }
    catch(err) {
    	console.log('Info: Missing node: Initial');
    }
    network.moveNode('Censor', sizeScale*xMax, sizeScale*yMax)
}


//################
//################
//################



function getMatrices(){
    var allEdges = Object.keys(network.body.edges);

    // matrix: node to node (sub-chapters)
    var mAll = {outgoing:{}, incoming:{}};
    for (var i = 0; i < allEdges.length; i++) {
	let e = network.body.edges[allEdges[i]];
	var toNode = e.toId;
	var fromNode = e.fromId;

	// if (fromNode.startsWith('cluster') || toNode.startsWith('cluster')) {
	//     continue;
	// }

	// if (network.body.nodes[toNode].options.hidden ||
	//     network.body.nodes[fromNode].options.hidden){
	//     continue;
	// }

	let keyFrom = network.body.nodes[fromNode].options.color.background + '.' + fromNode;
	let keyTo = network.body.nodes[toNode].options.color.background + '.' + toNode;
	if (!Object.keys(mAll['outgoing']).includes(keyFrom)){
	    mAll['outgoing'][keyFrom] = {};
	}
	if (!Object.keys(mAll['incoming']).includes(keyTo)){
	    mAll['incoming'][keyTo] = {};
	}
	mAll['outgoing'][keyFrom][keyTo] = extract_count_from_label(e.title);
	mAll['incoming'][keyTo][keyFrom] = extract_count_from_label(e.title);
    }

    console.log(mAll);

    // use outgoing for now...
    var m = mAll['outgoing'];
    
    // matrix: cluster to node
    var mFromCluster = {};
    var mRows = Object.keys(m);
    for (var i = 0; i < mRows.length; i++) {
	var color = mRows[i].split('.')[0];

	if (!Object.keys(mFromCluster).includes(color)){
	    mFromCluster[color] = {};
	}
	let colKeys = Object.keys(m[mRows[i]]);
	for (var j=0;j<colKeys.length;j++){
	    var colKeys_diag = colKeys[j].split('.')[1];
	    if (Object.keys(mFromCluster[color]).includes(colKeys_diag)) {
		mFromCluster[color][colKeys_diag] = mFromCluster[color][colKeys_diag] + m[mRows[i]][colKeys[j]];
	    } else {
		mFromCluster[color][colKeys_diag] = m[mRows[i]][colKeys[j]];
	    }
	}	
    }

    console.log(mFromCluster);

    // matrix: node to cluster
    var mToCluster = {};
    var mRows = Object.keys(m);
    for (var i = 0; i < mRows.length; i++) {
	var diag = mRows[i].split('.')[1];

	if (!Object.keys(mToCluster).includes(diag)){
	    mToCluster[diag] = {};
	}
	let colKeys = Object.keys(m[mRows[i]]);
	for (var j=0;j<colKeys.length;j++){
	    var colKeys_color = colKeys[j].split('.')[0];
	    if (Object.keys(mToCluster[diag]).includes(colKeys_color)) {
		mToCluster[diag][colKeys_color] = mToCluster[diag][colKeys_color] + m[mRows[i]][colKeys[j]];
	    } else {
		mToCluster[diag][colKeys_color] = m[mRows[i]][colKeys[j]];
	    }
	}	
    }
    console.log(mToCluster);

    // matrix: cluster to cluster
    var mClusterToCluster = {};
    var mRows = Object.keys(m);
    for (var i = 0; i < mRows.length; i++) {
	var color = mRows[i].split('.')[0];

	if (!Object.keys(mClusterToCluster).includes(color)){
	    mClusterToCluster[color] = {};
	}
	let colKeys = Object.keys(m[mRows[i]]);
	for (var j=0;j<colKeys.length;j++){
	    var colKeys_color = colKeys[j].split('.')[0];
	    if (Object.keys(mClusterToCluster[color]).includes(colKeys_color)) {
		mClusterToCluster[color][colKeys_color] = mClusterToCluster[color][colKeys_color] + m[mRows[i]][colKeys[j]];
	    } else {
		mClusterToCluster[color][colKeys_color] = m[mRows[i]][colKeys[j]];
	    }
	}	
    }

    mClusterToCluster['#666666'] = {};
    console.log(mClusterToCluster);
    return [mAll, mToCluster, mFromCluster, mClusterToCluster];
}


function create_dataset_from_matrix(){

    var mClusterToCluster = getMatrices()[3];

    var numSubjects = Object.values(mClusterToCluster['#eeeeee']).reduce((a,b)=>a+b);
    
    var colorToClusterID = {};
    var colorToClusterLabel = {};
    var colorToClusterFontColor = {};
    for (var i=0;i<cluster_ids.length;i++){
	colorToClusterID[cluster_colors[i]] = cluster_ids[i];
	colorToClusterLabel[cluster_colors[i]] = cluster_labels[i];
	colorToClusterFontColor[cluster_colors[i]] = cluster_fontcolors[i];
    }
    colorToClusterLabel['#666666'] = 'Censor';
    colorToClusterLabel['#eeeeee'] = 'Initial';
    colorToClusterID['#666666'] = 'Censor';
    colorToClusterID['#eeeeee'] = 'Initial';
    colorToClusterFontColor['#666666'] = '#000000';
    colorToClusterFontColor['#eeeeee'] = '#000000';
    
    // create a DataSet
    var data_nodes = [];
    var data_edges = [];
    var data_options_nodes = [];
    var data_options_edges = [];
    for (var i=0; i<Object.keys(mClusterToCluster).length; i++){
	let from = Object.keys(mClusterToCluster)[i];
	data_nodes = [].concat(data_nodes, {id:from,
					    label:colorToClusterLabel[from]});
	data_options_nodes = [].concat(data_options_nodes, {id:from,
						color:{background:from},
							    font:{color:colorToClusterFontColor[from]}});

	// for each node connected to this node (outgoing edges)
	for (var j=0;j<Object.keys(mClusterToCluster[from]).length; j++){
	    let to = Object.keys(mClusterToCluster[from])[j];
	    let count = mClusterToCluster[from][to];
	    let newEdgeID = from+'>'+to;
	    let prc = (100*count/numSubjects).toFixed(2);

	    if (prc<0.05){
		prc = '<0.05';
	    }
	    let countStr = count.toLocaleString('en-GB');
	    
	    data_edges = [].concat(data_edges,
				   {id:newEdgeID,
				    from:from,
				    to:to});
	    data_options_edges = [].concat(data_options_edges,
					   {id:newEdgeID,
					    title:colorToClusterID[from] + '->' + colorToClusterID[to] + ': ' + countStr + ' (' + prc + '%)',
					    width:prc,
					    baseWidth:1,
					    baseFontSize:14,
					    arrows:{to:{enabled:true}},
					    color:{color:from,
						   inherit:false}});

	}
    }

    return {data:{edges: data_edges, nodes: data_nodes},
	    options_nodes: data_options_nodes,
	    options_edges: data_options_edges};
}



function show_cluster_network(){
    var x = create_dataset_from_matrix();
    network.setData(x['data']);
    network.body.data.nodes.update(x['options_nodes']);
    network.body.data.edges.update(x['options_edges']);
    network.fit();
}


function hide_and_display_network(){
    showSpinner();
    // hide the network
    network.destroy();
    setTimeout(function(){display_network();},100);
}


function only_show_this_node_and_its_edges(show_this_nodeID){


    // append color
    //var color = network.body.nodes[show_this_nodeID].options.color.background;

    //var mNodeToNode = getMatrices()[0];

    var connectedEdges = network.body.nodes[show_this_nodeID].edges;
    var connectedNodes = [];
    for (var j=0; j<connectedEdges.length; j++) {

	// if (connectedEdges[j].hidden){
	//     continue;
	// }
	
    	var nTo = network.body.nodes[connectedEdges[j].toId];
    	var nFrom = network.body.nodes[connectedEdges[j].fromId];

	if (!nTo.options.hidden && !connectedEdges[j].options.hidden){	    
    	    connectedNodes = [].concat(connectedNodes,nTo.id);
	}
	if (!nFrom.options.hidden && !connectedEdges[j].options.hidden){
    	    connectedNodes = [].concat(connectedNodes,nFrom.id);
	}
    }

    // var connectedFrom = network.body.nodes[show_this_nodeID].edges.forEach(x => x.fromId);
    // var connectedTo = network.body.nodes[show_this_nodeID].edges.forEach(x => x.toId);
    //var connectedNodes = [].concat(connectedFrom,connectedTo);
    
    // var outgoing = mNodeToNode['outgoing'][color+'.'+show_this_nodeID];
    // var incoming = mNodeToNode['incoming'][color+'.'+show_this_nodeID];
    // if (outgoing==undefined){outgoing={};}
    // if (incoming==undefined){incoming={};}
    // var connected_nodes = [].concat(Object.keys(outgoing), Object.keys(incoming));
    
    var newOptions = [];    
    var allNodeIDs = Object.keys(network.body.nodes);
    for (var i = 0; i < allNodeIDs.length; i++){

	if (allNodeIDs[i]==show_this_nodeID){
	    continue;
	}
	
	let n = network.body.nodes[allNodeIDs[i]];
	if (n.options.hidden){
	    continue;
	}
	
	if (!connectedNodes.includes(allNodeIDs[i])){
	    newOptions = [].concat(newOptions, {id:allNodeIDs[i],
						hidden:true});
	}
    }
    
    // for (var i = 0; i < nodeIDs.length; i++){
    // 	if (nodeIDs[i]!=show_this_nodeID){
    // 	    // hide this node
    // 	    newOptions = [].concat(newOptions, {id:nodeIDs[i],
    // 						hidden:true});
    // 	}
    // }

    network.body.data.nodes.update(newOptions);
    hideSpinner();
}


function make_network_object(data){

    network = new vis.Network(container, data, data.options);

    // #############
    // Build network
    // #############

    network.on("click", function(params) {
	//console.log(params);
	if (params.nodes.length == 1) {
	    showSpinner();
	    setTimeout(function(){
		only_show_this_node_and_its_edges(params.nodes[0]);
	    },100);
	// } else if (params.nodes.length == 0 && params.edges.length == 0) {
	//     // click away
	//     showSpinner();
	//     setTimeout(function(){
	// 	display_network();
	// 	//show_all_nodes();
	//     },100);
	}
    });

    // network.on("deselectNode", function(params) {
    // 	//console.log(params);
    // 	if (params.nodes.length == 1) {
    // 	    showSpinner();
    // 	    setTimeout(function(){
    // 		show_all_nodes();
    // 	    },100);
    // 	}
    // });


    
    // network.on("selectNode", function(params) {
    // 	//console.log(params);
    // 	if (params.nodes.length == 1) {
    //         if (network.isCluster(params.nodes[0]) == true) {
    // 		showSpinner();
    // 		setTimeout(function(){
    // 		    network.openCluster(params.nodes[0], {releaseFunction:my_releaseFunction});
    // 		    give_cluster_edges_tooltips();
    // 		},100);
    //         }
    // 	}
    // });

    // nodes that are moved can then be immediately clicked
    network.on("dragEnd", function(params) {
	//console.log(params);
	if (params.nodes.length == 1) {
	    network.unselectAll();
	}
    });

    network.on("hoverNode", function(params) {
	console.log(params.node);
	//network.upd    
	//edges = network.getConnectedEdges(params.node);
	//    for (var i = 0; i < edges.length; i++) {
	//	network.updateEdge(edges[i],{'scaling':{'min':10, 'max':150}})
	//    }
    });

}




function setKeyAsID(obj) {
    return Object.keys(obj).map(function (key) {
        obj[key].id = key;
        return obj[key];
    });
}


function extract_count_from_label(lab){
    return parseInt(lab.split(": ")[1].split(" ")[0].replace(',',''));
}

function extract_prc_from_label(lab){
    return parseFloat(lab.split("(")[1].split(")")[0].replace('%','').replace('<',''));
}



function limit_edges_displayed(limit){
    var newOptions = [];
    var edgeIDs = Object.keys(network.body.edges);

    for (var i = 0; i < edgeIDs.length; i++){

	let prc = extract_prc_from_label(network.body.edges[edgeIDs[i]].title);
	
	if (prc <= limit){
	    newOptions = [].concat(newOptions, {id:edgeIDs[i],
						hidden:true});
	} else {
	    newOptions = [].concat(newOptions, {id:edgeIDs[i],
						hidden:false});
	}	
    }
    
    network.body.data.edges.update(newOptions);


    // hide/show nodes depending on whether they have at least one non-hidden edge
    newOptions = [];
   var nodeIDs = Object.keys(network.body.nodes);

    for (var i = 0; i < nodeIDs.length; i++){

	var connectedEdges = network.body.nodes[nodeIDs[i]].edges;

	var hide=true;
	for (var j=0; j<connectedEdges.length; j++) {
	    if (!connectedEdges[j].options.hidden){
		hide=false;
		break;
	    }
	}
	
	if (hide){
	    newOptions = [].concat(newOptions, {id:nodeIDs[i],
						hidden:true});
	} else {
	    newOptions = [].concat(newOptions, {id:nodeIDs[i],
						hidden:false});
	}	
    }
    network.body.data.nodes.update(newOptions);
    
    hideSpinner();
}



function display_network(){
    var data;
    if (document.querySelector('#radio_ctl').checked){
	data = {'granular':[data_ctl_pri, data_ctl_pri_sec],
		'chapter':[data_ctl_pri_CHAPTER, data_ctl_pri_sec_CHAPTER]};
    } else {
	data = {'granular':[data_mi_pri, data_mi_pri_sec],
		'chapter':[data_mi_pri_CHAPTER, data_mi_pri_sec_CHAPTER]};
    }

    if (document.querySelector('#radio_network_chapter_chap').checked){
	if (document.querySelector('#radio_pri').checked){
	    data = data['chapter'][0];	
	} else {
	    data = data['chapter'][1];
	}
    } else {
	if (document.querySelector('#radio_pri').checked){
	    data = data['granular'][0];	
	} else {
	    data = data['granular'][1];
	}
    }
    
    build_options_object(data);
    make_network_object(data);

    if (document.querySelector('#radio_limitAll').checked){
	limit_edges_displayed(0);
    }
    
    if (document.querySelector('#radio_limit005').checked){
	limit_edges_displayed(0.05);
    }
    if (document.querySelector('#radio_limit01').checked){
	limit_edges_displayed(0.1);
    }
    if (document.querySelector('#radio_limit1').checked){
	limit_edges_displayed(1);
    }
    if (document.querySelector('#radio_limit5').checked){
	limit_edges_displayed(5);
    }

    // final positioning 
    if (document.querySelector('#radio_network_chapter_chap').checked){
	position_nodes_circle();
    } else {
	position_nodes_circle_edge();
    }

    hideSpinner();
    network.fit();
}


// ###########################
// Params for network creation
// ###########################
function build_options_object(data){
    // you can extend the options like a normal JSON variable:
    // options = data.options;

    //options.height='1000px'
    //options.width='1000px'

    //data.options.nodes = data.nodes
    //data.options.edges = data.edges
    data.options.physics = {
	enabled: false,
	solver: 'forceAtlas2Based',
	forceAtlas2Based: {
	    gravitationalConstant: -44,
	    centralGravity: 0.025,
	    springConstant: 0.85,
	    springLength: 10,
	    damping: 0.95,
	    avoidOverlap: 0.01
	},

	// solver:'barnesHut',
	// barnesHut: {
	//   gravitationalConstant: -24,
	//   centralGravity: 0.01,
	//   springConstant: 0.85,
	//   springLength: 60,
	//   damping: 0.95,
	//   avoidOverlap: 0.01
	// },

	
	"maxVelocity": 50,
	"minVelocity": 2,
	"timestep": 0.5
	//        solver: 'hierarchicalRepulsion',
	//    minVelocity: 30,
	// repulsion: {
	//  nodeDistance: 10,
	// 	springConstant: 20000000,
	// 	centralGravity: 0.5,
	// 	damping: 0.5
	// }
    }

    // var container_conf = document.getElementById("conf");
    // options.configure = {
    // 	enabled: true,
    // 	filter: 'nodes,edges,physics,layout',
    // 	container: container_conf,
    // 	showButton: true
    // }

    data.options.nodes = {
	borderWidth: 2,
	physics: false,
	shape:'box'
    }

    data.options.edges = {
	physics: false,
	hoverWidth:1,
	smooth:{type:'continuous'} // improved performance
	//    smooth:{type:'diagonalCross'} 
	// "arrows": {
	//   "middle": {
	//     "enabled": true
	//   }
	// }
    }

    data.options.interaction = {
	dragNodes:true,
	hover: true,
	tooltipDelay: 200,
	//    hideEdgesOnDrag: true,
	//    hideEdgesOnZoom: true,
	navigationButtons: true
    }
}


function hide_network(){
//    window.setTimeout({},2000);
    network.destroy();
}


//document.getElementById("checkbox_circle").checked = false;
//document.getElementById("radio_mi").checked = true;
//document.getElementById("radio_pri").checked = true;

showSpinner();
setTimeout(function(){display_network();},100);

