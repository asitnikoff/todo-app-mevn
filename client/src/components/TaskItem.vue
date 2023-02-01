<template>
    <div class="item">
        <div class="content">
            <div class="task_title">Название задачи: {{ task.title }}</div>
            <div class="task_body">Описание задачи: {{ task.body }}</div>
        </div>
        <div class="item__btns">
            <button @click="$router.push(`/tasks/${task.id}`)">Открыть</button>
            <button @click="$emit('remove', task)">Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            title: String,
            body: String
        }
    }
}
</script>

<style scoped>

.item {
    padding: 10px;
    border: 2px solid rgb(12, 0, 187);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item__btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

</style>