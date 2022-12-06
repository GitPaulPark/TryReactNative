package com.example.profile.controller;


import com.example.profile.dto.RecordForm;
import com.example.profile.dto.SearchForm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.net.URI;
import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;


/*
https://openapi.naver.com/v1/search/local.json

 */

@Slf4j
@RestController
@RequestMapping(value = "/api/server", produces="text/plain;charset=UTF-8")
public class ForeignAPIController {

//
//            @GetMapping("/naver")
//            public String naver () {
//                    String query = "무신사";
//                    ByteBuffer buffer = StandardCharsets.UTF_8.encode(query);
//                    String encode = StandardCharsets.UTF_8.decode(buffer).toString();
//
//                    URI uri = UriComponentsBuilder
//                            .fromUriString("https://openapi.naver.com")
//                            .path("v1/search/local.json")
//                            .queryParam("query",query)
//                            .queryParam("display",10)
//                            .queryParam("start",1)
//                            .queryParam("sort", "random")
//                            .encode()
//                            .build()
//                            .toUri();
//                    RestTemplate restTemplate = new RestTemplate();
//                    RequestEntity<Void> req = RequestEntity
//                            .get(uri)
//                            .header("X-Naver-Client-Id", "afZK_mdf4KJF0teaUSoD")
//                            .header("X-Naver-Client-Secret", "NqjuY16RJU" )
//                            .build();
//
//                    ResponseEntity <String> result = restTemplate.exchange(req, String.class);
//                    log.debug("결과값 : {}",result.getBody());
//                    return result.getBody();
//    }


    @PostMapping("/naverSearch")
//    public String naverSearch (HttpServletRequest httpServletRequest , @RequestBody SearchForm searchWord) {
    public String naverSearch (HttpServletRequest httpServletRequest , @RequestBody String searchWord) {
//                log.debug(searchWord.getSearchWord());
                log.info(searchWord);
//                String query = String.valueOf(searchWord.getSearchWord());

                String query = String.valueOf(searchWord);
                ByteBuffer buffer = StandardCharsets.UTF_8.encode(query);
                String encode = StandardCharsets.UTF_8.decode(buffer).toString();

                URI uri = UriComponentsBuilder
                        .fromUriString("https://openapi.naver.com")
                        .path("v1/search/local.json")
                        .queryParam("query",query)
                        .queryParam("display",10)
                        .queryParam("start",1)
                        .queryParam("sort", "random")
                        .encode()
                        .build()
                        .toUri();
                RestTemplate restTemplate = new RestTemplate();
                RequestEntity<Void> req = RequestEntity
                        .get(uri)
                        .header("X-Naver-Client-Id", "afZK_mdf4KJF0teaUSoD")
                        .header("X-Naver-Client-Secret", "NqjuY16RJU" )
                        .build();

                ResponseEntity <String> result = restTemplate.exchange(req, String.class);
                log.debug("결과값 : {}",result.getBody());
                return result.getBody();
    }
//    @GetMapping("/naver/image")
//    public String naverImage () {
//        String query = "침착맨";
//        ByteBuffer buffer = StandardCharsets.UTF_8.encode(query);
//        String encode = StandardCharsets.UTF_8.decode(buffer).toString();
//
//        URI uri = UriComponentsBuilder
//                .fromUriString("https://openapi.naver.com")
//                .path("v1/search/image")
//                .queryParam("query",query)
//                .queryParam("display",10)
//                .queryParam("start",1)
//                .queryParam("sort", "random")
//                .queryParam("filter", "small")
//                .encode()
//                .build()
//                .toUri();
//        RestTemplate restTemplate = new RestTemplate();
//        RequestEntity<Void> req = RequestEntity
//                .get(uri)
//                .header("X-Naver-Client-Id", "afZK_mdf4KJF0teaUSoD")
//                .header("X-Naver-Client-Secret", "NqjuY16RJU" )
//                .build();
//
//        ResponseEntity <String> result = restTemplate.exchange(req, String.class);
//        log.trace("결과값 : {}",result.getBody());
//        return result.getBody();
//
//
//    }
}
