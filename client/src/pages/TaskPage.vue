<template>
  <div>
    <div class="task_page">
      <h1 class="page_title">Страница со списком задач</h1>
      <task-form :class="'task_form'" @create="createTask" />
      <task-list
        v-if="tasks.length > 0"
        :class="'task_list'"
        :tasks="tasks"
        @remove="removeTask"
        >Список задач</task-list
      >
      <h2 v-else class="empty_task_list">Список задач пуст</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'task-page',
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    async createTask(task) {
      const response = await axios.post(
        'http://localhost:3000/api/tasks',
        task
      );
      this.tasks.push(response.data);
    },
    async removeTask(taskId) {
      const response = await axios.delete(
        `http://localhost:3000/api/tasks/${taskId}`
      );
      if (response.status === 200) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      } else {
        console.log('Произошла ошибка при удалении задачи');
      }
    },
    async fetchTasks() {
      const response = await axios.get('http://localhost:3000/api/tasks');
      this.tasks = response.data;
    },
  },
};
</script>

<style scoped>
.task_page {
  width: max-content;
  margin: 0 auto;
}

.task_form {
  margin-top: 20px;
}

.task_list {
  margin-top: 20px;
}

.list_title {
  margin-top: 30px;
}

.empty_task_list {
  margin-top: 20px;
  color: red;
}
</style>
