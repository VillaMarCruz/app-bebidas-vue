<script setup lang="ts">
  import Header from '@/components/Header.vue';
  import Modal from './components/Modal.vue';
  import Notificacion from "@/components/Notificacion.vue";
  import { RouterView } from 'vue-router';
</script>
<template>
  <Header />
  <main class="m-20">
    <router-view></router-view>
  </main>
  <Modal />
  <Notificacion/>
</template>
