function mensagem(){
	var media;
	let n1 = parseInt(document.getElementById('n1').value);
	let n2 = parseInt(document.getElementById('n2').value);
	let n3 = parseInt(document.getElementById('n3').value);
	let ipt = document.getElementById('resultado');
	
	let lado1 = n1+n2;
	let lado2 = n1+n3;
	let lado3 = n2+n3;
	if (lado1>n3 && lado2>n2 && lado3>n1) {
		if (n1 == n2 && n2 == n3) {
			ipt.value = 'triangulo equilatero';
		}else if (n1 == n2 || n2 == n3 || n1 == n3) {
			ipt.value = 'triangulo isósceles';
		}else if (n1 != n2 & n2 != n3 & n1 != n3) {
			ipt.value = 'triangulo escaleno';
		}else{
			ipt.value = 'erro';
		}
	}else{
		ipt.value = 'Isso não é um triangulo seu bosta';
	}
	

	

	
	
}