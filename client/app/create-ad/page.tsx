"use client";
import CategoriesArea from "@/components/CategoriesArea";
import CategoryCard from "@/components/CategoryCard";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateAd = () => {
  const [categoriesName, setCategoriesName] = useState([""]);

  const router = useRouter();
  const pathname = usePathname();

  const updateCategoryName = (index: number, newName: string) => {
    setCategoriesName((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index] = newName;
      return updatedCategories;
    });
  };

  useEffect(() => {
    if (categoriesName.length === 2) {
      router.push(pathname + "/ad-details");
    }
  }, [categoriesName]);

  return (
    <div className="enter min-w-min">
      <div className="page-area">
        <div className="font-semibold">Kategori Seç</div>
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
                <div
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
                </div>
              ))}
            </div>
            <div className="flex flex-1 gap-2">
              <CategoriesArea
                setState={(value) => updateCategoryName(1, value)}
              />
              {categoriesName.length > 1 && (
                <CategoriesArea
                  setState={(value) => updateCategoryName(2, value)}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateAd;
