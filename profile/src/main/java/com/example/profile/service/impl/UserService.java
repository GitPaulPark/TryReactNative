package com.example.profile.service.impl;


import com.example.profile.dto.RecordForm;
import com.example.profile.dto.SignUpForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.service.mapper.MainMapper;
import com.example.profile.service.SignUpService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class UserService implements SignUpService {
    @Autowired
    private MainMapper mapper;

    @Override
    public void signUp(SignUpForm signUpForm){

        log.trace("[service]: record workout of the day ....{}",signUpForm);
        log.info("[service]: record workout of the day ....{}",signUpForm);


        mapper.signUp(signUpForm);



        // 운동 이름 불러오는 기능 호출 하기
        // reocrd_today에 넣는 기능 구현하기
        // 유저
    }

}
