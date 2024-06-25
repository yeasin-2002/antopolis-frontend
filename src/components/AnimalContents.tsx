"use client";

import {
  AddAnimal,
  AddCategory,
  AnimalItems,
  CategoryList,
} from "@/components";
import { AnimalResponse_GET, CategoryResponse_GET } from "@/types";
import { useEffect, useState } from "react";
import { ShowAnimal } from "./ShowAnimal";

interface Props extends React.ComponentProps<"div"> {
  allAnimal: AnimalResponse_GET;
  allCategory: CategoryResponse_GET;
}

export const AnimalContents = ({ allAnimal, allCategory, ...props }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredAnimal, setFilteredAnimal] = useState(allAnimal.data);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const filtered = allAnimal.data.filter((items) =>
        selectedCategories.includes(items.category)
      );
      setFilteredAnimal(filtered);
    } else {
      setFilteredAnimal(allAnimal.data);
    }
  }, [allAnimal.data, selectedCategories]);

  return (
    <div {...props}>
      <div className="flex items-center justify-between">
        <CategoryList
          categories={allCategory.data}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="flex items-center justify-center gap-x-2">
          <AddAnimal allCategory={allCategory.data} />
          <AddCategory />
        </div>
      </div>

      <ShowAnimal data={filteredAnimal} />
    </div>
  );
};
