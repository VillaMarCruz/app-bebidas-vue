<script setup lang="ts">
  import { useBebidasStore } from '@/stores/bebidas';

  import Recipes from '@/components/Recipes.vue';

  const bebidasStore = useBebidasStore();


</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <p v-if="bebidasStore.noRecipe" class="my-10 text-center text-3xl">No hay resultados, utiliza el formulario para buscar recetas</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Recipes v-for="recipe in bebidasStore.recipes" :recipes="recipe" :key="recipe.idDrink" />
  </div>

</template>
