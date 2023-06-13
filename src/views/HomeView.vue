<script lang="ts">
import Tasks from "../components/Task.vue";

const tasks = [{author: "horex", description: "Ваша первая задача"},
            {author: "cowfucker", description: "Вывести 'Hello world' с помощью js"},
            {author: "cowfucker", description: "Вывести 'Hello world' с помощью js"},
            {author: "cowfucker", description: "Вывести 'Hello world' с помощью js"}]
</script>

<template>
    <div class="container-fluid d-flex flex-column gap-3">
        <div class="main d-flex flex-column gap-2">
            <span class="title">Задачи</span>
            <span class="description">Воодушевляющее описание страницы</span>
            <div class="lang d-flex flex-row gap-2">
                <span tabindex="1">HTML</span>
                <span tabindex="1">CSS</span>
                <span tabindex="1">JAVASCRIPT</span>
            </div>
            <div class="filter d-flex flex-row gap-2">
                <span tabindex="1">Популярные</span>
                <span tabindex="1">Количество решений</span>
                <span tabindex="1">Последние</span>
            </div>
        </div>
        <div class="d-flex flex-column gap-4">
            <Tasks class="task" v-bind:key="index" v-for="(task, index) in tasks" :task="task"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main {
        margin-left: 150px;
    }

    .title {
        font-style: normal;
        font-weight: 400;
        font-size: 46px;
        line-height: 150%;
        color: #393B44;
    }

    .description {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 150%;
        color: #393B44;
    }
    .lang span {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #8D93AB;
    }

    .lang span:hover {
            color:#393B44;
            cursor: pointer;
    }

    .lang span:focus {
        color:#393B44;
    }

    .filter span {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 150%;
        color: #8D93AB;
    }

    .filter span:hover {
            color:#393B44;
            cursor: pointer;
    }
    
    .filter span:focus {
        color:#393B44;
        text-decoration: underline;
    }
</style>