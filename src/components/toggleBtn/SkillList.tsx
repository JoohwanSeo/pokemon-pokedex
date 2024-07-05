"use client";
import React, { useState } from "react";

interface Move {
  move: {
    name: string;
    korean_name: string;
  };
}

interface Props {
  moves: Move[];
}

const SkillList: React.FC<Props> = ({ moves }) => {
  const [moveSkillList, setMoveSkillList] = useState<boolean>(false);

  const SkillToggleList = () => {
    setMoveSkillList(!moveSkillList);
  };

  return (
    <div className="mb-10">
      <button
        onClick={SkillToggleList}
        className="w-full bg-sky-400 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-sky-500 transition duration-300 shadow-md flex justify-center  items-center"
      >
        <h2 className="text-2xl font-bold text-white-800 mb-4 ">
          기술 {moveSkillList ? "▲" : "▼"}
        </h2>
      </button>
      {moveSkillList && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
          {moves.map((move) => (
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
      )}
    </div>
  );
};

export default SkillList;
