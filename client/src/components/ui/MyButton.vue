<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    title: String,
  },
};
</script>

<style scoped>
.button {
  border: 2px solid cyan;
  padding: 5px 10px;
  transition: background-color 0.5s ease;
}

.button:hover {
  background-color: #5fdf2d;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
</style>
