import Image from "next/image";
import React from "react";

type Props = { categoryName: string; setState: (value: string) => void };

const CategoryCard = ({ categoryName, setState }: Props) => {
  return (
    <div className="py-4 w-1/5 ">
      <div
        onClick={() => setState(categoryName)}
        className="w-full h-36 border-b-4 border-blue-500 flex flex-col justify-center items-center shadow-inner shadow-slate-300 font-semibold cursor-pointer hover:shadow-blue-300 hover:shadow-lg"
      >
        <div className="flex rounded-full bg-blue-500 w-12 h-12 items-center justify-center">
          <Image src={"home.svg"} width={30} height={30} alt="cateHome" />
        </div>
        <div className="capitalize">{categoryName}</div>
      </div>
    </div>
  );
};

export default CategoryCard;
