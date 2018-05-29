/*
 * Author: Diego Troiani Rodrigues
 * Obs: File dedicated for effects of the elements.
 * 
 * SUMMARY
 * - attributes
 * 		- for welcome slide
 * 		- for desc company
 * 		- for services
 * - fade effect
 * - welcome slide
 * - promotions
 */

// - attributes
// = = = = = = = = = = = = = = = = = = = =
// for welcome slide
var welcomeSlide = 0;

// for desc company
var intervalDescCompany;

// for services
var intervalService;

// - fade effect
// = = = = = = = = = = = = = = = = = = = =
function fade(id, time, ini, fin) {
	var target = document.getElementsByClassName(id);
	var alpha = ini;
	var inc;

	// verify if effect is fadeIn or fadeOut
	if (fin >= ini){
		inc = 2;
	} else {
		inc = -2;
	}
	
	// conversion of time
	time = (time * 1000) / 50;

	// fade effect
	var i = setInterval(function() {
		// verify values for end interval
		if((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)){
			// end interval
			clearInterval(i);
		}
		// apply effect
		setAlpha(target[welcomeSlide - 1], alpha);
		
		// assign value for count
		alpha += inc;
	}, time);
}

// set alpha (opacity)
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

// - welcome slide
// = = = = = = = = = = = = = = = = = = = =
showSlides();

// show slides
function showSlides(){
	var slides = document.getElementsByClassName('slide-content');
	var i;
	
	// runs slides and hides
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
		slides[i].style.opacity = 0;
	}
		
	// increment value
	welcomeSlide++;
	
	// verify value index and if it is great, reinit value
	if(welcomeSlide > slides.length){
		welcomeSlide = 1;
	}
	
	// show slide and add effect fadeIn
	slides[welcomeSlide - 1].style.display = 'block';
	fadeIn(slides[welcomeSlide - 1].getAttribute('class'), 0.5);
	
	// setTimeout show slide
	setTimeout(showSlides, 8000);
}

// - desc company
// = = = = = = = = = = = = = = = = = = = =
$('.company').mouseenter(function(){
	// change color word's
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
		
		// change background desc company
		company.css('background','var(--primary)');
		company.css('box-shadow', '0 1px 4px var(--primary)');
		company.css('color','white');
		
		// change selected word color
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
				
				// verify last word for increment paragraph
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
							$('.logo-desc-company img').css('opacity', '0.9');
							
							// end interval
							clearInterval(intervalEachWord);
						}
					}, 150);
				} else {
					// change color
					word[count].css('color', color[count]);
					word[count].css('transition', '0.4s');
				}
				// increment count
				count++;
			} else {
				// end interval
				clearInterval(intervalDescCompany);
			}
		}, 600);
	}
});

// - services
// = = = = = = = = = = = = = = = = = = = =
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
				img.css('filter', 'brightness(28%)');
			} else if (count == 4){
				count++;
				img.css('filter', 'brightness(90%)');
			} else if (count > 4){
				// end interval
				clearInterval(intervalService);
			}
		}, 400);
	}
});