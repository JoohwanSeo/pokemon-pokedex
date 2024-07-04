import PokemonDetail from "@/components/pokemonDetail";
import { notFound } from "next/navigation";
import React from "react";

const FetchData = async (id: string) => {
  const apiUrl = process.env.PUBLIC_URL;
  const res = await fetch(`${apiUrl}/api/pokemons/${id}`);
  if (!res.ok) {
    return null;
  }
};

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await FetchData(params.id);
  if (!data) {
    notFound();
  }
  return (
    <>
      <PokemonDetail data={data} />
    </>
  );
};
export default DetailPage;
