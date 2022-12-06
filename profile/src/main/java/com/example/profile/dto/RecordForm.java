package com.example.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class RecordForm {
//
//    private int id;
//    private int name;
//    private int categoryName;
//    private int workoutName;
//    private float weight;
//    private int reps;

    private int id;
    private int userId;
    private String name;
    private String phone;
    private float height;
    private float bodyWeight;
    private int categoryId;
    private int workoutId;
    private int weight;
    private int reps;
}



