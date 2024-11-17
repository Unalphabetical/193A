function biggerText(){
    var txt = document.getElementById("inputText");
	txt.style.fontSize = "24pt";
}

function normalText(){
    var txt = document.getElementById("inputText");
    txt.style.fontSize = "13px";
}

function fancify(){
    var txt = document.getElementById("inputText");
	txt.style.fontWeight = "bold";
	txt.style.color = "blue";
	txt.style.textDecoration = "underline";
}

function boring(){
    var txt = document.getElementById("inputText");
	txt.style.fontWeight = "normal";
	txt.style.color = "black";
	txt.style.textDecoration = "none";
}

function moo(){
    var txt = document.getElementById("inputText");
    var split = txt.value.split(".");
    txt.value = split.join("-Moo.");
}