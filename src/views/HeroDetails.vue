<template>
  <div>HeroDetails</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import HerosApi from '@/models/HeroApi';

export default defineComponent({
  name: 'HeroDetails',
  props: {},
  async mounted() {
    const route = useRoute();
    console.log(route.query);
    console.log(await HerosApi.getHeroById('69'));
  },
});
</script>

<style scoped lang="scss">
</style>
