// welcome slider
$('#welcome-slider').slider({
	indicators: false,
	transition: 1000,
	interval : 8000
});

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

