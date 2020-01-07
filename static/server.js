const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 10086 ,maxPayload: 6000});
var connectedList = new Map();
wss.on('connection', function connection(ws) {
  console.log('服务已启动...')
  ws.on('error', function error(message) {
        console.log('error:', message);
  });
  ws.on('close', function error(message) {
    console.log('close:', message);
  });
  ws.on('message', function incoming(message) { 
    console.log(message);
    const data = JSON.parse(message);
    if(data.kACTION=='register'){
      connectedList.set(data.kID,ws);
    }else if(data.kACTION=='ping'){
      var connect = connectedList.get(data.kID);
      connect.send(JSON.stringify(data));
    }else{
      for(var [key,value] of connectedList){
        //if(data.kID != key){
          value.send(JSON.stringify(data));
        // }else{
        // }
      }
    }
  });
});

setInterval(function(){
  for(var [key,value] of connectedList){
    var json = {
      kACTION:'MAIN_POINT',
      kFLAG:true,
      kID:key
    };
    value.send(JSON.stringify(json));
  };
},10000);




