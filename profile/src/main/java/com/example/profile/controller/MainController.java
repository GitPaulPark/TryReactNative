package com.example.profile.controller;

import com.example.profile.dto.RecordForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.dto.WorkoutType;
import com.example.profile.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;


@Slf4j
@RestController
@RequestMapping("/api")
public class MainController {
    @Autowired
    private MainService service;


    @GetMapping("/hello")
    public String hello()
    {
        int a =  service.getCount();
        log.trace("tracing ... /hello ");
        return "안녕하세요 리액트와 스프링부트를 Proxy 설정을통해연결하고 있습니다 : " + a + "입니다.";
    }


    @GetMapping("/workout")
    public List<WorkoutForm>  getWorkoutList(){
        log.trace("controller - getWorkoutList started.... ");
        log.info("##### debug - > /workout -> controller");
        log.info("##### debug - > /workout -> controller....{}",service.getWorkoutList());
        return service.getWorkoutList();

    }

    @PostMapping("/insertLog")
    public void  addUserRecord(HttpServletRequest httpServletRequest , @RequestBody RecordForm recordForm){

        log.trace("record workout of the day....{}",recordForm);
        log.info("record workout of the day...{}",recordForm);
        log.info("record workout of the day...{}",recordForm);


        service.addUserRecord(recordForm);

    }



}