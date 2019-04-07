String.prototype.format = function(...values) {
	cadena = this;
	for(let i in values){
		cadena = cadena.replace(`{${i}}`, values[i])
	}
	return cadena
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

function ae(event, func){
	this.escuchar = function(){
		this.addEventListener(event, func);
	}
}

function getAll(){
	var all = document.body.getElementsByTagName('*');
	for(let i of all){
		if (i.id != ""){
			eval(`$${i.id} = document.getElementById('${i.id}')`);
		}
	}
}	
