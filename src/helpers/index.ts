import { AnimalResponse_GET, CategoryResponse_GET } from "@/types";
import { baseUrl } from "@/utils";

export const getAllCategory = async () => {
  const categoryReq = (await fetch(`${baseUrl}/category`)) || [];
  const allCategory = (await categoryReq.json()) as CategoryResponse_GET;
  return allCategory;
};

export const getAllAnimal = async () => {
  const categoryReq = (await fetch(`${baseUrl}/animal`)) || [];
  const allCategory = (await categoryReq.json()) as AnimalResponse_GET;
  return allCategory;
};
