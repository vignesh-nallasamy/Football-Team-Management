package com.example.playerManagement.repo;
import com.example.playerManagement.model.Country;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository extends ElasticsearchRepository<Country,String> {
}