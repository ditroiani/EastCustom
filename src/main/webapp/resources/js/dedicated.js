/*
 * Author: Diego Troiani Rodrigues
 * Obs: File dedicated for load elements and functionalities.
 * 
 * SUMMARY
 * - notices
 * - map with Google
 */

// document ready
$(document).ready(function() {
	// promotions
	var month = ['Janeiro', 'Fevereiro', 'Março',
		'Abril', 'Maio', 'Junho', 'Julho',
		'Agosto', 'Setembro', 'Outubro',
		'Novembro', 'Dezembro'];
	var textMonth = document.getElementById('month-promotion');
	// textMonth.appendChild(document.createTextNode(month[
	//	new Date().getMonth()
	// ].toUpperCase()));
	
	// notices
	notices();
});

// - notices G1
// = = = = = = = = = = = = = = = = = = = =
function notices() {
	// request
	$.getJSON({
		url : "noticiasG1",
		type : "GET",
		beforeSend : function() {
			// fadein preloader
			$('.preloader').fadeIn(5000);
		},
		success : function(feed) {
			// init carousel
			var slider = $('.notices').carousel();
			
			// set each item of carousel
			$.each(feed.messages, function(i, feedMessage) {
				// add message feed to carousel
				if (i == 0) {
					var feedMsg = document.createElement('div');
					var msgContainer = document.createElement('div');
					var imgMsg = document.createElement('img');
					var titleMsg = document.createElement('h4');
					var textMsg = document.createElement('p');
					
					// set class in containers
					feedMsg.setAttribute('class','carousel-item msg-feed');
					msgContainer.setAttribute('class', 'msg-container no-select');
					
					// set value in elements
					imgMsg.setAttribute('alt', 'Globo Auto Esporte');
					imgMsg.setAttribute('draggable', 'false');
					imgMsg.setAttribute('src', 'resources/img/logo-auto-esporte.png');
					imgMsg.setAttribute('title', 'Globo Auto Esporte');
					titleMsg.textContent = 'Notícias';
					textMsg.textContent = 
						'Arraste para o lado e fique por dentro do mundo automobilístico';
					
					// append elements in containers
					msgContainer.append(imgMsg);
					msgContainer.append(titleMsg);
					msgContainer.append(textMsg);
					feedMsg.append(msgContainer);
					
					// add item to carousel
					slider.append(feedMsg);
				}
				
				// feed
				var feed = document.createElement('div');
				var img = document.createElement('img');
				var caption = document.createElement('div');
				var contentTitle = document.createElement('div');
				var contentLink = document.createElement('div');
				var title = document.createElement('h5');
				var link = document.createElement('a');
				
				// add class to elements
				feed.setAttribute('class', 'carousel-item');
				img.setAttribute('class', 'img-feed');
				caption.setAttribute('class', 'caption-feed');
				contentTitle.setAttribute('class', 'title-feed');
				contentLink.setAttribute('class', 'link-feed');
				link.setAttribute("class", "btn waves-effect");

				// set values to elements
				img.setAttribute('src', (feedMessage.imgDescription != null) ? 
						'data:image/jpg;base64, ' + feedMessage.imgDescription : 
						'resources/img/g1-logo.png');
				img.setAttribute('title', feedMessage.title);
				title.textContent = feedMessage.title;
				link.textContent = "Saiba mais";
				link.setAttribute("onclick", "openLink('" + feedMessage.link + "');");
				
				// append elements to containers
				contentTitle.append(title);
				contentLink.append(link);
				caption.append(contentTitle);
				caption.append(contentLink);
					
				// append feed element's
				feed.append(img);
				feed.append(caption)
				
				// add element in carousel and increment count
				slider.append(feed);
				i++;
			});

			// remove init on carousel to prevent reinit when 
			// it is not necessary
			if (slider.hasClass('initialized')) {
				slider.removeClass('initialized');
			}

			// hide preloader and show notices
			$('.preloader').hide();
			$('.notices').fadeIn(4000);
			
			// reinit carousel for change
			slider.carousel({
				fullWidth : true
			});
		},
		error : function(e) {
			// toast error
			Materialize.toast("Ops, houve um problema no feed!", 3000);
		}
	});
}

// link notice
function openLink(link) {
	window.open(link, '_system');
}

// - map with Google
// = = = = = = = = = = = = = = = = = = = =
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