<template>
  <div class="item">
    <div class="content">
      <div class="task_title">Название задачи: {{ task.title }}</div>
      <div class="task_body">Описание задачи: {{ task.body }}</div>
    </div>
    <div class="item__btns">
      <my-button title="Открыть" @click="$router.push(`/tasks/${task.id}`)" />
      <my-button title="Удалить" @click="$emit('remove', task)" />
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/ui/MyButton.vue';

export default {
  name: 'task-item',
  components: { MyButton },
  props: {
    task: {
      title: String,
      body: String,
    },
  },
};
</script>

<style scoped>
.item {
  padding: 10px;
  border: 2px solid rgb(12, 0, 187);
  width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item__btns {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 30px;
}
</style>
