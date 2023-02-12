<template>
    <div>
        <h2 class="list_title">
            <slot></slot>
        </h2>
        <task-item
            v-for="task in tasks"
            :task="task"
            :key="task.id"
            @remove="$emit('remove', task.id)"/>
    </div>
</template>

<script>

export default {
    name: 'task-list',
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