<template>
  <div>
    <div class="create_title">Создание задачи</div>
    <form class="task_form" @submit.prevent>
      <input
        v-model="task.title"
        class="name_input"
        type="text"
        placeholder="Название задачи" />
      <input
        v-model="task.body"
        class="description_input"
        type="text"
        placeholder="Описание задачи" />
      <my-button title="Создать" class="btn" @click="createTask" />
    </form>
  </div>
</template>

<script>
import MyButton from '@/components/ui/MyButton.vue';

export default {
  name: 'task-form',
  emits: ['create'],
  components: {
    MyButton,
  },
  data() {
    return {
      task: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createTask() {
      // this.task.id = Date.now();
      this.$emit('create', this.task);
      this.task = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style scoped>
.task_form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.name_input {
  width: 300px;
}

.description_input {
  width: 300px;
  margin-top: 5px;
}

.btn {
  width: max-content;
  margin-top: 5px;
}
</style>
