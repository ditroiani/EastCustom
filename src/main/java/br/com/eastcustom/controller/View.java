package br.com.eastcustom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/*
 * @author Diego Troiani Rodrigues
 * 
 * CD : Classe dedicada para requisições de views.
 * LM : 09/05/2018
 * OBS : *.
 */
@Controller
public class View {
	// Administrador
	@RequestMapping(value="admin")
	public ModelAndView admin(ModelAndView mav){
		// Atribui view 
		mav.setViewName("view/admin.html");
		return mav;
	}
	
	// Página inicial
	@RequestMapping(value = "index")
	public ModelAndView index(ModelAndView mav) {
		// Atribuindo view
		mav.setViewName("view/index.html");
		return mav;
	}
}
