package com.example.playerManagement.config;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ElasticSearchClientConfig {
    @Bean
    public RestClient getRestClient(){
        RestClient restClient =
                RestClient.builder(
                new HttpHost("database",9200))
                .build();

        return restClient;
    }

    @Bean
    public ElasticsearchTransport getElasticSearchTransport(){
        return new RestClientTransport(
                getRestClient(), new JacksonJsonpMapper()
        );
    }

    @Bean
    public ElasticsearchClient getElasticSearchClient(){
        return new ElasticsearchClient(
                getElasticSearchTransport()
        );
    }



}
