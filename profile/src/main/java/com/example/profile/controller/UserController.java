package com.example.profile.controller;

import com.example.profile.dto.LoginForm;
import com.example.profile.dto.SignUpForm;
import com.example.profile.service.LoginService;
import com.example.profile.service.SignUpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Slf4j
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private SignUpService service;
    private LoginService logIn;

    @PostMapping("/signup")
    public void signUp(HttpServletRequest httpServletRequest, @RequestBody SignUpForm signUpForm ){

        log.trace("helllllo");
        log.trace("signUp of the day....{}",signUpForm);
        log.info("signUp of the day...{}",signUpForm);
        service.signUp(signUpForm);
    }

    @PostMapping("/login")
    public void logIn(HttpServletRequest httpServletRequest, @RequestBody LoginForm loginForm){
        log.info("logIn of the day .....{}",loginForm );
        logIn.doLogIn();
    }
}
