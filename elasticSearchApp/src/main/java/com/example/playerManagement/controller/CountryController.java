package com.example.playerManagement.controller;

import com.example.playerManagement.model.Country;
import com.example.playerManagement.service.PlayerManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class CountryController {

    @Autowired
    private PlayerManagementService service;

    @RequestMapping(method = RequestMethod.GET,value = "/")
    public String  sayHello(){
        return "Hello Frands";
    }

    @RequestMapping(method = RequestMethod.GET,value = "/countries")
    public List<Country>  getAllCountries(){
        return this.service.getAllCountries();
    }

    @RequestMapping(method = RequestMethod.POST,value = "/countries")
    public Country  createCountry(@RequestBody Country country){
        return this.service.createCountry(country);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/countries")
    public Country  updateCountry(@RequestBody Country country){
        return this.service.updateCountry(country);
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/countries/{id}")
    public void  deleteCountry(@PathVariable String id){
          this.service.deleteCountry(id);
    }

}
