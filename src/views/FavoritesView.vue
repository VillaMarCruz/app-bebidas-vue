<script setup lang='ts'>
  import {useFavoritosStore} from "@/stores/favoritos";
  import Recipes from "@/components/Recipes.vue";

  const favoritos = useFavoritosStore();
</script>

<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>

  <p v-if="favoritos.noFavourite" class="my-10 text-center text-3xl">No hay favoritos</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <Recipes v-for="recipe in favoritos.favoritos" :recipes="recipe" :key="recipe.idDrink" />
  </div>
</template>