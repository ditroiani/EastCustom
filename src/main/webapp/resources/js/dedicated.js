// welcome slider
$('#welcome-slider').slider({
	indicators: false,
	transition: 1000,
	interval : 8000
});

// call function
noticiaG1();

// notices request
function noticiaG1() {
	// request
	$.getJSON({
		url : "noticiasG1",
		type : "GET",
		beforeSend : function() {
			// fadein preloader
			$('#preloader').fadeIn(4000);
		},
		success : function(feed) {
			// init carousel
			var slider = $('#notices').carousel();

			// config carousel
			$('.carousel.carousel-slider').carousel({
				fullWidth : true
			});

			// set values
			$.each(feed.messages, function(i, feedMessage) {
				// feed
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
				var title = document.createElement('div');
				var link = document.createElement('div');
				caption.setAttribute('class', 'caption-feed');
				title.setAttribute('class', 'title-feed');
				link.setAttribute('class', 'link-feed');
				title.innerHTML = '<h5>' + feedMessage.title + '</h5>';
				link.innerHTML = '<a href="' + feedMessage.link + 
								 '" target="_blank">SAIBA MAIS</a>';
				caption.append(title);
				caption.append(link);
					
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

// map (Google Maps)
function initMap() {
	// coordinates
	var coordinates = {
		lat : -23.5270614,
		lng : -46.5173345
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

