"use client";

import { Pokemon } from "@/types/pokemon.type";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [getPokemon, setGetPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center min-h-screen">
        {loading ? (
          <div className="flex flex-col items-center">
            <Image
              className="border rounded-full"
              src="/monsterball.gif"
              alt="몬스터 볼"
              width={400}
              height={400}
            />
            <p className="text-xl font-bold text-gray-700">
              데이터를 불러오는 중입니다..!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {getPokemon.map((pokemon: Pokemon) => (
              <div
                key={pokemon.id}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <Link href={`/pokemon/${pokemon.id}`} className="block">
                  <div className="flex justify-center mb-3">
                    <Image
                      src={pokemon.sprites.front_default}
                      alt={pokemon.korean_name}
                      width={100}
                      height={100}
                      className="transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-lg font-semibold text-center text-gray-800 mb-1">
                    {pokemon.korean_name}
                  </p>
                  <p className="text-sm text-center text-gray-600">
                    도감No. {pokemon.id}
                  </p>
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
