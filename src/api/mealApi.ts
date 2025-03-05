import axios from 'axios';
import { API_URL } from '../constants';
import { CategoryType, MealType } from '../types';



export const fetchAllMeals = async (): Promise<MealType[]> => {
  const response = await axios.get(`${API_URL}/search.php?s=`);
  return response.data.meals;
};



export const fetchMealById = async (id: string): Promise<MealType> => {
  const response = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  
  if (!response.data.meals || response.data.meals.length === 0) {
    throw new Error("Meal not found");
  }

  return response.data.meals[0]; 
};


export const searchMeals = async (query: string): Promise<MealType[]> => {
  const response = await axios.get(`${API_URL}/search.php?s=${query}`);
  return response.data.meals;
};


export const getAllCategories = async (): Promise<CategoryType[]> => {
  const response = await axios.get(`${API_URL}/categories.php`);
  return response.data.categories;
};

