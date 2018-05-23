package br.com.eastcustom.tool;

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

import javax.xml.stream.XMLEventReader;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.events.Characters;
import javax.xml.stream.events.XMLEvent;

import org.apache.tomcat.util.codec.binary.Base64;

import com.google.common.io.ByteStreams;

import br.com.eastcustom.model.Feed;
import br.com.eastcustom.model.FeedMessage;

/*
 * @author Diego Troiani
 * 
 * Description: Class dedicated for conversion of RSS response.
 * Last modified: 22/05/2018.
 * Obs: *;
 */
public class RSSFeedParser {
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
	int limitFeedMessage = 10;
	final URL url;

	public RSSFeedParser(String feedUrl) {
		try {
			this.url = new URL(feedUrl);
		} catch (MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	// Read Feed
	public Feed readFeed() {
		Feed feed = null;

		try {
			boolean isFeedHeader = true;
			String imgDescription = "";
			String description = "";
			String title = "";
			String link = "";
			String language = "";
			String copyright = "";
			String author = "";
			String pubDate = "";
			String guid = "";

			XMLInputFactory inputFactory = XMLInputFactory.newFactory();
			InputStream in = new BufferedInputStream(read());
			XMLEventReader eventReader = inputFactory.createXMLEventReader(in);

			while (eventReader.hasNext()) {
				XMLEvent event = eventReader.nextEvent();

				if (event.isStartElement()) {
					String localPart = event.asStartElement().getName().getLocalPart();

					switch (localPart) {
					case ITEM:
						if (isFeedHeader) {
							isFeedHeader = false;
							feed = new Feed(title, link, description, language, copyright);
						}

						event = eventReader.nextEvent();
						break;
					case TITLE:
						String dataTitle = eventReader.getElementText().trim();
						title = dataTitle;
						break;
					case DESCRIPTION:
						String dataDesc = eventReader.getElementText();
						String descString = dataDesc.replaceAll("<.*?>", "").trim();
						
						if (dataDesc.trim().startsWith("<img")) {
							int inicio = dataDesc.indexOf("src=");
							int fim = dataDesc.lastIndexOf(" />");
							String urlImgString = dataDesc.substring(inicio + 5, fim - 7).trim();

							try {
								InputStream inImg = new BufferedInputStream(new URL(urlImgString).openStream());
								imgDescription = Base64.encodeBase64String(ByteStreams.toByteArray(inImg));
								inImg.close();
							} catch (MalformedURLException e) {
								e.printStackTrace();
							} catch (IOException e) {
								e.printStackTrace();
							}
						} else {
							imgDescription = null;
						}
						description = descString;
						break;
					case LINK:
						String dataLink = getCharacterData(event, eventReader);
						String linkURL = dataLink.trim();
						link = linkURL;
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
						String pubDateString = eventReader.getElementText().trim();
						DateFormat sdf = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z", Locale.US);
						Date dataObj = null;

						try {
							dataObj = sdf.parse(pubDateString);
						} catch (ParseException e) {
							e.printStackTrace();
						}

						pubDate = new SimpleDateFormat("EEEEE, d MMMMM yyyy - HH:mm ").format(dataObj);
						break;
					case GUID:
						guid = getCharacterData(event, eventReader);
						break;
					}
				} else if (event.isEndElement()) {
					if (event.asEndElement().getName().getLocalPart() == (ITEM)) {
						FeedMessage message = new FeedMessage();
						message.setAuthor(author);
						message.setImgDescription(imgDescription);
						message.setDescription(description);
						message.setLink(link);
						message.setTitle(title);
						message.setGuid(guid);
						message.setPubDate(pubDate);
						
						// Set limit of feeds
						if(feed.getMessages().size() < limitFeedMessage) {
							feed.getMessages().add(message);
							event = eventReader.nextEvent();
						} else {
							break;
						}
					}
				}
			}
		} catch (XMLStreamException e) {
			throw new RuntimeException(e);
		}
		return feed;
	}

	// Get value of event
	private String getCharacterData(XMLEvent event, XMLEventReader eventReader) throws XMLStreamException {
		String result = "";
		event = eventReader.nextEvent();

		if (event instanceof Characters) {
			result = event.asCharacters().getData();
		}
		return result;
	}

	// Read URL and convert to InputStream(bytes)
	private InputStream read() {
		try {
			return url.openStream();
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
