package com.example.playerManagement;

import com.example.playerManagement.model.Country;
import com.example.playerManagement.repo.CountryRepository;
import com.example.playerManagement.repo.PlayerRepository;
import com.example.playerManagement.service.PlayerManagementService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.notNull;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest
class ElasticSearchAppApplicationTests {

    @Mock
    private PlayerRepository playerrepo;

    @Mock
    private CountryRepository countryrepo;

    @InjectMocks
    private PlayerManagementService service;

    @Test
    public void getAllCountriesTest(){
        List<Country> data = new ArrayList<>();
        data.add(new Country("1","germany",new ArrayList<String>(),999));
        data.add(new Country("2","france",new ArrayList<String>(),1000));
        when(countryrepo.findAll()).thenReturn(data);
        Assertions.assertEquals(service.getAllCountries().get(0).getName(),"france");
        Assertions.assertEquals(service.getAllCountries().get(1).getName(),"germany");
    }

    @Test
    public void  updateCountry(){
        Country country = new Country("1","germany",new ArrayList<String>(),999);
        when(countryrepo.save((Country)notNull())).thenReturn(country);
        Assertions.assertEquals(service.updateCountry(new Country("1","germany",new ArrayList<String>(),999)).getName(),"germany");
    }


}
