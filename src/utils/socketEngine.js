// import config from '../../static/config';
const config = window.config;

var intervalTimer = null;
var timeoutTimer = null;
var lock = false;
var socketname = "";
const socket = {
    instance:null,
    initsocket:(name)=>{
        if(name){
            socketname = name;
        }
        console.log('engineSocket连接开始');
        clearInterval(intervalTimer);
        clearTimeout(timeoutTimer);
        var vm = this;
        const url = config.engineSocket;
        this.instance = new WebSocket(url);
        this.instance.onmessage = (e)=>{
            const data = JSON.parse(e.data);
            console.log(data);
            if(data.kACTION == 'ping'){
                // 心跳机制,如果ping通了,清除定时器timeoutTimer
                lock = true;
                clearTimeout(timeoutTimer);
            }else if(data.kACTION == 'dockmenu'){
                // messagehandle.get('dockmenu')(data.kKEYWORD||'wholefactory');
            }
        }
        this.instance.onopen = ()=>{
            console.log('engineSocket连接成功!');
            var msg = {
                "kACTION": "register",
                "kKEYWORD": '',
                "kFLAG": '',
                "kID": "H5_" + socketname
            };
            this.instance.send(JSON.stringify(msg));
            // 建立连接之后,每5秒ping一次
            intervalTimer = setInterval(()=>{
                var msg = {
                    "kACTION": "ping",
                    "kID": "H5_" + socketname
                };
                this.instance.send(JSON.stringify(msg));
                lock = false;
                timeoutTimer = setTimeout(()=>{
                    // 心跳机制,发出ping指令后3秒未收到ping消息,说明连接断开,要建立新连接
                    console.log(lock)
                    if(!lock){
                        this.a.initsocket();
                    }
                },3000)
            },5000)
        }
        this.instance.onerror = (e)=>{
            console.log('error');
        }
        this.instance.onclose = ()=>{
            console.log('close');
            setTimeout(()=>{
                this.a.initsocket();
            },3000)
        }
    },
    sendMsg:(obj)=>{
        const instance = this.instance;
        var msg = {
            kACTION: "",
            kID: "H5_" + socketname
        };
        Object.assign(msg, obj)
        instance.send(JSON.stringify(msg));
    },
    getInstance:()=>{
        return this.instance;
    }

}

export default socket;