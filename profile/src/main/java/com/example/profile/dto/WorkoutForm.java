package com.example.profile.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class WorkoutForm {

    private int id;
    private String name;
    private String categoryName;
    private WorkoutType workoutName;
    private float weight;
    private int reps;


}
