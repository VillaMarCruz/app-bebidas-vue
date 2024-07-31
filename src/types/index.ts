export type Category = {
  strCategory: string;
};

export type Recipes = {
  idDrink?: string;
  strDrink?: string;
  strDrinkThumb?: string;
};

export type Search = {
  name: string;
  category: string;
};

export type Drink = {
  [key: string]: string;
};
