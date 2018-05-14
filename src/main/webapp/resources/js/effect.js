/*
 * Author: Diego Troiani
 * Obs: file dedicated for effect's.
 */

/*
	Summary
	- fade
	- slide
	- promotions
	- services
*/

// fade
// = = = = = = = = = = = = = = = = = = = =
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

// - slide
// = = = = = = = = = = = = = = = = = = = =
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
		
	// incrementa valor do index
	slideIndex++;
	
	// verifica index do slide e, caso for maior
	// reseta valor
	if(slideIndex > slides.length){
		slideIndex = 1;
	}
	
	// exibi slide com fadeIn
	slides[slideIndex - 1].style.display = 'block';
	fadeIn(slides[slideIndex - 1].getAttribute('class'), 0.5);
	
	// animação do caption, após a exibição da img do slide
	slides[slideIndex - 1].querySelector('.caption-container').style.animation = 'captionAnimation 2s';
	
	// tempo da exibição do slide
	setTimeout(showSlides, 8000);
}

// - services
// = = = = = = = = = = = = = = = = = = = =
var interval;
var img;
var count = 0;

$('#services')
	.mouseenter(function(){
		// light img
		if (interval == null){
			interval = setInterval(function(){
				if(count == 0){
					count++;
					img = $('#services .col img[src="resources/img/mecanica.png"]');
					img.css('filter', 'brightness(90%)');
				} else if(count == 1){
					count++;
					img = $('#services .col img[src="resources/img/injecao-eletronica.png"]');
					img.css('filter', 'brightness(90%)');
				} else if(count == 2){
					count++;
					img = $('#services .col img[src="resources/img/trans-automatica.png"]');
					img.css('filter', 'brightness(90%)');
				} else if(count == 3){
					count++;
					img = $('#services .col img');
					img.css('filter', 'brightness(5%)');
				} else if (count == 4){
					count++;
					img.css('filter', 'brightness(90%)');
				} else if (count > 4){
					clearInterval(interval);
				}
			}, 400);
		}
	});