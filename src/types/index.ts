interface RootResponse {
  success: boolean;
  message: string;
}

export interface Category {
  _id: string;
  name: string;
}
export interface Animal {
  _id: string;
  name: string;
}

//  responses
export interface CategoryResponse_GET extends RootResponse {
  data: Category[];
}
export interface AnimalResponse_GET extends RootResponse {
  data: Animal[];
}
