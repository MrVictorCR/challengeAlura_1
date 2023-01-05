function encriptar(){
	
	var texto = document.getElementById("mInput").value.toLowerCase();
	
	var txtEncrip = texto.replace(/e/im,"enter");
	var txtEncrip = txtEncrip.replace(/o/im,"ober");
	var txtEncrip = txtEncrip.replace(/i/im,"imes");
	var txtEncrip = txtEncrip.replace(/a/im,"ai");
	var txtEncrip = txtEncrip.replace(/u/im,"ufat");
	
	document.getElementById("dibujo").style.display = "none";
	document.getElementById("txtRight").style.display = "none";
	document.getElementById("textArea").innerHTML = txtEncrip;
	document.getElementById("copy").style.display = "show";
	document.getElementById("copy").style.display = "inherit";
	
}

function desencriptar(){
	
	var texto = document.getElementById("mInput").value.toLowerCase();
	
	var txtEncrip = texto.replace(/enter/im,"e");
	var txtEncrip = txtEncrip.replace(/ober/im,"o");
	var txtEncrip = txtEncrip.replace(/imes/im,"i");
	var txtEncrip = txtEncrip.replace(/ai/im,"a");
	var txtEncrip = txtEncrip.replace(/ufat/im,"u");
	
	document.getElementById("dibujo").style.display = "none";
	document.getElementById("txtRight").style.display = "none";
	document.getElementById("textArea").innerHTML = txtEncrip;
	document.getElementById("copy").style.display = "show";
	document.getElementById("copy").style.display = "inherit";
	
}

function copy(){
	
	var data = document.querySelector("#textArea");
	data.select();
	document.execCommand("copy");
}