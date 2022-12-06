package com.example.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class SignUpForm {
    private String name;
    private String email;
    private String password;
    private String phone;
    private float height;
    private float weight;
}
