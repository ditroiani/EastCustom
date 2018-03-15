// Recebendo notícias
// noticiaG1();

// GET Notícias
function noticiaG1() {
	// Carrega notícias
	$
			.getJSON({
				url : "noticiasG1",
				type : "GET",
				beforeSend : function() {
					// Antes de terminar a requisição
					$('#preloader').fadeIn(4000);
				},
				success : function(feed) {
					// Inicializando carousel
					var slider = $('#feed-carousel').carousel();

					// Ajusta slider do carousel
					$('.carousel.carousel-slider').carousel({
						fullWidth : true
					});

					// Atribui valores para página
					$
							.each(
									feed.messages,
									function(i, feedMessage) {
										// Atributo que será
										// inserido na lista de
										// notícias
										var titleFeed = feedMessage.title;
										var link = feedMessage.link;
										var imgSrc = (feedMessage.imgDescription != null) ? 'data:image/jpg;base64, '
												+ feedMessage.imgDescription
												: 'resources/img/g1-logo.png';
										var descFeed = feedMessage.description
												.substring(0, 250)
												+ " ...";

										// Carousel Item
										var captionFeed = '<div class="desc-feed">'
												+ '<input id="linkFeedMessage" type="hidden"'
												+ ' value="'
												+ link
												+ '">'
												+ '<div class="content-desc">'
												+ '<span class="title-feed">'
												+ titleFeed
												+ '</span></br>'
												+ '<span class="description">'
												+ descFeed
												+ '</span></div></div>';
										var itemCarousel = '<div class="carousel-item">'
												+ '<img class="img-feed" '
												+ 'title="'
												+ titleFeed
												+ '" '
												+ 'src="'
												+ imgSrc
												+ '"/>'
												+ captionFeed + ' </div>';

										// Adicionando para carousel
										slider.append(itemCarousel);
									});

					// Remove a classe de inicialização que evita que o carousel
					// se inicialize novamente quando não for
					// necessário
					if (slider.hasClass('initialized')) {
						slider.removeClass('initialized');
					}

					// Removing preloader feed
					$('#preloader').hide();

					// Showing feed-carousel content
					$('#feed-carousel').fadeIn(4000);

					// Reinicializar carousel para atualização de conteúdo
					slider.carousel();
				},
				error : function(e) {
					Materialize.toast("Erro de carregamento de feed!", 3000);
				}
			});
}

// Redirecionar para link do feed
$(".carousel").click(function() {
	// Click item carousel
	$('.carousel-item .desc-feed').click(function() {
		var link = $(this).children('#linkFeedMessage').val();

		// Abrindo nova guia
		window.open(link, '_blank');
	});
});