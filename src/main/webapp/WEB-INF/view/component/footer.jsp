<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="resources/css/footer.css" type="text/css" rel="stylesheet"
	media="screen,projection" />
</head>
<body>
	<!-- Footer -->
	<footer class="page-footer grey darken-4">
	<div class="row">
		<!-- Contato -->
		<div class="col s12 m6 s6">
			<div id="content-contato">
				Contato
			</div>
		</div>

		<!-- Localização com API do Google Maps -->
		<div class="col s12 m6 l6">
			<div id="content-map">
				<div id="map"></div>
			</div>
		</div>
	</div>

	<!-- Copyright -->
	<div class="row">
		<!-- Copyright -->
		<div id="content-copyright" class="col s12 m12 l12 center-align">
			<span class="grey-text">Copyright @ 2018 Todos os direitos
				reservados. Oficina East Custom - CNPJ: 12.123.123/0001-01</span>
		</div>
	</div>

	<!-- Developer -->
	<div id="footer-developer" class="black">
		Developed by <span class="grey-text text-darken-3">Diego
			Troiani</span>
	</div>
	</footer>

	<!-- API Google -->
	<script async
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB35m9rYAF0SuPQ1nGLDXrLc93gOxkxcGU&callback=initMap">
		
	</script>
</body>
</html>