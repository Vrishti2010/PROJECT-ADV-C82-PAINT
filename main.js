var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 
var color, radius, width_of_line;
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown",myMousedown);
function myMousedown (e) {

    color = document.getElementById("color").value;
radius = document.getElementById("radius").value;
width_of_line = document.getElementById("width").value;
mouseEvent= "mousedown";
}

canvas.addEventListener("mouseup",myMouseup);
function myMouseup (e) {
mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave (e) {
mouseEvent= "mouseleave";
}

canvas.addEventListener("mousemove",myMousemove);
function myMousemove (e) {

    current_position_of_mouse_x= e.clientX- canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY- canvas.offsetTop;

    if(mouseEvent = "mouseDown"){
        console.log("current position of X and Y coordinates  = ");
        console.log("X  ="+ current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);

        ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, Math.PI* 2);
ctx.stroke();
    }
}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);

}
