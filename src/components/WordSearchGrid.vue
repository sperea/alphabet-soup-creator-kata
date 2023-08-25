<template>
  <div class="grid-container">
    <div v-for="(row, rowIndex) in grid" :key="rowIndex" class="grid-row">
      <div
          v-for="(col, colIndex) in row"
          :key="colIndex"
          :class="getCellClass(rowIndex, colIndex)"
          @click="showModal(rowIndex, colIndex)"
      >
        {{ grid[rowIndex][colIndex] }}
      </div>
    </div>
    <DirectionModal
        :visible="isModalVisible"
        :activeWord="activeWord"
        @selected-direction="handleDirectionSelection"
        @click-outside="hideModal"
    />
  </div>
</template>

<script>
import DirectionModal from './DirectionModal.vue';

export default {
  components: {
    DirectionModal,
  },
  props: {
    size: {
      type: Number,
      default: 10,
    },
    activeWord: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isModalVisible: false,
      grid: Array.from({ length: this.size }, () => Array.from({ length: this.size }, () => null)),
      selectedCoordinates: null,
    };
  },
  methods: {
    showModal(rowIndex, colIndex) {
      this.isModalVisible = true;
      this.selectedCoordinates = { rowIndex, colIndex };
    },
    hideModal() {
      this.isModalVisible = false;
      this.selectedCoordinates = null;
    },
    handleDirectionSelection(direction) {
      console.log('Selected Direction:', direction);
      this.hideModal();
    },
    getCellClass(rowIndex, colIndex) {
      return {
        'grid-cell': true,
        'selected': this.selectedCoordinates && this.selectedCoordinates.rowIndex === rowIndex && this.selectedCoordinates.colIndex === colIndex
      };
    }
  },
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
}

.grid-cell {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
}

.selected {
  background-color: red;
  color: white;
}
</style>