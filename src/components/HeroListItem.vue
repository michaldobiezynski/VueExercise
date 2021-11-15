<template>
  <div class="section">
    <div class="card">
      <div class="header">
        <img :src="hero.image.url" alt="" />
      </div>
      <font-awesome-icon
        v-if="!inputIsFocused"
        class="fas fa-sm expand-icon"
        icon="plus"
      />
      <div>
        <h5 style="text-align: left; margin-left: 16px">Name</h5>
        <h3 class="hero-details">{{ hero.name }}</h3>
        <h5 style="text-align: left; margin-left: 16px">Full name</h5>
        <h3 class="hero-details">{{ fullName }}</h3>
        <h5 style="text-align: left; margin-left: 16px">Occupation</h5>
        <h5 class="hero-details">{{ hero.work.occupation }}</h5>

        <button class="button">View profile</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { IHero } from '@/models/IHero';

export default defineComponent({
  name: 'HeroListItem',
  props: {
    msg: String,
    hero: Object as () => IHero,
  },
  data() {
    return {
      fullName: '',
    };
  },

  methods: {
    // this.$router.push({ path: 'register', query: { plan: 'private' } })
  },

  mounted() {
    console.log('hero', this.hero);
    this.fullName = this.hero?.biography['full-name'] ?? '';
    console.log('hero.biography.full-name', this.hero?.biography['full-name']);
  },
});
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
$primary: #7f00ff;
$secondary: #00d1b2;
$section: transparent;
$muted: #999;

h3 {
  padding-bottom: 0;
}
h5 {
  padding-top: 0;
}

.hero-details {
  color: $primary;
}

.section {
  background-color: $section;
  min-height: 500px;
  width: 300px;
  position: relative;
  .card {
    border-radius: 6px;
    overflow: hidden;
    max-height: 100%;
    width: 300px;
    margin: 0 auto;
    background-color: chartreuse;
    .header {
      height: 120px;
      background: $primary;
      display: flex;
      align-content: center;
      justify-content: center;
      img {
        width: 150px;
        height: 150px;
        display: block;
        border-radius: 50%;
        border: 4px solid white;
      }
    }

    .user-bio {
      padding-top: 8px;
      font-size: 92%;
      color: $muted;
    }
    .button {
      background: $primary;
      border-color: $primary;
      color: white;
      border-radius: 100px;
      padding: 8px;
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}

.expand-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: $primary;
  transition: all 0.4s;
  margin-top: 40px;
  img {
    width: 32px;
    height: 32px;
  }
  &:hover {
    transform: scale(1.1) rotate(360deg);
    background: $secondary;
  }
}
</style>
