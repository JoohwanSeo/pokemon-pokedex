"use client";
import PokemonList from "@/components/pokemonList";

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-3">Pokédex</h1>
      <PokemonList />
    </>
  );
};

export default Home;
