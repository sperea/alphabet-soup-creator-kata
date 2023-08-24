<template>
  <div class="grid-container">
    <div v-for="(row, rowIndex) in size" :key="rowIndex" class="grid-row">
      <div 
        v-for="(col, colIndex) in size" 
        :key="colIndex" 
        class="grid-cell" 
        @click="showModal(rowIndex, colIndex)"
      ></div>
    </div>
    <DirectionModal 
      :visible="isModalVisible"
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
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    handleDirectionSelection(direction) {
      console.log('Selected Direction:', direction);
      // Aquí puedes manejar la lógica después de seleccionar una dirección.
      this.hideModal();
    },
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

.directions {
  margin-top: 10px;
  text-align: center;
}
</style>
