<template>
  <div class="container">
<div class="search-container" >
  <input v-model="search" type="text" placeholder="Search..." name="search">
  <button @click="searchByName">  <font-awesome-icon
            class="fas fa-sm search-icon"
            icon="search"
          /></button>
</div>
<div v-for="hero in heros" :key="hero.id">
        <div style="margin: 48px;">

                <HeroListItem v-if="hero" :hero="hero"/>
        </div>

      </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HerosApi from '@/models/HeroApi';
import HeroListItem from '@/components/HeroListItem.vue';

export default defineComponent({
  name: 'SuperheroView',
  components: { HeroListItem },
  data() {
    return {
      search: '',
      heros: [],
    };
  },
  methods: {
    async searchByName() {
      const response = await HerosApi.getHeroByName(this.search);
      console.log(response);
      this.heros = response.results;
      this.search = '';
    },
  },
  async mounted() {
    console.log(await HerosApi.getHeroById('69'));
  },
});
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.container {
  width: 50%;
}

/* Style the search field */
.search-container input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
.search-container button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

.search-container button:hover {
  background: #0b7dda;
}

/* Clear floats */
.search-container::after {
  content: "";
  clear: both;
  display: table;
  width: 100%;
}

</style>
