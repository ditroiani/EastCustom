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

function openNewTab() {
	window.open('https://google.com', '_system');
}

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
			// feed carousel
			var carousel = $('.notices');
			var iconHideCaption = document.createElement('img');
			
			// set value icon for hide caption
			iconHideCaption.setAttribute('src','resources/img/icon-hide-caption.png');
			// carousel.append(iconHideCaption);
			
			// set each feed
			$.each(feed.messages, function(i, feedMessage){
				if (i == 0) {
					var itemFeedMsg = document.createElement('div');
					var msgContainer = document.createElement('div');
					var imgMsg = document.createElement('img');
					var titleMsg = document.createElement('h4');
					var textMsg = document.createElement('p');
					
					// set class in containers
					itemFeedMsg.setAttribute('class','notice-item');
					imgMsg.setAttribute('class', 'img-msg-feed');
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
					itemFeedMsg.append(msgContainer);
					
					// add item to carousel
					carousel.append(itemFeedMsg);
				}
				
				// elements for item carousel
				var itemFeed = document.createElement('div');
				var imgFeed = document.createElement('img');
				var linkFeed = document.createElement('img');
				var captionFeed = document.createElement('div');
				var titleFeed = document.createElement('h4');
					
				// set class to elements
				linkFeed.setAttribute('class', 'link-feed');
				itemFeed.setAttribute('class', 'notice-item');
				imgFeed.setAttribute('class', 'img-feed');
				captionFeed.setAttribute('class', 'caption-feed');

				// set feed value
				linkFeed.setAttribute("onclick", "openLink('" + 
						feedMessage.link + "');");
				linkFeed.setAttribute('src', 'resources/img/icon-link-feed.png');
				linkFeed.setAttribute('title', 'Clique aqui e saiba mais!');
				imgFeed.setAttribute('src', (feedMessage.imgDescription != null) ? 
						'data:image/jpg;base64, ' + feedMessage.imgDescription : 
				'resources/img/g1-logo.png');
				titleFeed.textContent = feedMessage.title;
				
				// append items
				// captionFeed.append(titleFeed);
				itemFeed.append(imgFeed);
				itemFeed.append(linkFeed);
				itemFeed.append(captionFeed);
				carousel.append(itemFeed);
			});
			
			// fadeOut preloader
			$('.preloader').hide();
			
			carousel.flickity({
				draggable: true,
				prevNextButtons: false,
				pageDots: false,
				wrapAround: true
			});
			
			// init carousel
			carousel.fadeIn(3000);
		},
		error : function(e) {
			// toast error
			Materialize.toast("Ops, houve um problema no feed!", 3000);
		}
	});
}

// link notice
function openLink(link){
	window.open(link, '_system');
	console.log(link);
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