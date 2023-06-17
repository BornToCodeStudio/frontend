<script setup lang="ts">
import defaultAvatar from '../assets/avatar.png'
import Media from '../components/ProfileView/Media.vue'
import Achievement from '../components/ProfileView/Achievement.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Tasks from "../components/Task.vue";

import 'swiper/css';

import { useProfileStore } from '../stores/profile';
import { useTaskStore } from '../stores/task';

const profileStore = useProfileStore();
const taskStore = useTaskStore();

</script>

<template>
<div class="profile d-flex justify-content-around">
    <div class="d-flex flex-column gap-4">
        <div class="profile-info d-flex flex-row" style="margin-left: 30px;">
            <div class="mihailo">
                <div class="d-flex align-items-center gap-3">
                    <h1 class="nickname display-5">Никнейм</h1>
                    <div class="avatar rounded-circle">
                        <img :src="defaultAvatar"/>
                    </div>
                </div>
                <div class="info d-flex flex-column gap-3">
                    <span>Страна: Страна</span>
                    <span>Зарегистрирован: 23.05.1986</span>
                    <div class="d-flex gap-2">
                        <Media :key="index" v-for="(item, index) in profileStore.media" :image="item.image" :link="item.link" :name="item.name"/>
                    </div>
                    <div class="stats d-flex">
                        <div class="d-flex align-items-center gap-3">
                            <img src="../assets/goal.png"/>
                            <span>Решено задач: 0</span>
                        </div>
                        <div class="d-flex align-items-center gap-3">
                            <img src="../assets/edit.png"/>
                            <span>Созданно задач: 0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="achievements d-flex flex-column">
                <h1 class="display-5">Достижения:</h1>
                <swiper :slides-per-view="5" style="width: 500px; height: 150px;" class="mySwiper">
                    <swiper-slide :key="index" v-for="(item, index) in profileStore.achievements">
                        <Achievement class="ach" :name="item.name"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>  
        <div class="tasks d-flex flex-row gap-4">
                <Tasks class="task" v-bind:key="index" v-for="(task, index) in taskStore.tasks" 
                :task="task" :taskFontSize="34" :taskLeft="50" :taskRight="50" :taskWidth="45"/>
        </div>
    </div>  
</div>
</template>

<style scoped lang="scss">

.tasks {
    flex-wrap: wrap;
}   
.task {
    width: 45%;
}
.ach {
    margin-top: 25px
}

.profile {
    margin: 0 5% 0 5%;

    .profile-info {
        .mihailo {
            width: 50%;

            @media (max-width: 1203px) {
                width: 100%;
            }
        }
    }
}

.avatar {
    width: 120px;
    height: 120px;
    -webkit-box-shadow: 0px 0px 9px 15px rgba(214, 224, 240, 0.3);
    -moz-box-shadow: 0px 0px 9px 15px rgba(214, 224, 240, 0.3);
    box-shadow: 0px 0px 9px 15px rgba(214, 224, 240, 0.3);
    background-color: rgb(214, 224, 240, 0.6);
    text-align: center;

    img {
        width: 100px;
        height: 100px;
        margin-top: 4px;
    }
}

.nickname {
    font-weight: 400;
}

.info {
    span {
        font-weight: 400;
        font-size: 28px;
    }
}

.stats {
    img {
        width: 32px;
        height: 32px;
    }

    span {
        font-weight: 400;
        font-size: 24px;
    }

    gap: 100px;
    margin-top: 25px;

    @media (max-width: 579px) {
        flex-direction: column;
        gap: 30px;
    }
}

.achievements {
    width: 50%;
    text-align: center;
    gap: 20px;

    h1 {
        font-weight: 400;
        line-height: 120px;
        height: 120px;
    }

    @media (max-width: 1203px) {
        display: none !important;
        opacity: 0;
        position: absolute;
    }
}

.tasks {
    @media (max-width: 1203px) {
        display: none !important;
        opacity: 0;
        position: absolute;
    }
}
</style>