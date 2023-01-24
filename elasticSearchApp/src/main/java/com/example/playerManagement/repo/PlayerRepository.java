package com.example.playerManagement.repo;
import com.example.playerManagement.model.Player;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends ElasticsearchRepository<Player,String> {

    public Iterable<Player> findAllByCountry(String country);
}
