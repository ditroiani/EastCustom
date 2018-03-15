// Inicializações de ferramentas
$('.parallax').parallax();
$('.carousel.carousel-slider').carousel({
	fullWidth : true
});

// Google Maps
function initMap() {
	// Coordinates
	var coordinates = {
		lat : -23.5390999,
		lng : -46.5404946
	};

	// Map Options
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom : 15,
		center : coordinates,
	});

	// Mark Options
	var marker = new google.maps.Marker({
		position : coordinates,
		map : map
	});
}