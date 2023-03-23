function mensagem(){
	let result1;
	let result2;
	let n1 = parseFloat(document.getElementById('n1').value);
	let n2 = parseFloat(document.getElementById('n2').value);
	let n3 = parseFloat(document.getElementById('n3').value);
	let x1 = document.getElementById('x1');
	let x2 = document.getElementById('x2');
	
	result1 = ((-1*n2) + Math.sqrt((n2*n2) - (4*n1*n3)))/2*n1;
	result2 = ((-1*n2) - Math.sqrt((n2*n2 )- (4*n1*n3)))/2*n1;
	
	x1.value = result1
	x2.value = result2
	
}