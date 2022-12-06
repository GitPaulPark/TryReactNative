package com.example.profile.service.impl;


import com.example.profile.dto.RecordForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.service.mapper.MainMapper;
import com.example.profile.service.MainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class ServiceImpl implements MainService {
    @Autowired
    private MainMapper mapper;

    List <WorkoutForm> workList = new ArrayList<>();
    WorkoutForm workInfo = new WorkoutForm();

    @Override

    public int getCount(){
        return mapper.getCount();
    }

    @Override
    public List<WorkoutForm> getWorkoutList(){
        workList = mapper.getWorkoutList();



        log.info(String.valueOf(workList.get(0)));
        log.trace("service - getWorkoutList start...");
        log.info("##### debug - > /workout -> controller....{}",workList);


        return mapper.getWorkoutList();
    }

    @Override
    public void addUserRecord(RecordForm recordForm){

        log.trace("[service]: record workout of the day ....{}",recordForm);
        log.info("[service]: record workout of the day ....{}",recordForm);


        mapper.addUserRecord(recordForm);



        // 운동 이름 불러오는 기능 호출 하기
        // reocrd_today에 넣는 기능 구현하기
        // 유저
    }

}
