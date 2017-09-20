// Inicializações de ferramentas
$('.parallax').parallax();

// FadeIn em body e active em tab início
// $(".fade").hide().delay(200).fadeIn(5000);

// Dropdown
$('.dropdown-button').dropdown({
	inDuration : 300,
	outDuration : 500,
});

// Recebendo notícias
noticiaG1();

// GET Notícias
function noticiaG1() {
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
				var link = String(noticia.link);

				// console.log(typeof (link) + ' : ' + link);

				// Preparação do
				// atributo
				li = '<li class="collection-item avatar">'
						+ '<input id="linkFeedMessage" type="hidden"'
						+ ' value="' + link + '">'
						+ '<img src="resources/img/g1-logo.png"'
						+ ' class="circle">' + '<span class="title">'
						+ noticia.title + '</span><p id="descricao-noticia">'
						+ noticia.description + '</p>'
						+ '<p id="data-noticia" align="right">'
						+ noticia.pubDate + '</p></li>';

				// Adicionando atributo
				// em elemento
				$('#ultimas-noticias').append(li);
			});
		},
		error : function(e) {
			Materialize.toast("Erro de carregamento de feed!" + e, 2500);
		}
	});
}

// Abrir notícia em uma nova guia
$('#ultimas-noticias').on('click', 'li', function(e) {
	// Atribuindo valor de url
	var url = $(this).find("#linkFeedMessage").val();

	// Abrindo nova guia
	window.open(url);
});
