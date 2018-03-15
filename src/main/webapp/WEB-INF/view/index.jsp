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

<!-- Ícone -->
<link rel="shortcut icon" href="resources/img/logo-ico.ico"
	type="image/x-icon" />

<!-- Título -->
<title>East Custom</title>

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
	<main>
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
			<img id="main-img" src="resources/img/banner-principal03.jpg"
				alt="Seja bem-vindo !">
		</div>
	</div>

	</br>

	<!-- Montadoras -->
	<div id="montadora" class="row">
		<div class="col s2 m1 l1 center">
			<img title="BMW" src="resources/img/montadora/bmw-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Chevrolet"
				src="resources/img/montadora/chevrolet-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Dodge" src="resources/img/montadora/dodge-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Fiat" src="resources/img/montadora/fiat-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Ford" src="resources/img/montadora/ford-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Honda" src="resources/img/montadora/honda-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Hyundai" src="resources/img/montadora/hyundai-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Land Rover"
				src="resources/img/montadora/land-rover-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Mercedez-Benz"
				src="resources/img/montadora/mercedes-benz-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Mitsubishi"
				src="resources/img/montadora/mitsubishi-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Toyota" src="resources/img/montadora/toyota-logo.png"
				class="responsive-img">
		</div>
		<div class="col s2 m1 l1 center">
			<img title="Volkswagen"
				src="resources/img/montadora/volkswagen-logo.png"
				class="responsive-img">
		</div>
	</div>

	<!-- Conteúdo principal --> <!-- Título -->
	<div class="row">
		<div class="col s12 m6 l6">
			<div id="header-promocao">
				<h5 class="truncate">
					Oferta(s) de <b>Fevereiro</b>
				</h5>
				<span class="truncate">Uma nova oferta todo mês, de até <b>20%</b>
					de desconto!
				</span>
			</div>

			<!-- Container de promoções -->
			<div id="content-promocao">
				<span>PROMOÇÕES</span>
			</div>
		</div>

		<!-- Notícias -->
		<div class="col s12 m6 l6">
			<div id="header-noticias">
				<h5 class="truncate">Últimas notícias do mundo automobilístico</h5>
				<span class="truncate">Fonte : G1 / Autoesporte</span>
			</div>

			<!-- Preloader -->
			<div id="preloader">
				<div id="preloader-inner">
					<div class="preloader-wrapper big active">
						<div class="spinner-layer spinner-red-only">
							<div class="circle-clipper left">
								<div class="circle"></div>
							</div>
							<div class="gap-patch">
								<div class="circle"></div>
							</div>
							<div class="circle-clipper right">
								<div class="circle"></div>
							</div>
						</div>
					</div>

					<p class="red-text text-lighten-2">Aguarde um momento</p>
				</div>
			</div>

			<!-- Lista de Notícias -->
			<div id="feed-carousel" class="carousel carousel-slider"></div>
		</div>
	</div>

	<!-- DESCRIÇÃO DA EMPRESA --> <!-- Título -->
	<div class="row">
		<div class="col s12 m12 l12">
			<h5>O que é a East Custom?</h5>
			<div class="divider"></div>
		</div>
	</div>

	<!-- Descrição da empresa e logotipo-->
	<div class="row">
		<div class="col s8 m8 l8">
			<div id="content-desc-empresa">
				<div id="desc-empresa">
					<p>Segundo o American Marketing Association, a definição do
						termo é a seguinte: "O Marketing é uma ativididade, conjunto de
						instituições e processor para criar, comunicar, entregar e trocar
						ofertas que tem valor para os consumidores, clientes, parceiros e
						sociedade em geral".</p>
					<p>Ou seja, o Marketing é uma série de estratégias, técnicas e
						práticas que tem o principal objetivo de agregar valor às
						determinadas marcas ou produtos a fim de atribuir uma maior
						importância das mesmas para um determinado público-alvo, os
						consumidores.</p>
					<p>Se engana que acreditar que o Marketing tem apenas como
						objetivo vender algo.</p>
				</div>
			</div>
		</div>

		<div class="col s4 m4 l4">
			<div id="content-logo-empresa">
				<img id="logo-empresa" src="resources/img/logo2.png"
					title="Oficina Automotiva East Custom" class="responsive-img">
			</div>
		</div>
	</div>

	<!-- Título de Serviços -->
	<div class="row">
		<div class="col s12 m12 l12 right-align">
			<h5>Serviços que realizamos</h5>
			<div class="divider"></div>
		</div>
	</div>

	<!-- Content de Serviços -->
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="slider-servicos" class="carousel carousel-slider center"
				data-indicators="true">
				<div class="carousel-fixed-item center"></div>
				<div class="carousel-item red white-text" href="#one!">
					<h2>Mecânica</h2>
					<p class="white-text">Descrição</p>
				</div>
				<div class="carousel-item amber white-text" href="#two!">
					<h2>Injeção Eletrônica</h2>
					<p class="white-text">Descrição</p>
				</div>
				<div class="carousel-item green white-text" href="#three!">
					<h2>Pit-Stop</h2>
					<p class="white-text">Descrição</p>
				</div>
				<div class="carousel-item blue white-text" href="#four!">
					<h2>Trasnmissão Automática</h2>
					<p class="white-text">Descrição</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Parcerias -->
	<div class="row">
		<div class="col s12 m12 l12 center-align">
			<!-- Parcerias -->
			<h5>Parcerias</h5>
			<div class="divider"></div>
		</div>
	</div>

	<div class="row">
		<div class="col s12 m12 l12">
			<p>Fotos</p>
		</div>
	</div>
	</main>

	<!-- Footer -->
	<c:import url="component/footer.jsp"></c:import>

	<!--  Scripts-->
	<script src="resources/js/jquery-3.2.1.js"></script>
	<script src="resources/js/materialize.js"></script>
	<script src="resources/js/dedicated.js" charset="utf-8"></script>
	<script src="resources/js/feed.js" charset="utf-8"></script>
</body>
</html>