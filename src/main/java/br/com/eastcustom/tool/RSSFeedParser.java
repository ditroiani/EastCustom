package br.com.eastcustom.tool;

import java.awt.Dimension;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.imageio.ImageIO;
import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Characters;
import javax.xml.stream.events.XMLEvent;

import br.com.eastcustom.model.Feed;
import br.com.eastcustom.model.FeedMessage;

public class RSSFeedParser {
	// Atributos
	static final String TITLE = "title";
	static final String DESCRIPTION = "description";
	static final String CHANNEL = "channel";
	static final String LANGUAGE = "language";
	static final String COPYRIGHT = "copyright";
	static final String LINK = "link";
	static final String AUTHOR = "author";
	static final String ITEM = "item";
	static final String PUB_DATE = "pubDate";
	static final String GUID = "guid";
	final URL url;

	// Construtor
	public RSSFeedParser(String feedUrl) {
		try {
			// Setando valor de url na instância
			this.url = new URL(feedUrl);
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	// Faz a leitura do feed
	public Feed readFeed() {
		// Atributo que será retornado
		Feed feed = null;

		try {
			// Atributo para verificar header do feed
			boolean isFeedHeader = true;
			// Setando valores iniciais para as strings
			String imgDescription = "";
			String description = "";
			String title = "";
			String link = "";
			String language = "";
			String copyright = "";
			String author = "";
			String pubDate = "";
			String guid = "";

			// Primeiro, crie um novo XMLInputFactory, leitor de Streams
			XMLInputFactory inputFactory = XMLInputFactory.newFactory();

			// Dados recebidos da stream
			// Ultilizando BufferedStream por motivos de velocidades
			InputStream in = new BufferedInputStream(read());
			XMLEventReader eventReader = inputFactory.createXMLEventReader(in);

			// Fazendo a leitura do XML, enquanto houver eventos
			while (eventReader.hasNext()) {
				// Recebe apenas marcações do xml
				XMLEvent event = eventReader.nextEvent();

				if (event.isStartElement()) {
					// Atributo que receberá nome do elemento.
					String localPart = event.asStartElement().getName().getLocalPart();

					// Atribui valores
					switch (localPart) {
					case ITEM:
						// Atribui valores para header de rss
						if (isFeedHeader) {
							isFeedHeader = false;
							feed = new Feed(title, link, description, language, copyright);
						}

						// Atribuindo valores para header
						event = eventReader.nextEvent();
						break;
					case TITLE:
						// Elemento recebido
						String dataTitle = eventReader.getElementText().trim();

						// Atribuindo valor...
						title = dataTitle;
						break;
					case DESCRIPTION:
						// Elemento recebido
						String dataDesc = eventReader.getElementText();

						// Texto da descrição
						String descString = dataDesc.replaceAll("<.*?>", "").trim();

						// Verifica se há imagem de descrição
						if (dataDesc.trim().startsWith("<img")) {
							// Modelando URL
							int inicio = dataDesc.indexOf("src=");
							int fim = dataDesc.lastIndexOf(" />");

							// URL da imagem de descrição
							String urlImgString = dataDesc.substring(inicio + 5, fim - 7).trim();

							// Convertendo imagem...
							// ...
						}

						// Outrocaso, somente adiciona descrição
						description = descString;
						break;
					case LINK:
						link = getCharacterData(event, eventReader);
						break;
					case LANGUAGE:
						language = getCharacterData(event, eventReader);
						break;
					case AUTHOR:
						author = getCharacterData(event, eventReader);
						break;
					case COPYRIGHT:
						copyright = getCharacterData(event, eventReader);
						break;
					case PUB_DATE:
						// Atributo de horas da publicação
						String pubDateString = eventReader.getElementText().trim();

						// Transforma e um objeto DateFormat, em locale US
						DateFormat sdf = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z", Locale.US);

						// Atribui valor de local para data
						Locale locale = new Locale("pt", "BR");

						// Atribuindo local para formato de data com local
						// brasileiro
						DateFormat sdfBR = DateFormat.getDateTimeInstance(DateFormat.FULL, DateFormat.FULL, locale);

						// Objeto que receberá valores de data formatada
						Date dataObj = null;

						try {
							// Convertendo para Date...
							dataObj = sdf.parse(pubDateString);

							// sysout
							System.out.println("Formato Original : " + sdf.parse(pubDateString));
							System.out.println("Formato BR : " + sdfBR.format(dataObj) + "\n");
						} catch (ParseException e) {
							e.printStackTrace();
						}

						// Atribuindo valor...
						pubDate = new SimpleDateFormat("EEEEE, d MMMMM yyyy - HH:mm ").format(dataObj);
						break;
					case GUID:
						guid = getCharacterData(event, eventReader);
						break;
					}
				} else if (event.isEndElement()) {
					if (event.asEndElement().getName().getLocalPart() == (ITEM)) {
						// Item do feed
						FeedMessage message = new FeedMessage();

						// Atribuindo valores para item
						message.setAuthor(author);
						message.setImgDescription(imgDescription);
						message.setDescription(description);
						message.setLink(link);
						message.setTitle(title);
						message.setGuid(guid);
						message.setPubDate(pubDate);

						// Adicionando item no feed
						feed.getMessages().add(message);

						// Avança evento
						event = eventReader.nextEvent();
						continue;
					}
				}
			}
		} catch (XMLStreamException e) {
			throw new RuntimeException(e);
		}
		// Retornando feed
		return feed;
	}

	// Pegando valor de event
	private String getCharacterData(XMLEvent event, XMLEventReader eventReader) throws XMLStreamException {
		String result = "";
		event = eventReader.nextEvent();

		// Verifica tipos de dados
		if (event instanceof Characters) {
			// System.out.println(event.toString());
			result = event.asCharacters().getData();
		}
		// Retornando resultado
		return result;
	}

	// Faz a abertura da stream da url (recebe bytes)
	private InputStream read() {
		try {
			// Abrindo stream e retornando valor recebido...
			return url.openStream();
		} catch (IOException e) {
			System.out.println("Erro no recebimento da stream da URL !");
			throw new RuntimeException(e);
		}
	}

	// Redimenciona imagem
	private BufferedImage redimencionar(URL url, Dimension dimension) {
		// Imagem
		try {
			BufferedImage image = ImageIO.read(url);
			BufferedImage resized = new BufferedImage(dimension.width, dimension.height, BufferedImage.TYPE_INT_ARGB);
			Graphics2D g = resized.createGraphics();
			g.drawImage(image, 0, 0, dimension.width, dimension.height, null);
			g.dispose();
			return resized;
		} catch (IOException e) {
			e.printStackTrace();
		}
		// Retornando...
		return null;
	}
}
