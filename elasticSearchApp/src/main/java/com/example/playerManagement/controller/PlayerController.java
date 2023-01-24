package com.example.playerManagement.controller;

import com.example.playerManagement.model.Country;
import com.example.playerManagement.model.Player;
import com.example.playerManagement.service.PlayerManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PlayerController {

    @Autowired
    private PlayerManagementService service;


    @RequestMapping(method = RequestMethod.GET,value = "/players/{countryName}")
    public List<Player> getAllPlayersByCountry(@PathVariable String countryName){
      return  this.service.getPlayerByCountry(countryName);
    }

    @RequestMapping(method = RequestMethod.POST,value = "/players")
    public Player createPlayer(@RequestBody Player player){
        return  this.service.createPlayer(player);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/players")
    public Player updatePlayer(@RequestBody Player player ){
        return  this.service.updatePlayer(player);
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/players/{id}")
    public void deletePlayer(@PathVariable String id){
        this.service.deletePlayer(id);
    }



}
