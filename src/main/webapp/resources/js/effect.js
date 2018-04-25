/*
 * Author: Diego Troiani
 * Obs: file dedicated for effect's page.
 */

/*
	Summary
	- slide
	- services
*/

// - slide
var slideIndex = 0;
showSlides();

function showSlides(){
	var i;
	var slides = document.getElementsByClassName('slide-content');
	
	// percorre e esconde slides
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
		slides[i].style.opacity = 0;
	}
		
	// incrementa valor index
	slideIndex++;
	
	// verifica index do slide e, caso for maior
	// reseta valor
	if(slideIndex > slides.length){
		slideIndex = 1;
	}
	
	// exibi slide
	slides[slideIndex - 1].style.display = 'block';
	fadeIn(slides[slideIndex - 1].getAttribute('class'), 0.6);
	
	// animação do caption, de acordo com slide
	slides[slideIndex - 1].querySelector('.caption-container').style.animation = 'captionTwo 2s';
	
	// tempo para mudar slide
	setTimeout(showSlides, 8000);
}

// fade
function fade(id, time, ini, fin) {
	var target = document.getElementsByClassName(id);
	var alpha = ini;
	var inc;

	// verifica se efeito é valor para fadeIn ou fadeOut
	if (fin >= ini){
		inc = 2;
	} else {
		inc = -2;
	}
	
	// conversão de tempo / milliseconds
	time = (time * 1000) / 50;

	// fade
	var i = setInterval(function() {
		// verifica valores para término de efeito
		if((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)){
			clearInterval(i);
		}
		// aplica efeito
		setAlpha(target[slideIndex - 1], alpha);
		
		// atribui valor para contagem
		alpha += inc;
	}, time);
}

// set alpha
function setAlpha(target, alpha){
	target.style.opacity = alpha/100;
}

// fadeIn
function fadeIn(id, time){
	fade(id, time, 0, 100);
}

// fadeOut
function fadeOut(id, time){
	fade(id, time, 100, 0);
}