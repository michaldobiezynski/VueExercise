<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import HerosApi from '@/models/HeroApi';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  async mounted() {
    console.log(await HerosApi.getHeroById('69'));
  },
});
</script>
