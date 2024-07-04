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
    <div className="max-w-xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-xl overflow-hidden my-12">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-wide">
            {pokemonData.korean_name}
          </h1>
          <p className="text-lg font-semibold text-purple-600 bg-purple-100 px-4 py-2 rounded-full shadow">
            NO. {pokemonData.id.toString().padStart(4, "0")}
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <Image
            src={pokemonData.sprites.front_default}
            alt={pokemonData.korean_name}
            width={250}
            height={250}
            className="object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 mb-10">
          {[
            { label: "이름", value: pokemonData.korean_name },
            { label: "키", value: `${pokemonData.height / 10} m` },
            { label: "무게", value: `${pokemonData.weight / 10} kg` },
            { label: "특성", value: Abilities() },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
              <p className="text-lg font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">타입</h2>
          <div className="flex flex-wrap gap-3">{Types()}</div>
        </div>
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">기술</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {pokemonData.moves.map((move) => (
              <div
                key={move.move.name}
                className="bg-white rounded-lg p-3 text-center shadow-md hover:shadow-lg hover:bg-blue-50 transition duration-300"
              >
                <p className="text-sm font-medium text-gray-800">
                  {move.move.korean_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            뒤로가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
