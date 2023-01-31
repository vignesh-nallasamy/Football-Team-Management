package com.example.playerManagement.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "players")
public class Player {

    @Id
    private String id;
    @Field(type = FieldType.Text,name = "name")
    @NotBlank(message = "Player name shouldn't be empty")
    private String name;
    @Field(type = FieldType.Text,name = "country")
    @NotBlank(message = "Country name shouldn't be empty")
    private String country;
    @Field(type = FieldType.Text,name = "position")
    @NotNull(message = "Invalid field position")
    private String position;
    @Field(type = FieldType.Integer,name = "goals")
    private int goals;
    @Field(type = FieldType.Integer,name = "assists")
    private int assists;
    @Field(type = FieldType.Integer,name = "saves")
    private int saves;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public int getGoals() {
        return goals;
    }

    public void setGoals(int goals) {
        this.goals = goals;
    }

    public int getAssists() {
        return assists;
    }

    public void setAssists(int assists) {
        this.assists = assists;
    }

    public int getSaves() {
        return saves;
    }

    public void setSaves(int saves) {
        this.saves = saves;
    }
}
