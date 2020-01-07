/*********************
 *
 * @Author: 桔子桑
 * @Date: 2019-11-09 02:58:56
 * @FilePath: /robot/src/utils/datahandle.js
 * @Description: 文件描述
 *
*********************/
const datahandle = {
    //保留小数
    tofix: function (num, int) {
        var int = int || 2;
        if(Math.ceil(num)){
            return num * 100 ? parseFloat(num * 100).toFixed(int) : '0.00';
        }else{
            return num;
        }
    },
    //生成指定位数的数字
    formatnumfigure: function (num, int) {
        var int = int || 2
        var num = num || ''
        var numlength = num ? num.toString().length : 0
        var str = ''
        if (numlength < int) {
            for (var i = 0; i < int - numlength; i++) {
                str += '0'
            }
        }
        return str + num
    },
    //秒转天时分
    s2dhm:function (msd) {
        var time =msd;
        var d = 0,h = 0,m = 0 ,s = 0;
        if (null != time && "" != time) {
            if (time > 60 && time < 60 * 60) {
                m = parseInt(time / 60.0);
                s = parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60);
            }
            else if (time >= 60 * 60 && time < 60 * 60 * 24) {
                h = parseInt(time / 3600.0);
                m = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60);
                s = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60);
            } else if (time >= 60 * 60 * 24) {
                d = parseInt(time / 3600.0/24);
                h = parseInt((parseFloat(time / 3600.0/24)- parseInt(time / 3600.0/24))*24);
                m = parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60);
                s = parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
                parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60);
            }
            else {
                s = parseInt(time);
            }
        }
        return {
            d:d,
            h:h,
            m:m,
            s:s
        }
    },
    //对象非空校验
    objectnull:function(obj){
        var flag = false;
        console.log(obj)
        for(var key in obj){
            var value = obj[key] + '';
            if(value==""||!value){
                flag = true;
            }
        }
        return flag;
    }
};

export default datahandle;