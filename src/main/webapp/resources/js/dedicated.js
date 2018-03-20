// slider (MaterializeCSS)
$('.slider').slider({
	height: '85vh',
	indicators: false,
	transition: 800,
	interval : 8000
});

// map (Google Maps)
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