/*
 * Author: Diego Troiani
 * Obs: file dedicated for effect's.
 */

/*
	Summary
	- fade
	- slide
	- promotions
	- desc company
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

// - desc company
// = = = = = = = = = = = = = = = = = = = =
var intervalDescCompany;

$('.company').mouseenter(function(){
	// change word's
	if(intervalDescCompany == null) {
		var company = $('.company');
		var word = [
			$('.w0'),
			$('.w1'),
			$('.w2'),
			$('.w3'),
			$('.w4'),
			$('.w5'),
			$('.w6'),
			$('.w7')];
		var count = 0;
		
		// change background
		company.css('background','var(--primary)');
		company.css('box-shadow', '0 1px 4px var(--primary)');
		company.css('color','white');
		company.css('transition','0.6s');
		
		// change each word color
		intervalDescCompany = setInterval(function() {
			if (word[count]) {
				var color = [
					'rgb(255, 152, 0)',
					'rgb(38, 38, 123)',
					'rgb(255, 235, 59)',
					'rgb(255, 235, 59)',
					'rgb(255, 235, 59)',
					'rgb(0, 156, 59)',
					'rgb(0, 40, 104)',
					'rgb(213, 0, 0)'
				];
				if (word[count] == word[word.length - 1]) {
					var lastP = [
						'E ', 'é ', 'com ', 'enorme ',
						'prazer, ', 'que ', 
						'<span class="w8"><b>agradecemos à você</b></span> ', 
						'por ', 'fazer ', 'parte ', 'de ', 'nosso ', 
						'trabalho!'
					];
					var countWord = 0;
					var eachWord = word[count];
					var intervalEachWord;
					
					// set each word in element p
					intervalEachWord = setInterval(function() {
						if(countWord <= lastP.length - 1) {
							// append
							eachWord.append(lastP[countWord]);
							countWord++;
						} else {
							// change last word and filter in logo
							$('.w8').css('transition', '1.2s');
							$('.w8').css('color', 'red');
							$('.logo-desc-company img').css('filter', 'grayscale(0)');
							$('.logo-desc-company img').css('opacity', '0.8');
							clearInterval(intervalEachWord);
						}
					}, 250);
				} else {
					// change color
					word[count].css('color', color[count]);
					word[count].css('transition', '0.4s');
				}
				
				count++;
			} else {
				clearInterval(intervalDescCompany);
			}
		}, 600);
	}
});

// - services
// = = = = = = = = = = = = = = = = = = = =
var intervalService;

$('.services').mouseenter(function(){
	// light img
	if (intervalService == null){
		var img;
		var count = 0;
		
		intervalService = setInterval(function(){
			if(count == 0){
				count++;
				img = $('.services .col img[src="resources/img/mecanica.png"]');
				img.css('filter', 'brightness(90%)');
			} else if(count == 1){
				count++;
				img = $('.services .col img[src="resources/img/injecao-eletronica.png"]');
				img.css('filter', 'brightness(90%)');
			} else if(count == 2){
				count++;
				img = $('.services .col img[src="resources/img/trans-automatica.png"]');
				img.css('filter', 'brightness(90%)');
			} else if(count == 3){
				count++;
				img = $('.services .col img');
				img.css('filter', 'brightness(5%)');
			} else if (count == 4){
				count++;
				img.css('filter', 'brightness(90%)');
			} else if (count > 4){
				clearInterval(intervalService);
			}
		}, 400);
	}
});