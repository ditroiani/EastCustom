// Inicializações de ferramentas
$('.parallax').parallax();

// FadeIn em body e active em tab início
$(".fade").hide().delay(200).fadeIn(5000);

// Dropdown
$('.dropdown-button').dropdown({
	inDuration : 300,
	outDuration : 500,
});

// Leitura completa do HTML
$(document).ready(
		function() {
			// Carrega notícias
			$.getJSON({
				url : "noticiasG1",
				type : "GET",
				success : function(noticias) {
					// Atribui valores para página
					$.each(noticias.messages, function(i, noticia) {
						// Atributo que será
						// inserido na lista de
						// notícias
						var li;

						// Preparação do
						// atributo
						li = '<li class="collection-item avatar">'
								+ '<img src="' + atob(noticia.imgDescription)
								+ '"' + 'class="circle">'
								+ '<span class="title">' + noticia.title
								+ '</span>' + '<div class="divider"></div>'
								+ '<p>' + noticia.description + '<br><i>'
								+ noticia.pubDate + '</i></p>' + '</li>';

						// Adicionando atributo
						// em elemento
						$('#ultimas-noticias').append(li);
					});

					// console.log(noticias);
				},
				error : function(e) {
					Materialize.toast("Erro de carregamento..." + e, 2500);
				}
			});
		});
