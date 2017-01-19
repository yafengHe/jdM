/**
 * Created by He on 2017/1/18.
 */
window.onload = function(){
    secondkill();
}
var secondkill = function(){
    /*获取父盒子*/
    var parentTime = document.getElementsByClassName('sk-time')[0];
    /*时间*/
    var timeList = parentTime.getElementsByClassName('num');

    var times = 2*60*60;
    setInterval(function(){
        times --;
        var h = Math.floor(times/(60*60));
        var m = Math.floor(times/60%60);
        var s = times%60;

        timeList[0].innerHTML = h>10?Math.floor(h/10):0;
        timeList[1].innerHTML = h%10;

        timeList[2].innerHTML = m>10?Math.floor(m/10):0;
        timeList[3].innerHTML = m%10;

        timeList[4].innerHTML = s>10?Math.floor(s/10):0;
        timeList[5].innerHTML = s%10;
    },1000);
}
