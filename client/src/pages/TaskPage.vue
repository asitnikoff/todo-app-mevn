<template>
    <h1 class="page_title">Страница со списком задач</h1>
    <task-form @create="createTask"/>
    <h2 class="list_title">Список задач</h2>
    <task-item
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @remove="removeTask(task)"/>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskItem from '@/components/TaskItem.vue';

export default {
    name: 'tasks-list',
    components: {
        TaskForm,
        TaskItem
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
            // console.log('ok');
            this.tasks.push(task);
            console.log(this.tasks);
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

    .task_list {
        margin-top: 20px;
    }

    .list_title {
        margin-top: 30px;
    }
</style>