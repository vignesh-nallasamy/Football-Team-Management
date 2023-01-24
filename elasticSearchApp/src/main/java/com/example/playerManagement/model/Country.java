package com.example.playerManagement.model;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "countries")
public class Country {

    @Id
    private String id ;

    @Field(type = FieldType.Text,name="name")
    private String name;

    @Field(type = FieldType.Text,name="trophies")
    private List<String> trophies;

    @Field(type = FieldType.Integer,name="points")
    private int points;


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

    public List<String> getTrophies() {
        return trophies;
    }

    public void setTrophies(List<String> trophies) {
        this.trophies = trophies;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
