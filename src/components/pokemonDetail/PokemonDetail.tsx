import { Pokemon } from "@/types/pokemon.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetail = ({ pokemonData }: Pokemon) => {
  if (!pokemonData) {
    return (
      <div>
        {/* <Image src={"/public/monsterball.gif"} alt="몬스터볼 던지기" /> */}
        <p>몬스터볼 던지는 중...</p>
      </div>
    );
  }

  const Types = () => {
    return pokemonData.types.map((type) => (
      <span key={type.type.name}>{type.type.korean_name}</span>
    ));
  };

  const Abilities = () => {
    return pokemonData.abilities.map((ability) => (
      <span key={ability.ability.name}>{ability.ability.korean_name}</span>
    ));
  };

  return (
    <div>
      <div>
        <h1>{pokemonData.korean_name}</h1>
        <p>NO. {pokemonData.id.toString().padStart(4, "0")}</p>
      </div>
      <div>
        <Image
          src={pokemonData.sprites.front_default}
          alt={pokemonData.korean_name}
          width={100}
          height={100}
        />
      </div>
      <div>
        <p>이름: {pokemonData.korean_name}</p>
        <p>키: {pokemonData.height / 10} m </p>
        <p>무게: {pokemonData.weight / 10} kg </p>
      </div>
      <div>
        <p>특성: {Abilities()}</p>
      </div>
      <div>
        <p>타입: {Types()}</p>
      </div>
      <div>
        <p>기술: {} </p>
        <div>
          {pokemonData.moves.map((move) => (
            <div key={move.move.name}>{move.move.korean_name}</div>
          ))}
        </div>
      </div>
      <div>
        <Link href="/">뒤로가기</Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
