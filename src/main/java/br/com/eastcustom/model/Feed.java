package br.com.eastcustom.model;

import java.util.ArrayList;
import java.util.List;

/*
 * Armazena uma mensagem RSS
 */
public class Feed {
	// Atributos
	private final String title;
	private final String link;
	private final String description;
	private final String language;
	private final String copyright;
	private final List<FeedMessage> messages = new ArrayList<FeedMessage>();

	// Construtor
	public Feed(String title, String link, String description, String language, String copyright) {
		this.title = title;
		this.link = link;
		this.description = description;
		this.language = language;
		this.copyright = copyright;
	}

	public List<FeedMessage> getMessages() {
		return messages;
	}

	public String getTitle() {
		return title;
	}

	public String getLink() {
		return link;
	}

	public String getDescription() {
		return description;
	}

	public String getLanguage() {
		return language;
	}

	public String getCopyright() {
		return copyright;
	}

	@Override
	public String toString() {
		return "Feed [title=" + title + ", link=" + link + ", description=" + description + ", language=" + language
				+ ", copyright=" + copyright + "]";
	}
}
