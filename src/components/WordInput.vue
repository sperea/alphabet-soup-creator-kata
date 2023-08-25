<template>
  <div class="word-input-container">
    <input v-model="word" placeholder="Escribe una palabra" />
    <button @click="addWord">Agregar palabra</button>

    <table v-if="words.length">
      <thead>
        <tr>
          <th class="circle-column"></th>
          <th>Palabra</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(w, index) in words"
          :key="w"
          :class="{ 'active-word': activeWordIndex === index }"
        >
          <td><span class="indicator"></span></td>
          <td>
            {{ w }}
            &nbsp;&nbsp;
            <button @click="activateWord(index)">
              {{ activeWordIndex === index ? "Desactivar" : "Activar" }}
            </button>
            &nbsp;&nbsp;
            <button @click="deleteWord(index)">Eliminar</button>  <!-- Botón para eliminar -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "",
      words: [],
      activeWordIndex: null,
    };
  },
  methods: {
    addWord() {
      if (this.word.trim()) {
        this.words.push(this.word.trim());
        this.word = "";
      }
    },
    activateWord(index) {
      if (this.activeWordIndex === index) {
        this.activeWordIndex = null;
        this.$emit('activeWordChanged',"");

      } else {
        this.activeWordIndex = index;
        this.$emit('activeWordChanged', this.words[this.activeWordIndex]);

      }
    },
    deleteWord(index) {
      this.words.splice(index, 1);
      if (this.activeWordIndex === index) {
        this.activeWordIndex = null;
      }
    }
  },
  computed: {
    longestWordLength() {
      if (!this.words.length) return 0;

      const longestWord = this.words.reduce((longest, current) => {
        return longest.length > current.length ? longest : current;
      }, "");

      return longestWord.length;
    },
  },
};
</script>

<style scoped>
.word-input-container {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.active-word {
  background-color: #e6ffe6; /* Un tono suave de verde */
}

button {
  cursor: pointer;
}

.indicator {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
}

.active-word .indicator {
  background-color: green;
}

.circle-column {
  width: 30px; /* 20px del círculo + 10px de margen */
  text-align: center;
}

.word-column {
  /* Aquí usaremos la propiedad ch, que representa el ancho de carácter de la fuente en uso */
  width: calc(var(--dynamic-width) * 1ch);
}
</style>
