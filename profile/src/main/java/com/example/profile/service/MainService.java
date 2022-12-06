package com.example.profile.service;

import com.example.profile.dto.RecordForm;
import com.example.profile.dto.SignUpForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.dto.WorkoutType;
import com.example.profile.service.impl.ServiceImpl;

import java.util.List;

public interface MainService {

    ServiceImpl serviceImpl = new ServiceImpl();
    public int getCount();

    List<WorkoutForm> getWorkoutList();

    void addUserRecord(RecordForm recordForm);



}
