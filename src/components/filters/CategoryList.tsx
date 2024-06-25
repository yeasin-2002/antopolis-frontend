"use client";

import { Category } from "@/types";
import { cn } from "@/utils";
import { ListCollapse } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui";

interface Props extends React.ComponentProps<"div"> {
  categories: Category[];
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}

export const CategoryList = ({
  categories = [],
  selectedCategories,
  setSelectedCategories,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = typeof window === "undefined" ? 0 : window?.innerWidth;
  const [allCategory, setAllCategory] = useState(categories);

  useEffect(() => {
    if (windowWidth > 768) {
      setAllCategory(categories.slice(4));
    } else {
      setAllCategory(categories);
    }
  }, [windowWidth, categories]);

  const handleSelectedCategory = (name: string) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(
        selectedCategories.filter((items) => items !== name)
      );
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  return (
    <div
      {...props}
      className="md:flex items-center  gap-x-4 w-full md:px-2 lg:px-4"
    >
      <div className="space-x-4 hidden md:block">
        {categories.slice(0, 4).map((items) => (
          <button
            key={items.name}
            onClick={() => handleSelectedCategory(items.name)}
            className={cn(
              "border border-red-600 px-8 py-2 rounded-full text-red-600",
              {
                "border-green-600 text-green-600": selectedCategories.includes(
                  items.name
                ),
              }
            )}
          >
            {items.name}
          </button>
        ))}
      </div>

      {categories.length > 4 && (
        <div className="relative inset-0">
          <Button onClick={() => setIsOpen(!isOpen)}>
            <ListCollapse />
          </Button>

          {isOpen && (
            <div className=" p-2 absolute top-10 -left-2 space-y-1">
              {allCategory.map((items) => (
                <button
                  key={items.name}
                  onClick={() => handleSelectedCategory(items.name)}
                  className={cn(
                    "border border-red-600 bg-black px-8 py-2 rounded-full text-red-600 text-nowrap  animate-fade-in",
                    {
                      "border-green-600 text-green-600":
                        selectedCategories.includes(items.name),
                    }
                  )}
                >
                  {items.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
