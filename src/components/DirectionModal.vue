<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <button class="arrow diagonal" @click="selectDirection('up-left')">&#8598;</button>
      <button class="arrow" @click="selectDirection('up')">&#8593;</button>
      <button class="arrow diagonal" @click="selectDirection('up-right')">&#8599;</button>
      <button class="arrow" @click="selectDirection('left')">&#8592;</button>
      <button class="close-button" @click="selectDirection('none')">&#215;</button>
      <button class="arrow" @click="selectDirection('right')">&#8594;</button>
      <button class="arrow diagonal" @click="selectDirection('down-left')">&#8601;</button>
      <button class="arrow" @click="selectDirection('down')">&#8595;</button>
      <button class="arrow diagonal" @click="selectDirection('down-right')">&#8600;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectDirection(direction) {
      this.$emit('selected-direction', direction);
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: #f9f9f9;
  border: 1px solid #aaa;
  padding: 15px;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px;
}

.arrow {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.diagonal {
  font-size: 18px;
}

.close-button {
  cursor: pointer;
  font-size: 24px;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #f9f9f9;
}
</style>