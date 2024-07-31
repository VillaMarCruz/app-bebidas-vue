import {defineStore} from "pinia";
import {type Ref, ref, watch} from "vue";

export const useNotificacionStore = defineStore('notificacion', ()=>{

    const text:Ref<String> = ref('');
    const error:Ref<boolean> = ref(false);
    const show:Ref<boolean> = ref(false);

    watch(show, ()=>{
        if(show.value){
            setTimeout(()=>{
                text.value = '';
                error.value = false;
                show.value = false;
            }, 3000);
        }
    });
    return {
        text,
        error,
        show
    }
})