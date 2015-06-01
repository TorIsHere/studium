function randomBackground(){

}
function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
            elems[i].innerHTML = content;
        }
    }
}
function foo(){
	replaceContentInContainer("center", "Say HI");

}
$(document).ready(function(){
	foo();
})