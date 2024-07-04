"use client";

import { Pokemon } from "@/types/pokemon.type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [getPokemon, setGetPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const basicData = async () => {
      const res = await fetch(`/api/pokemons`);
      const data = await res.json();
      setGetPokemon(data);
      setLoading(false);
    };
    basicData();
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {loading ? (
          <div>
            <p>데이터를 불러오는 중입니다..!</p>
          </div>
        ) : (
          <div>
            {getPokemon.map((pokemon) => (
              <div key={pokemon.id}>
                <Link href={`/pokemon/${pokemon.id}`}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={80}
                    height={80}
                  />
                  <p>{pokemon.korean_name}</p>
                  <p>도감번호: {pokemon.id}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
