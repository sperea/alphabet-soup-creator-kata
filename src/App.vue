<template>
  <div id="app">
    <h2>Constructor de Sopa de Letras</h2>
    <WordSearchGrid :size="10" :activeWord="activeWord" />
    <br>
    <WordInput @activeWordChanged="setActiveWord" />
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