function mensagem(){
	
	let n1 = parseInt(document.getElementById('n1').value);
	let i=0;
	let resultado=0;
	
	if (n1<11) {
		for (n1; i < 11; i++) {
			resultado = n1*i;
			console.log(n1+" X " +i+" = "+resultado);
			
		}
	}else{
		console.log('numero invalido');
	}
	
}