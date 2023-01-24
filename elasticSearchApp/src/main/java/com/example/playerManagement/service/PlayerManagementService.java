package com.example.playerManagement.service;

import com.example.playerManagement.model.Country;
import com.example.playerManagement.model.Player;
import com.example.playerManagement.repo.CountryRepository;
import com.example.playerManagement.repo.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class PlayerManagementService {



    @Autowired
    private CountryRepository countryRepo;

    @Autowired
    private PlayerRepository playerRepo;


    // Country methods

    public List<Country> getAllCountries(){
        List <Country> data = new ArrayList<Country>();
        this.countryRepo.findAll().forEach(country -> data.add(country));
        Collections.sort(data, new Comparator<Country>(){
            public int compare(Country o1, Country o2){
                return o2.getPoints() - o1.getPoints();
            }
        });
        return data;
    }

    public Country createCountry(Country country){
        System.out.println(country);
        return this.countryRepo.save(country);
    }

    public Country updateCountry(Country country){
        return this.countryRepo.save(country);
    }

    public void deleteCountry(String id){
        this.countryRepo.deleteById(id);
    }

    // playerMethods

    public List<Player> getPlayerByCountry(String countryName){
        List<Player> players = new ArrayList<Player>();
        this.playerRepo.findAllByCountry(countryName).forEach(player -> players.add(player));
        return players;
    }

    public Player createPlayer(Player player){
        return this.playerRepo.save(player);
    }

    public Player updatePlayer(Player player){
        return this.playerRepo.save(player);
    }

    public void deletePlayer(String playerId){
        this.playerRepo.deleteById(playerId);
    }

}
