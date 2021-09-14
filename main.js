canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
width_of_line=4;

//var for mouse events 
var mouse_Event="empty";
var last_position_of_x, last_position_of_y;


// codes for events
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_Event="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouse_Event="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouse_Event="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_posation_of_x=e.clientX-canvas.offsetLeft;
    current_posation_of_y=e.clientY-canvas.offsetTop;
    // codes for mouse move + mouse down
    if(mouse_Event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
// codes for making line 
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_posation_of_x,current_posation_of_y);
ctx.stroke();
// codes for printing current and last position of x and y
console.log("last position of x and y=");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
console.log("current position of x and y=");
console.log("x="+current_posation_of_x+"y="+current_posation_of_y);
    }
    last_position_of_x=current_posation_of_x;
    last_position_of_y=current_posation_of_y;
}