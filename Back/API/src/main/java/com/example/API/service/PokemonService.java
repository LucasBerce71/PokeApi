package com.example.API.service;

import com.example.API.model.Pokemon;

import java.util.List;

public interface PokemonService {

    Pokemon findById(Integer id);
    List<Pokemon> findByName(String nome);
}
