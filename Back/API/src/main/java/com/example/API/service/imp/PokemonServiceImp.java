package com.example.API.service.imp;

import com.example.API.model.Pokemon;
import com.example.API.repository.PokemonRepository;
import com.example.API.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PokemonServiceImp implements PokemonService {

    @Autowired
    PokemonRepository pokemonRepository;

    @Override
    public Pokemon findById(Integer id) {
        return pokemonRepository.findById(id).get();
    }

    @Override
    public List<Pokemon> findByName(String nome) {
        List<Pokemon> list = pokemonRepository.findAll();
        for (int i = 0; i < list.size(); i++) {
            if(list.get(i).getNome() == nome){

            }
        }
        return null;
    }
}
