<template>
  <div id="main-container">
    <div id="friends-list">

      <div id="search-container">

          <font-awesome-icon
            v-if="!inputIsFocused"
            class="fas fa-camera fa-sm search-icon"
            icon="search"
          />

          <input
          v-model="search"
          @click="flipFocus"
          @blur="flipFocus"
          placeholder="Search..."
          type="text"
          />

          <button v-if="searchPhraseIsThere" @click="searchByName">Search</button>
      </div>
      <div v-for="hero in heros" :key="hero.id">
          {{hero}}
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
      inputIsFocused: false,
      heros: [],
    };
  },
  computed: {
    searchPhraseIsThere() {
      if (this.search.length > 0) {
        return true;
      }
      return false;
    },
  },

  methods: {
    async searchByName() {
      const response = await HerosApi.getHeroByName(this.search);
      console.log(response);
      this.heros = response.results;
      this.search = '';
    },
    flipFocus() {
      this.inputIsFocused = !this.inputIsFocused;
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

.search-icon {
  margin-right: -20px;
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
