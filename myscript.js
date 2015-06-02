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

function chageBackground(background){
	$('body').css({
    	background: "url(" + background + ") no-repeat center center fixed", 
    	background-size: "cover"
	});
}

function foo(){
	chageBackground("bg/sea-sky-beach-holiday.jpg");
}
$(document).ready(function(){
	foo();
})