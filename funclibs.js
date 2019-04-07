String.prototype.format = function(...values) {
	cadena = this;
	for(let i in values){
		cadena = cadena.replace(`{${i}}`, values[i])
	}
	return cadena
};

HTMLButtonElement.prototype.ae = function(event, func){
	this.addEventListener(event, func);
};

function ide(x){
	return document.getElementById(x);
}

function cle(x){
	return document.getElementsByClassName(x);
}

function loaded(x){
	window.addEventListener("load",x);
}

function checkd(input1, input2, inneed1, inneed2, funcT, funcF){
	if (input1.value == inneed1 && input2.value == inneed2) {
		funcT();
	}
	else{
		funcF();
	}
}

function inputBlanker(...input){
	for(let x in input){
		x.value = ""
	}
}

function getAllId(){
	var all = document.body.getElementsByTagName('*');
	for(let i of all){
		if (i.id != ""){
			eval(`$${i.id} = document.getElementById('${i.id}')`);
		}
	}
}	
