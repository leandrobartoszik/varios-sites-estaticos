function mensagem(){
	
	
	let n1 = parseInt(document.getElementById('n1').value);
	var lista=["sabado","domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira"];
	let result = lista[n1];
	
	
	
	document.getElementById('resultado').value = result;
	

	
	
}