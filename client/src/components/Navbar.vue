<template>
    <nav class="navbar">
        <div class="navbar__btns">
            <div class="link" @click="$router.push('/')">Главная</div>
            <div class="link" style="margin-left: 20px" @click="$router.push('/tasks')">Задачи</div>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style scoped>
    .navbar {
        background-color: cyan;
        padding: 20px;
    }
    .navbar__btns {
        display: flex;
    }

    .link {
        cursor: pointer;
    }

    .link:hover {
        color: #0003bd;
    }
</style>