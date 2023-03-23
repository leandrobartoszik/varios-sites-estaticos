function mensagem(){
	
	let n1 = parseFloat(document.getElementById('n1').value);
	let n2 = parseFloat(document.getElementById('n2').value);
	let ipt = document.getElementById('resultado');

	total = (n1*n2)/2;

	ipt.value = total;
	
} 