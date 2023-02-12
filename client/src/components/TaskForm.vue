<template>
  <div>
    <div class="create_title">Создание задачи</div>
    <form class="task_form" @submit.prevent>
      <input
        v-model="task.title"
        class="name_input"
        type="text"
        placeholder="Название задачи"/>
      <input
        v-model="task.body"
        class="description_input"
        type="text"
        placeholder="Описание задачи"/>
      <button class="btn" @click="createTask">Создать</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "task-form",
  emits: [
    "create"
  ],
  data() {
    return {
      task: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createTask() {
      // this.task.id = Date.now();
      this.$emit('create', this.task);
      this.task = {
        title: '',
        body: ''
      };
    }
  }
};
</script>

<style scoped>
  .task_form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  .description_input {
    margin-top: 5px;
  }

  .btn {
    width: max-content;
    margin-top: 5px;
  }
</style>