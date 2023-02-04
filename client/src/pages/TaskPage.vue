<template>
    <h1 class="page_title">Страница со списком задач</h1>
    <task-form :class="'task_form'" @create="createTask"/>
    <task-list
        v-if="tasks.length > 0"
        :class="'task_list'"
        :tasks="tasks"
        @remove="removeTask">Список задач</task-list>
    <h2 v-else class="empty_task_list">Список задач пуст</h2>
</template>

<script>
import TaskList from '@/components/TaskList.vue';
import TaskForm from '@/components/TaskForm.vue';

export default {
    name: 'task-page',
    components: {
        TaskForm,
        TaskList,
    },
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Task #1',
                    body: 'Body #1'
                },
                {
                    id: 2,
                    title: 'Task #2',
                    body: 'Body #2'
                },
                {
                    id: 3,
                    title: 'Task #3',
                    body: 'Body #3'
                },
            ],
        }
    },
    methods: {
        createTask(task) {
            this.tasks.push(task);
        },
        removeTask(deletedTask) {
            this.tasks = this.tasks.filter(task => task.id !== deletedTask.id);
        }
    }
}
</script>

<style scoped>
    /* .page_title {
        margin-bottom: 20px;
    } */

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