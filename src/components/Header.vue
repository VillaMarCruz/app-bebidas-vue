<script setup lang="ts">
  import { computed } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { useBebidasStore } from '@/stores/bebidas';
  import {useNotificacionStore} from "@/stores/notificacion";

  const route = useRoute();
  const store = useBebidasStore();
  const notification = useNotificacionStore();

  const homePage = computed(() => route.name === 'home')

  const handleSubmit = () => {
    if(Object.values(store.search).includes('')){
      notification.$patch({
        text: 'Todos los campos son obligatorios',
        show: true,
        error: true
      });
      return
    }
    store.getRecetas();
  }

</script>

<template>
  <header class="bg-slate-800" :class="{ header: homePage }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <router-link :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="Logotipo" />
          </router-link>
        </div>
        <nav class="flex gap-4 text-white">
          <router-link :to="{ name: 'home' }" class="uppercase font-bold"
            active-class="text-orange-500">Inicio</router-link>
          <router-link :to="{ name: 'favorites' }" class="uppercase font-bold"
            active-class="text-orange-500">Favoritos</router-link>
        </nav>
      </div>
      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" v-if="homePage"
        @submit.prevent="handleSubmit">
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="ingrediente">Nombre o
            Ingredientes</label>
          <input id="ingrediente" type="text" class="p-3 w-full rounded-lg focus:outline-none"
            placeholder="Nombre o ingrediente: ej. Vodka, Tequila, etc" v-model="store.search.name" />
        </div>
        <div class="space-y-4">
          <label class="block text-white uppercase font-extrabold text-lg" for="categoria">Categoria</label>
          <select id="categoria" class="p-3 w-full rounded-lg focus:outline-none" v-model="store.search.category">
            <option value="">--- Seleccione ---</option>
            <option v-for="category in store.categories" :key="category.strCategory" :value="category.strCategory">{{
              category.strCategory }}
            </option>
          </select>
        </div>

        <input
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
          type="submit" value="Buscar recetas" />
      </form>
    </div>
  </header>
</template>

<style scoped>
  .header {
    background-image: url('/img/bg.jpg');
    background-size: cover;
    background-position: center;
  }
</style>