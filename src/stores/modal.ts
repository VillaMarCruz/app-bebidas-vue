import { defineStore } from 'pinia';
import {computed, ref} from 'vue';

import {useFavoritosStore} from "@/stores/favoritos";
import {useBebidasStore} from "@/stores/bebidas";

export const useModalStore = defineStore('modal', () => {
  const favoritos = useFavoritosStore();
  const drinks = useBebidasStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textButton = computed(()=>{
    return favoritos.existsFavourite(drinks.recipe.idDrink) ? "Eliminar de favoritos" : "Agregar a favoritos"
  })

  return {
    modal,
    handleClickModal,
    textButton
  };
});
