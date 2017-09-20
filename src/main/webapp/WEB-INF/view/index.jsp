<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<!-- Content type -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- For mobile devides -->
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Título -->
<title>EAST CUSTOM</title>

<!-- Font's -->
<link
	href="https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display|Megrim"
	rel="stylesheet">

<!-- CSS  -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet">
<link href="resources/css/materialize.css" type="text/css"
	rel="stylesheet" media="screen,projection" />
<link href="resources/css/style.css" type="text/css" rel="stylesheet"
	media="screen,projection" />
</head>
<body class="fade">
	<!-- Navbar -->
	<c:import url="component/navbar.jsp"></c:import>

	<!-- Banner Principal -->
	<div id="banner-principal"
		class="parallax-container valign-wrapper z-depth-1">
		<div class="section no-pad-bot">
			<div class="container">
				<div class="row center">
					<h4 class="header col s12 light white-text">
						Cada carro é <b>único</b>. Nossos serviços também.
					</h4>
				</div>
			</div>
		</div>
		<div class="parallax">
			<img src="resources/img/banner-principal03.jpg"
				alt="Seja bem-vindo !">
		</div>
	</div>

	<!-- br -->
	<br>

	<!-- Conteúdo principal -->
	<!-- Título de apresentação -->
	<div class="row">
		<div class="col s12 m7 l7 center-align">
			<h5>Olá, seja bem-vindo !</h5>
			<span>Paixão, Qualidade, Sinceridade e Confiança é a nossa
				prioridade.</span>
			<div class="divider"></div>
		</div>

		<!-- Notícias -->
		<div class="col s12 m5 l5">
			<h5>Últimas notícias do mundo automobilístico</h5>
			<span>Fonte : G1</span>
			<div class="divider"></div>

			<!-- Lista de Notícias -->
			<ul id="ultimas-noticias" class="collection hoverable">
				<!-- ... -->
			</ul>
		</div>
	</div>

	<!-- Footer -->
	<c:import url="component/footer.jsp"></c:import>

	<!--  Scripts-->
	<script src="resources/js/jquery-3.2.1.js"></script>
	<script src="resources/js/materialize.js"></script>
	<script src="resources/js/dedicated.js" charset="utf-8"></script>
</body>
</html>