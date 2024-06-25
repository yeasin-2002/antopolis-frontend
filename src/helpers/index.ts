import { Animal, Category, CategoryResponse_GET } from "@/types";
import { baseUrl } from "@/utils";

export const getAllCategory = async () => {
  const categoryReq = (await fetch(`${baseUrl}/category`)) || [];
  const allCategory = (await categoryReq.json()) as CategoryResponse_GET;
  return allCategory;
};

export const getAllAnimal = async () => {
  const categoryReq = (await fetch(`${baseUrl}/animal`)) || [];
  const allCategory = (await categoryReq.json()) as Animal[];
  return allCategory;
};
