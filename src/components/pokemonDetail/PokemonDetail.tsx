import React from "react";

const PokemonDetail = ({ params }: Props) => {
  const { id } = params;
  return (
    <div>
      <h1>이름</h1>
      <p>도감번호</p>
      <p>이미지</p>
      <p>이름</p>
    </div>
  );
};

export default PokemonDetail;
