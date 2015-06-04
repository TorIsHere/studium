var image_metadata = 
[
    {
        "id": "1",
        "name": "bridge.jpg",
        "tags": [
            "bridge",
            "ocean",
            "landscape"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "2",
        "name": "bustool.jpg",
        "tags": [
            "ocean",
            "furniture"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "3",
        "name": "cliff.jpg",
        "tags": [
            "cliff",
            "landscape"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "4",
        "name": "cowl.jpg",
        "tags": [
            "car",
            "hipster"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "5",
        "name": "sea-sky-beach-holiday.jpg",
        "tags": [
            "beach",
            "car"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "6",
        "name": "tram.jpg",
        "tags": [
            "moutain",
            "landscape"
        ],
        "desciption": "Be awesome"
    },
    {
        "id": "7",
        "name": "under-the-sky.jpg",
        "tags": [
            "moutain",
            "village",
            "landscape"
        ],
        "desciption": "Be awesome"
    }
];

var clientId = '837050751313';
var apiKey = 'AIzaSyDIKFCWIJwuZYRsh-k_0j8u0_DmoqmGt9U';
var scopes = 'https://www.googleapis.com/auth/plus.me';

function randomBackground(){
	var randomID = Math.floor((Math.random() * image_metadata.length))
	return "bg/" + image_metadata[randomID].name
}
function OnLoadCallback(){
    console.log("OnLoadCallback")
    chageBackground(randomBackground());
    gapi.client.setApiKey('AIzaSyDIKFCWIJwuZYRsh-k_0j8u0_DmoqmGt9U');
    addTaskPanel();
}

function chageBackground(background){
	$('body').css({
    	"background": " linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(" + background + ") no-repeat center center fixed", 
    	"background-size": "cover",
    	"webkit-background-size": "cover",
  		"-moz-background-size": "cover",
  		"-o-background-size": "cover",
  	});
  	$.getJSON("image_metadata.json", function(json) {
    	console.log(json);
	});
}

function addTaskPanel(){
    // create the necessary elements
    var container = document.getElementById('task_panel');
    container.innerHTML = '';

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('text for label after checkbox'));

    container.appendChild(checkbox);
    container.appendChild(label);
}

function init(){
    chrome.identity.getAuthToken({'interactive':true}, function(token){
        console.log(token)

    });
}
$(document).ready(function(){
	init();
})


