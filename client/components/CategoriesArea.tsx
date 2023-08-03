import React from "react";

type Props = { setState: (value: string) => void };

const CategoriesArea = ({ setState }: Props) => {
  return (
    <div className="w-1/5 h-full p-2 flex flex-col border shadow-md">
      <text
        className="text-sm cursor-pointer"
        onClick={() => {
          setState("Konut");
        }}
      >
        Konut
      </text>
      <text className="text-sm cursor-pointer">Konut</text>
    </div>
  );
};

export default CategoriesArea;
