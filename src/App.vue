<template>
  <div id="app">
    <div class="content-wrapper">
      <h2>Constructor de Sopa de Letras</h2>
      <div class="center-grid">
        <WordSearchGrid :size="20" :activeWord="activeWord" />
      </div>
      <WordInput />
    </div>
  </div>
</template>
<script>
import WordInput from './components/WordInput.vue';
import WordSearchGrid from './components/WordSearchGrid.vue';

export default {
  components: {
    WordInput,
    WordSearchGrid,
  },
  data() {
    return {
      activeWord: '',
    };
  },
  methods: {
    setActiveWord(word) {
      this.activeWord = word;
    },
  },
};
</script>

<style scoped>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  .content-wrapper {
    text-align: center;
  }

  .center-grid {
    display: flex;
    justify-content: center;
  }
</style>