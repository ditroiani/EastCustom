package br.com.eastcustom.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/*
 * @author Diego Troiani
 * 
 * Description : Class dedicated for requisitions views.
 * Last modified : 22/05/2018.
 * Obs : *.
 */
@Controller
public class View {
	// Administrator
	@RequestMapping(value="admin")
	public ModelAndView admin(ModelAndView mav){
		mav.setViewName("view/admin.html");
		return mav;
	}
	
	// Index
	@RequestMapping(value = "/")
	public ModelAndView index(ModelAndView mav) {
		mav.setViewName("view/index.html");
		return mav;
	}
}
