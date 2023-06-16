<script setup lang="ts">
import { useTaskStore } from '../stores/task';
const taskStore = useTaskStore();

const props = defineProps({
    task: {
        type: Object,
        default: null
    },
    taskWidth: {
        type: Number,
        default: 80
        },
    taskLeft: {
        type: Number,
        default: 350
    },
    taskRight: {
        type: Number,
        default: 350
    }
});

</script>

<template>
    <div class="main container-fluid p-0 d-flex flex-row rounded-2 border border-dark" style="height: 160px;">
        <div class="leftSide d-flex flex-column justify-content-around p-2 border-end border-dark" :style="{ width: `${taskLeft}px` }">
            <span>{{task.description}}</span>
            <div class="d-flex flex-row justify-content-between mt-5">
                <div class="d-flex gap-3">
                    <img src="../assets/avatar.png" class="rounded-circle" style="width: 28px; height: 28px;">
                    <span class="">{{task.author}}</span>
                </div>
                <div class="d-flex gap-3">
                    <img v-if="task.languages[0]" src="../assets/html.png" ref="html" style="width: 20px; height: 20px;">
                    <img v-if="task.languages[1]" src="../assets/css.png" ref="css" style="width: 15px; height: 20px;">
                    <img v-if="task.languages[2]" src="../assets/js.png" ref="js" style="width: 30px; height: 20px;">
                </div>
            </div>
        </div>
        <div class="rightSide d-flex flex-row" style="background-image: url('src/assets/background.png');" :style="{ width: `${taskRight}px` }">
            <div class="content">
                <div class="start d-flex flex-column" >
                    <span id="text" class="fs-2" >Начать</span>
                    <span id="text" class="fs-2">Другие решения</span>
                </div>
                <div class="info d-flex flex-row">
                    <img src="../assets/likes.png" style="width:26px; height: 26px; ">
                    <span style="color: #F9595F;">10</span>
                    <img src="../assets/views.png" style="width:26px; height: 26px;">
                    <span style="color: #59B6F9;">10</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .content {
        width: 100%;
        display: none;
        flex-direction: row;
        justify-content: space-between;
        color: #393B44;
    }

    .start {
        margin-left: 10px;
        margin-top:auto;
        margin-bottom:auto;
    }

    .content:hover {
        background: rgb(214, 224, 240, 0.8);
        cursor: pointer;
        display: flex;
    }

    .rightSide:hover .content{
        display: flex;
        background: rgb(214, 224, 240, 0.8);
        cursor: pointer;
    }

    #text:hover {
        margin-left: 20px;
    }
    .info span {
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
    } 
</style>