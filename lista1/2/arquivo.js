function mensagem(){
	var media;
	let nota1 = parseInt(document.getElementById('nota1').value);
	let nota2 = parseInt(document.getElementById('nota2').value);
	let nota3 = parseInt(document.getElementById('nota3').value);
	let nota4 = parseInt(document.getElementById('nota4').value);
	let ipt = document.getElementById('media');

	media=(nota1 + nota2 + nota3 + nota4) / 4;
	
	if (media<31) {
		
		ipt.value = 'ruim';
	}else if(media<60){
		
		ipt.value = 'abaixo da media';
	}
	else if(media<71){
		
		ipt.value = 'aprovado, mas precisa melhorar';
	}else if(media<86){
		console.log('muito bom');
		ipt.value = 'muito bom';
	}else if (media<100) {
		
		ipt.value = 'excelente';
	}else{
		console.log('erro');
	}
}