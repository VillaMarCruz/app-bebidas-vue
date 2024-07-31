<script setup lang='ts'>
    import { useBebidasStore } from '@/stores/bebidas';
    import type { Recipes } from '@/types';

    type RecipesProps = {
        recipes: Recipes
    }

    defineProps<RecipesProps>()

    const bebidas = useBebidasStore();

</script>

<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img class="hover:scale-125 transition-transform hover:rotate-2" :src="recipes.strDrinkThumb"
                :alt="'Imagen de: ' + recipes.strDrink">
        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{ recipes.strDrink }}</h2>
            <button type="button" class="bg-orange-400 hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-lg"
                @click="bebidas.selectBebida(recipes?.idDrink)">Ver
                receta</button>
        </div>
    </div>
</template>