import { defineStore } from 'pinia';
import {computed, onMounted, reactive, type Ref, ref} from 'vue';
import ApiService from '@/services/ApiService';

import type { Category, Drink, Recipes, Search } from '@/types';

import { useModalStore } from '@/stores/modal';

export const useBebidasStore = defineStore('bebidas', () => {
  const modal = useModalStore();
  const categories = ref<Category[]>([]);
  const search: Search = reactive({
    name: '',
    category: '',
  });
  const recipes = ref<Recipes[]>([]);
  const recipe:Ref<Drink> = ref({});

  onMounted(async () => {
    const {
      data: { drinks },
    } = await ApiService.getCategories();
    categories.value = drinks;
    console.log(drinks);
  });

  async function getRecetas() {
    const {
      data: { drinks },
    } = await ApiService.searchRecipes(search);
    recipes.value = drinks;
  }

  async function selectBebida(id?: string) {
    const {
      data: { drinks },
    } = await ApiService.searchReceta(id);

    recipe.value = drinks[0];
    modal.handleClickModal();
  }

  const noRecipe = computed(()=>recipes.value.length === 0);

  return {
    categories,
    search,
    recipes,
    recipe,
    getRecetas,
    selectBebida,
    noRecipe
  };
});
