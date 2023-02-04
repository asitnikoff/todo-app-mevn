<template>
    <div>
        <h2 class="list_title">
            <slot></slot>
        </h2>
        <task-item
            v-for="task in tasks"
            :task="task"
            :key="task.id"
            @remove="$emit('remove', task)"/>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
    name: 'task-list',
    components: {
        TaskItem
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>

</style>