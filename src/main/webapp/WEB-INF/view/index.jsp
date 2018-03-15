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

<!-- �cone -->
<link rel="shortcut icon" href="resources/img/logo-ico.ico"
	type="image/x-icon" />

<!-- T�tulo -->
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
						Cada carro � <b>�nico</b>. Nossos servi�os tamb�m.
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

	<!-- Conte�do principal --> <!-- T�tulo -->
	<div class="row">
		<div class="col s12 m6 l6">
			<div id="header-promocao">
				<h5 class="truncate">
					Oferta(s) de <b>Fevereiro</b>
				</h5>
				<span class="truncate">Uma nova oferta todo m�s, de at� <b>20%</b>
					de desconto!
				</span>
			</div>

			<!-- Container de promo��es -->
			<div id="content-promocao">
				<span>PROMO��ES</span>
			</div>
		</div>

		<!-- Not�cias -->
		<div class="col s12 m6 l6">
			<div id="header-noticias">
				<h5 class="truncate">�ltimas not�cias do mundo automobil�stico</h5>
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

			<!-- Lista de Not�cias -->
			<div id="feed-carousel" class="carousel carousel-slider"></div>
		</div>
	</div>

	<!-- DESCRI��O DA EMPRESA --> <!-- T�tulo -->
	<div class="row">
		<div class="col s12 m12 l12">
			<h5>O que � a East Custom?</h5>
			<div class="divider"></div>
		</div>
	</div>

	<!-- Descri��o da empresa e logotipo-->
	<div class="row">
		<div class="col s8 m8 l8">
			<div id="content-desc-empresa">
				<div id="desc-empresa">
					<p>Segundo o American Marketing Association, a defini��o do
						termo � a seguinte: "O Marketing � uma ativididade, conjunto de
						institui��es e processor para criar, comunicar, entregar e trocar
						ofertas que tem valor para os consumidores, clientes, parceiros e
						sociedade em geral".</p>
					<p>Ou seja, o Marketing � uma s�rie de estrat�gias, t�cnicas e
						pr�ticas que tem o principal objetivo de agregar valor �s
						determinadas marcas ou produtos a fim de atribuir uma maior
						import�ncia das mesmas para um determinado p�blico-alvo, os
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

	<!-- T�tulo de Servi�os -->
	<div class="row">
		<div class="col s12 m12 l12 right-align">
			<h5>Servi�os que realizamos</h5>
			<div class="divider"></div>
		</div>
	</div>

	<!-- Content de Servi�os -->
	<div class="row">
		<div class="col s12 m12 l12">
			<div id="slider-servicos" class="carousel carousel-slider center"
				data-indicators="true">
				<div class="carousel-fixed-item center"></div>
				<div class="carousel-item red white-text" href="#one!">
					<h2>Mec�nica</h2>
					<p class="white-text">Descri��o</p>
				</div>
				<div class="carousel-item amber white-text" href="#two!">
					<h2>Inje��o Eletr�nica</h2>
					<p class="white-text">Descri��o</p>
				</div>
				<div class="carousel-item green white-text" href="#three!">
					<h2>Pit-Stop</h2>
					<p class="white-text">Descri��o</p>
				</div>
				<div class="carousel-item blue white-text" href="#four!">
					<h2>Trasnmiss�o Autom�tica</h2>
					<p class="white-text">Descri��o</p>
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