// document ready
$(document).ready(function() {
	// promotions
	var month = ['Janeiro', 'Fevereiro', 'Março',
		'Abril', 'Maio', 'Junho', 'Julho',
		'Agosto', 'Setembro', 'Outubro',
		'Novembro', 'Dezembro'];
	var textMonth = document.getElementById('month-promotion');
	textMonth.appendChild(document.createTextNode(month[
		new Date().getMonth()
	].toUpperCase()));
	
	// notices
	noticiaG1();
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
			$('.carousel .carousel-slider').carousel({
				fullWidth : true
			});

			// set each values
			$.each(feed.messages, function(i, feedMessage) {
				// feed content
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
				
				link.setAttribute("class", "btn waves-effect red");
				link.setAttribute("onclick", "openLink('" + feedMessage.link + "');");
				link.textContent = "Saiba mais";
				
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

			// hide preloader and show notices
			$('#preloader').hide();
			$('#notices').fadeIn(4000);
			
			// reinit carousel
			slider.carousel({
				fullWidth : true
			});
		},
		error : function(e) {
			Materialize.toast("Ops, houve um problema no feed!", 3000);
		}
	});
}

// link notice (for browser's support)
function openLink(link) {
	window.open(link, '_system');
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