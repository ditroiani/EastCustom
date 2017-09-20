package br.com.eastcustom.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.eastcustom.model.Feed;
import br.com.eastcustom.tool.RSSFeedParser;

/*
 * @author Diego Troiani Rodrigues
 * 
 * CD : Classe dedicada para requisições rest, de forma "geral".
 * LM : 16/09/2017
 * OBS : *.
 */
@RestController
public class ControllerRest {
	// Atributos

	// Feed G1.com
	@RequestMapping(value = "noticiasG1", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Feed> noticias() {
		try {
			// RSS
			RSSFeedParser parser = new RSSFeedParser("http://pox.globo.com/rss/g1/carros/");
			Feed feed = parser.readFeed();

			// Retornando feed
			return ResponseEntity.ok(feed);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Feed>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
