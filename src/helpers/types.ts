export interface Product {
  _id?: string | number;
  name?: string;
  avatar?: string;
  price?: string | number;
  category?: string;
  description?: string;
  developerEmail?: string;
}

export interface NewProduct {
  _id?: string | number;
  name?: string;
  avatar?: string;
  price?: string | number;
  category?: Category;
  description?: string;
  developerEmail?: string;
}

export interface Category {
  id?: string | number;
  name?: string;
}
