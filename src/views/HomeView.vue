<script setup lang="ts">
import Tasks from "../components/Task.vue";
import { useTaskStore } from '../stores/task';

const taskStore = useTaskStore();

</script>

<template>
    <div class="container-fluid d-flex flex-column gap-3">
        <div class="main d-flex flex-column gap-3">
            <span class="title">Задачи</span>
            <span class="description">Воодушевляющее описание страницы</span>
            <div class="lang d-flex flex-row gap-3">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
            </div>
            <div class="filter d-flex flex-row gap-3">
                <span>Популярные</span>
                <span>Количество решений</span>
                <span>Последние</span>
            </div>
        </div>
        <div class="d-flex flex-column gap-4">
            <Tasks class="task" v-bind:key="index" v-for="(task, index) in taskStore.tasks" 
                :task="task" :taskFontSize="34" :taskLeft="30" :taskRight="70" :taskWidth="75"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .main {
        margin-left: 210px;
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