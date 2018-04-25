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
 * LM : 02/03/2018
 * OBS : *.
 */
@RestController
public class ControllerRest {
	// Feed G1.com
	@RequestMapping(value = "noticiasG1", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Feed> noticias() {
		try {
			// RSS
			RSSFeedParser parser = new RSSFeedParser("http://pox.globo.com/rss/g1/carros/");

			// Converte e atribui valores
			Feed feed = parser.readFeed();

			// Retornando feed
			return new ResponseEntity<Feed>(feed, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Feed>(HttpStatus.INTERNAL_SERVER_ERROR);
		} finally {
			// ...
		}
	}
}
