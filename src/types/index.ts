export type MealType = {
  dateModified: string | null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strTags: string | null;
  strYoutube: string;
};


export type CategoryType = {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string,
  strCategoryDescription: string
}

export type CategoryCardProps = {
  category: CategoryType;
  isActive: boolean;
  setActiveCategory: (id: string) => void;
};

export type ClearCategoryProps = {
  clearActiveCategory: () => void;
};

export type MealCardProps = {
  meal: MealType;
};

export type PaginationProps = {
  onNextPageClick: () => void;
  onPrevPageClick: () => void;
  onPageChange: (page: number) => void;
  disable: {
    left: boolean;
    right: boolean;
  };
  nav?: {
    current: number;
    total: number;
  };
};

export type Nav = {
  current: number;
  total: number;
}

export type MealButtonProps = {
  text: string;
  value: string | null;
};

export type MealInfoProps = {
  label: string;
  value: string | null;
};

export type SearchCardProps = {
  meal: MealType
};

export type IngredientsListProps = {
  meal: MealType;
}
