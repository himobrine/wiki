(function(){
var c=document.getElementById('graphContainer');
if(!c||typeof vis==='undefined'||typeof POSTS==='undefined')return;

function gc(p){var t=PRIMARY_COLORS[p.primary]||'888888';return{background:'#'+t,border:'#'+t,highlight:{background:'#00d4ff',border:'#00d4ff'}};}
function gsh(p){var s=p.secondary;if(s==='DVWA'||s==='Pwn'||s==='Crack'||s==='基础')return'dot';if(s==='upload-labs'||s==='Reverse')return'square';if(s==='Crypto'||s==='工具')return'diamond';if(s==='Web')return'triangle';return'dot';}

var f=window.location.pathname.split('/').pop();
var currentIdx=-1;
for(var i=0;i<POSTS.length;i++){
  if(POSTS[i].url.indexOf(f)!==-1){currentIdx=i;break;}
}

var nodes,edges;

if(currentIdx!==-1){
  var p=POSTS,connected=[currentIdx];
  for(var i=0;i<p.length;i++){
    if(i===currentIdx)continue;
    if(p[currentIdx].tags.filter(function(t){return p[i].tags.indexOf(t)!==-1;}).length>0)connected.push(i);
  }
  var n=connected.length;
  var nodeArr=[];
  for(var k=0;k<n;k++){
    var idx=connected[k];
    if(idx===currentIdx){
      nodeArr.push({id:idx,title:p[idx].title,url:p[idx].url,size:14,x:0,y:0,color:gc(p[idx]),shape:gsh(p[idx])});
    }else{
      var angle=-Math.PI/2+2*Math.PI*(k-1)/(n-1);
      nodeArr.push({id:idx,title:p[idx].title,url:p[idx].url,size:8,x:120*Math.cos(angle),y:120*Math.sin(angle),color:gc(p[idx]),shape:gsh(p[idx])});
    }
  }
  nodes=new vis.DataSet(nodeArr);
  var edgeArr=[],seen={};
  for(var a=0;a<n;a++){
    for(var b=a+1;b<n;b++){
      var i1=connected[a],i2=connected[b],shared=p[i1].tags.filter(function(t){return p[i2].tags.indexOf(t)!==-1;});
      if(shared.length>0){
        var key=i1+'-'+i2;
        if(!seen[key]){seen[key]=true;
        edgeArr.push({from:i1,to:i2,value:Math.min(shared.length,3),title:'共享: '+shared.join(', '),color:{inherit:'both',opacity:0.2+shared.length*0.15}});}
      }
    }
  }
  edges=new vis.DataSet(edgeArr);
  var network=new vis.Network(c,{nodes:nodes,edges:edges},{
    nodes:{shape:'dot',color:{background:'#7b2d8e',border:'#7b2d8e',highlight:{background:'#00d4ff',border:'#00d4ff'}},font:{size:0},borderWidth:0,borderWidthSelected:2,scaling:{min:4,max:14}},
    edges:{width:1,smooth:{type:'continuous'}},
    physics:false,
    interaction:{hover:true,tooltipDelay:200,zoomView:true,dragView:true}
  });
  network.fit({animation:false});
}else{
  var groups={};
  groups['Web安全']={color:{background:'#3366ff',border:'#3366ff',highlight:{background:'#00d4ff',border:'#00d4ff'}},shape:'dot'};
  groups['CTF']={color:{background:'#e4405f',border:'#e4405f',highlight:{background:'#00d4ff',border:'#00d4ff'}},shape:'dot'};
  groups['逆向']={color:{background:'#7b2d8e',border:'#7b2d8e',highlight:{background:'#00d4ff',border:'#00d4ff'}},shape:'dot'};
  groups['C/C++']={color:{background:'#f59e0b',border:'#f59e0b',highlight:{background:'#00d4ff',border:'#00d4ff'}},shape:'dot'};
  nodes=new vis.DataSet(POSTS.map(function(p,i){return{id:i,title:p.title,url:p.url,value:1,size:6,color:gc(p),group:p.primary,shape:gsh(p)};}));
  var edgeArr=[],seen={};
  for(var i=0;i<POSTS.length;i++){for(var j=i+1;j<POSTS.length;j++){
    var shared=POSTS[i].tags.filter(function(t){return POSTS[j].tags.indexOf(t)!==-1;});
    if(shared.length>0){var key=i+'-'+j;if(!seen[key]){seen[key]=true;
    edgeArr.push({from:i,to:j,value:Math.min(shared.length,3),title:'共享: '+shared.join(', '),color:{inherit:'both',opacity:0.2+shared.length*0.15}});}}}}
  edges=new vis.DataSet(edgeArr);
  var network=new vis.Network(c,{nodes:nodes,edges:edges},{
    nodes:{shape:'dot',font:{size:0},borderWidth:0,borderWidthSelected:2,scaling:{min:4,max:10}},
    groups:groups,
    edges:{width:1,smooth:{type:'continuous'}},
    physics:{solver:'forceAtlas2Based',forceAtlas2Based:{gravitationalConstant:-50,centralGravity:0.005,springLength:180,springConstant:0.01,damping:0.5},stabilization:{iterations:100}},
    interaction:{hover:true,tooltipDelay:200,zoomView:true,dragView:true,hoverConnectedEdges:true}
  });
  network.on('dragStart',function(){network.setOptions({physics:{enabled:false}});});network.on('hoverNode',function(){network.setOptions({physics:{enabled:false}});});c.addEventListener('mouseleave',function(){network.setOptions({physics:{enabled:true}});});
}

network.on('click',function(params){if(params.nodes.length>0){var node=nodes.get(params.nodes[0]);if(node&&node.url)window.location.href=node.url;}});
})();
