package com.example.API.controller;

import com.example.API.model.Pokemon;
import com.example.API.repository.PokemonRepository;
import com.example.API.service.imp.PokemonServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PokemonController {

    @Autowired
    PokemonRepository pokemonRepository;

    @Autowired
    PokemonServiceImp pokemonServiceImp;

    @GetMapping(value = "/pokemon")
    public List<Pokemon> teste(){
        List<Pokemon> listPokemon = pokemonRepository.findAll();
        return listPokemon;
    }

    @GetMapping(value = "/pokemon/{id}")
    public Pokemon getPokemonId(@PathVariable("id") Integer id){
        Pokemon pokemon = pokemonServiceImp.findById(id);
        return pokemon;
    }

    @GetMapping(value = "/pokemon/nome/{nome}")
    public List<Pokemon> listPokemonNome(@PathVariable("nome") String nome){
        List<Pokemon> list = pokemonRepository.pesquisarPokemon("%"+nome+"%");
        return list;
    }
}
