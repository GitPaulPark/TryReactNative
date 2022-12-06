package com.example.profile.service;

import com.example.profile.dto.RecordForm;
import com.example.profile.dto.SignUpForm;
import com.example.profile.dto.WorkoutForm;
import com.example.profile.dto.WorkoutType;
import com.example.profile.service.impl.ServiceImpl;

import java.util.List;
public interface SignUpService {
    void signUp(SignUpForm signUpForm);

}
