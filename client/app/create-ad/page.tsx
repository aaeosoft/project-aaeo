"use client";
import CategoriesArea from "@/components/CategoriesArea";
import CategoryCard from "@/components/CategoryCard";
import React, { useEffect, useState } from "react";

const CreateAd = () => {
  const [categoriesName, setCategoriesName] = useState([""]);

  const updateCategoryName = (index: number, newName: string) => {
    setCategoriesName((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index] = newName;
      return updatedCategories;
    });
  };

  useEffect(() => {
    console.log(categoriesName);
  }, [categoriesName]);

  return (
    <div className="flex justify-center items-center py-36 bg-slate-50 min-w-min">
      <div className="w-[1115px] h-full bg-white shadow-md p-4 rounded-sm flex flex-col">
        <text className="font-semibold">Kategori Seç</text>
        {categoriesName[0] === "" ? (
          <div className="flex gap-2">
            <CategoryCard
              categoryName="Emlak"
              setState={(value) => updateCategoryName(0, value)}
            />
            <CategoryCard
              categoryName="Vasıta"
              setState={(value) => updateCategoryName(0, value)}
            />
            <CategoryCard
              categoryName="Vasıta"
              setState={(value) => updateCategoryName(0, value)}
            />
            <CategoryCard
              categoryName="Vasıta"
              setState={(value) => updateCategoryName(0, value)}
            />
            <CategoryCard
              categoryName="Vasıta"
              setState={(value) => updateCategoryName(0, value)}
            />
          </div>
        ) : (
          <div className="h-[350px] flex flex-col gap-2">
            <div>
              {categoriesName.map((val, i) => (
                <text
                  onClick={() => {
                    i === 0 && setCategoriesName([""]);
                  }}
                  className={`${
                    i === 0 && "text-blue-500 cursor-pointer hover:underline"
                  } text-sm`}
                  key={i}
                >
                  {i !== 0 && " > "}
                  {val}
                </text>
              ))}
            </div>

            <CategoriesArea
              setState={(value) => updateCategoryName(1, value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAd;
