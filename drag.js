window.onload = function(){
    oDiv = document.getElementById('div1');
    oDiv.onmousedown = function(event){
        disX = event.clientX - oDiv.offsetLeft;
        disY = event.clientY - oDiv.offsetTop;
        document.onmousemove = function(event){
            oDiv.style.left = event.clientX - disX +'px';
            oDiv.style.top = event.clientY - disY +'px';
            return false;
        }
        document.onmouseup = function(){
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
};
/**
 * Created by asus on 2017/2/15.
 */
