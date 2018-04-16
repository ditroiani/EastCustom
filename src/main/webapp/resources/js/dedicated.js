// document ready
$(document).ready(function() {
	// welcome slider
	$('#welcome-slider').slider({
		indicators: false,
		transition: 1000,
		interval : 8000
	});
	
	// notices
	// noticiaG1();
});

// notices request
function noticiaG1() {
	// request
	$.getJSON({
		url : "noticiasG1",
		type : "GET",
		beforeSend : function() {
			// fadein preloader
			$('#preloader').fadeIn(6000);
		},
		success : function(feed) {
			// init carousel
			var slider = $('#notices').carousel();

			// config carousel
			$('.carousel.carousel-slider').carousel({
				fullWidth : true
			});

			// set each valus
			$.each(feed.messages, function(i, feedMessage) {
				// fee contentd
				var feed = document.createElement('div');
				feed.setAttribute('class', 'carousel-item');
				
				// image feed
				var img = document.createElement('img');
				img.setAttribute('class', 'img-feed');
				img.setAttribute('src', (feedMessage.imgDescription != null) ? 
								'data:image/jpg;base64, ' + feedMessage.imgDescription : 
								'resources/img/g1-logo.png');
				img.setAttribute('title', feedMessage.title);
				
				// caption feed
				var caption = document.createElement('div');
				var contentTitle = document.createElement('div');
				var contentLink = document.createElement('div');
				var title = document.createElement('h5');
				var link = document.createElement('button');
				
				caption.setAttribute('class', 'caption-feed');
				contentTitle.setAttribute('class', 'title-feed');
				contentLink.setAttribute('class', 'link-feed');
				title.textContent = feedMessage.title;
				
				link.setAttribute('class', 'btn waves-effect red');
				link.setAttribute("onclick", "openLink('" + feedMessage.link + "');");
				link.textContent = 'Saiba mais';
				
				contentTitle.append(title);
				contentLink.append(link);
				caption.append(contentTitle);
				caption.append(contentLink);
					
				// append feed element's
				feed.append(img);
				feed.append(caption)
				
				// add element in carousel
				slider.append(feed);
			});

			// Remove a classe de inicialização que evita que o carousel
			// se inicialize novamente quando não for
			// necessário
			if (slider.hasClass('initialized')) {
				slider.removeClass('initialized');
			}

			// hide preloader
			$('#preloader').hide();

			// show feed carousel
			$('#notices').fadeIn(4000);

			// reinit carousel
			slider.carousel();
		},
		error : function(e) {
			Materialize.toast("Ops, houve um problema no feed!", 3000);
		}
	});
}

// open link notice (for browser's support)
function openLink(link) {
	window.open(link, '_blank');
}

// map (Google Maps)
function initMap() {
	// coordinates
	var coordinates = {
		lat : -23.5264934,
		lng : -46.515319
	};

	// map options
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom : 15,
		center : coordinates,
	});

	// mark options
	var marker = new google.maps.Marker({
		position : coordinates,
		map : map
	});
}

// effect's
// services
var interval;
var img;
var count = 0;

$('#services')
	.mouseenter(function(){
		// verify content if active
		if($(this).css('background-color') != 'rgb(0, 0, 0)'){
			// active
			$(this).css('background-color', 'var(--primary)');
			$(this).css('box-shadow', '0 1px 4px var(--primary)');
			$(this).css('color', 'white');
		}
		
		// light img
		if (interval == null){
			interval = setInterval(function(){
				if (count > 2){
					clearInterval(interval);
				} else if(count == 0){
					count++;
					img = $('#services .col img[src="resources/img/mecanica.png"]');
					img.css('filter', 'brightness(0.9)');
				} else if(count == 1){
					count++;
					img = $('#services .col img[src="resources/img/injecao-eletronica.png"]');
					img.css('filter', 'brightness(0.9)');
				} else if(count == 2){
					count++;
					img = $('#services .col img[src="resources/img/trans-automatica.png"]');
					img.css('filter', 'brightness(0.9)');
0				}
			}, 300);
		}
	});