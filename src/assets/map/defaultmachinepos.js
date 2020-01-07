import dragselectleftconfig from './dragselectleftconfig'



/**
 * 1区袜机的不同列序号调整以及border调整
 */
function resetblock1(obj,col,row){
    if(row>11){
        obj.top+=30
    }
    var nonecol = [1,4,7,10,13,16,19];
    if(~nonecol.indexOf(col)){
        if(row==5){
            obj.none = true;
        }
        if(row==1||row==6||row==12){
            obj.hastopborder = true;
        }
        if(row==4||row==11||row==16){
            obj.hasbottomborder = true;
        }
        if(row>5){
            row-=1;
        }
        col = 20 - col;
        row = 17- row;
        if(~nonecol.indexOf(col)){
            row-=1;
        }
        obj.id=col+'' + (row>9?row:('0'+row));
    }else{
        if(row==1||row==12){
            obj.hastopborder = true;
        }
        if(row==16||row==11){
            obj.hasbottomborder = true;
        }
        col = 20 - col;
        row = 17- row;
        obj.id=col+'' + (row>9?row:('0'+row));
    }
    return obj;
};
/**
 * 2区袜机的不同列序号调整以及border调整
 */
function resetblock2(obj,col,row){
    if(row==1){
        if(col==18){
        obj.none = true;
        }
        if(col>4){
        obj.left += 15;
        }
        if(col>11){
        obj.left += 15;
        }
        if(col==1||col==5||col==12){
        obj.hasbottomborder = true;
        }
        if(col==4||col==11||col==17){
        obj.hastopborder = true;
        }
    }else if(row==4){
        if(col==17||col==18){
        obj.none = true;
        }
        if(col>2){
        obj.left += 30;
        }
        if(col>9){
        obj.left += 30;
        }
        if(col==1||col==3||col==10){
        obj.hasbottomborder = true;
        }
        if(col==2||col==9||col==16){
        obj.hastopborder = true;
        }
    }else{
        if(col==1){
        obj.hasbottomborder = true;
        }
        if(col==18){
        obj.hastopborder = true;
        }
    }
    obj.id='S'+(5-row)+'' + (col>9?col:('0'+col));
    return obj;
};
/**
 * 3区袜机的不同列序号调整以及border调整
 */
function resetblock3(obj,col,row){
    if(row==4){
        if(col==16||col==17||col==18){
        obj.none = true;
        }
        if(col>4){
        obj.left += 45;
        }
        if(col>12){
        obj.left += 45;
        }
        if(col==1||col==5||col==13){
        obj.hasbottomborder = true;
        }
        if(col==4||col==12||col==15){
        obj.hastopborder = true;
        }
    }else{
        if(col==1){
        obj.hasbottomborder = true;
        }
        if(col==18){
        obj.hastopborder = true;
        }
    }
    obj.id='S'+(9-row)+'' + (col>9?col:('0'+col));
    return obj;
};
/**
 * 1区袜机默认布局(矩形横向排列)
 */
function machineblock1(){
    var linenum = 19;
    var arr = [];
    for(var i = 0;i<304;i++){
        var index = i+1;
        var col = index%linenum==0?linenum:index%linenum;//
        var row = Math.ceil(index/linenum);
        var obj = {
            top:(row-1) * 30+10,
            left:col * 60+70,
            blocktype:1
        }
        obj = resetblock1(obj,col,row)
        var offsetleft = dragselectleftconfig.get(col)||0;
        obj.left += offsetleft;
        arr.push(obj);
    }
    return (arr.concat(machineblock2())).concat(machineblock3());
};
/**
 * 2区袜机默认布局(矩形横向排列)
 */
function machineblock2(){
    var linenum = 18;
    var arr = [];
    for(var i = 0;i<72;i++){
        var index = i+1;
        var col = index%linenum==0?linenum:index%linenum;//
        var row = Math.ceil(index/linenum);
        var obj = {
            id:index,
            top:(row-1) * 60+560,
            left:col * 30 +90,
            blocktype:2
        }
        obj = resetblock2(obj,col,row)
        arr.push(obj);
    }
    return arr;
};
/**
 * 3区袜机默认布局(矩形横向排列)
 */
function machineblock3(){
    var linenum = 18;
    var arr = [];
    for(var i = 0;i<72;i++){
        var index = i+1;
        var col = index%linenum==0?linenum:index%linenum;//
        var row = Math.ceil(index/linenum);
        var obj = {
            id:index,
            top:(row-1) * 60+560,
            left:col * 30 +650+30,
            blocktype:2
        }
        obj = resetblock3(obj,col,row);
        arr.push(obj);
    }
    return arr;
}


const machines = machineblock1();

export default machines;