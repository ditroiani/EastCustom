package br.com.eastcustom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/*
 * @author Diego Troiani Rodrigues
 * 
 * CD : Classe dedicada para requisi��es de views.
 * LM : 16/09/2017
 * OBS : *.
 */
@Controller
public class View {
	// Requisi��es
	// P�gina inicial
	@RequestMapping(value = "index")
	public ModelAndView index(ModelAndView mav) {
		// Atribuindo view para retorno
		mav.setViewName("view/index.jsp");
		
		// Retornando...
		return mav;
	}
}
