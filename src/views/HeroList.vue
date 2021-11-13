<template>
  <div id="main-container">
    <div id="friends-list">

      <div id="search-container">

          <font-awesome-icon
            class="fas fa-camera fa-sm"
            icon="search"
          />

          <input type="text" v-model="search" placeholder="Search..." />
          <button v-if="searchPhraseIsThere" @click="searchByName">Search</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HerosApi from '@/models/HeroApi';

export default defineComponent({
  name: 'HeroList',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    searchPhraseIsThere() {
      console.log('this', this.search);
      if (this.search.length > 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async searchByName() {
      console.log(await HerosApi.getHeroByName(this.search));
    },
  },

});
</script>
<style lang="scss" scoped>

#main-container {
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
}

#search-container {
  margin-bottom: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

::placeholder {
  padding: 16px;
}
input {
  background-color: transparent;
  height: 40px;
  border: solid;
  transition: 0.15s all ease-in-out;
  &:focus {
    outline: none;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
}

</style>
