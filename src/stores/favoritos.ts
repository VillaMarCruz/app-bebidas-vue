
import {defineStore} from "pinia";
import {computed, onMounted, type Ref, ref, watch} from "vue";

import type {Drink} from "@/types";

import {useBebidasStore} from './bebidas';
import {useModalStore} from "@/stores/modal";
import {useNotificacionStore} from "@/stores/notificacion";

export const useFavoritosStore = defineStore('favoritos', ()=>{

    const drinks = useBebidasStore();
    const modal = useModalStore();
    const notification = useNotificacionStore();

    const favoritos:Ref<Drink[]> = ref([]);

    onMounted(()=>{
        favoritos.value = JSON.parse(`${localStorage.getItem('favoritos')}`) ?? [];
    })

    watch(favoritos, ()=>{
        sincronizarLocalStorage();
    }, {
        deep: true,
    })

    function sincronizarLocalStorage(): void {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }

    function agregarFavorito():void {
        favoritos.value.push(drinks.recipe);

        notification.show = true;
        notification.text = 'Se agregó a favoritos';
    }

    function eliminarFavorito():void{
        favoritos.value = favoritos.value.filter((favorito:Drink) => favorito.idDrink !== drinks.recipe.idDrink);
        notification.show = true;
        notification.text = 'Se eliminó de favoritos';
        notification.error= true;
    }

    function handleClickFavorito(e: any): void{
        if(existsFavourite(drinks.recipe.idDrink)){
            eliminarFavorito();
        }else{
            agregarFavorito();
        }

        modal.handleClickModal();
    }

    function existsFavourite(id: String){
        const favoritosLocalStorage = JSON.parse(`${localStorage.getItem('favoritos')}`) ?? [];

        return favoritosLocalStorage.some((favorito: Drink):boolean => favorito.idDrink === id);
    }

    const noFavourite = computed(()=>favoritos.value.length === 0);

    return {
        favoritos,
        handleClickFavorito,
        existsFavourite,
        noFavourite
    }
})