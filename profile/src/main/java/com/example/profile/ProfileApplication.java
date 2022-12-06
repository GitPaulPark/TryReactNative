package com.example.profile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfileApplication {

    public static void main(String[] args) { // Main Thread 의 시작
        SpringApplication.run(ProfileApplication.class, args); // 스레드가 실행할 코드
    }

}
