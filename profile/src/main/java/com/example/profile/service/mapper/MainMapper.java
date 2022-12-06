package com.example.profile.service.mapper;

import com.example.profile.dto.RecordForm;
import com.example.profile.dto.SignUpForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.dto.WorkoutType;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {

        public int getCount();

        List<WorkoutForm> getWorkoutList();

    void addUserRecord(RecordForm recordForm);


    void signUp(SignUpForm signUpForm);
}
