function mensagem(){
	var desconto;
	let n1 = parseFloat(document.getElementById('n1').value);
	let n2 = parseFloat(document.getElementById('n2').value);;
	let x1 = document.getElementById('resultado');
	
	let result = n1*n2;
	
	if (result<901) {
		desconto = result * 0.14;
		x1.value = result - desconto
	}else if (result>900 && result<1501) {
		desconto = result * 0.19;
		x1.value = desconto
	}else if (result>1501 && result<2501) {
		desconto = result * 0.24;
		x1.value = result - desconto
	}else if (result>2500) {
		desconto = result * 0.29;
		x1.value = result - desconto
	}

}