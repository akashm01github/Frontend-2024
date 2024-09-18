window.onresize = screen;

window.onload = screen;


function screen(){
    myWidth  = window.innerWidth;
    document.getElementById("size").innerHTML = "width :  " + myWidth + " px"
}