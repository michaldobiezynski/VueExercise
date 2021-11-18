<template>
  <div class="Home">
    <h1><a href="https://superheroapi.com/">SuperHero API</a></h1>

    <button @click="() => $router.push('superhero')">Go to search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
<style  scoped>
.Home {
  text-align: center;
}

.Home > h1 {
  background-color: rgba(0, 0, 0, 0.651);
  color: rgb(22, 24, 24);
  margin: 2rem auto;
  border-radius: 20px;
  width: 50rem;
  padding: 0.5rem;
}

.Home > h1 > a {
  color: rgb(174, 37, 192);
  font-family: 'Permanent Marker';
  text-shadow: 4px 4px 4px black;
  font-weight: bold;
  font-size: 5rem;
  cursor: pointer;
}

.Home > button {
  margin: 10px 10px;
  padding: 10px 20px;
  border-style: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: darkorange;
  font-weight: bold;
  color: cornsilk;
}

.Home > button:hover {
  background-color: orangered;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.Home > button:focus {
  outline: none;
}

@media (max-width: 600px) {
  .Home > h1 {
    font-size: 1.5rem;
  }
}
</style>
