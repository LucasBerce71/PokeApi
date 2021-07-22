package com.example.API.repository;

import com.example.API.model.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer> {

    @Query(value = "SELECT * FROM pokemom WHERE (nome LIKE :nome)",
            nativeQuery = true)
    List<Pokemon> pesquisarPokemon(@Param("nome") String nome);

}
