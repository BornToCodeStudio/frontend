import { ref } from 'vue'
import { defineStore } from 'pinia'
import telegram from '../assets/telegram.png'
import vk from '../assets/vk.png'
import discord from '../assets/discord.png'
import github from '../assets/github.png'
import { useAxios } from './axios'

export const useProfileStore = defineStore('profile', () => {
    type MediaType = {
        name: string,
        image: string,
        link: string
    };

    type AchievementType = {
        id: number,
        name: string
    }

    let media = ref([] as Array<MediaType>);
    media.value.push({
        name: "Telegram",
        image: telegram,
        link: "https://telegram.org"
    });
    media.value.push({
        name: "Vkontake",
        image: vk,
        link: "https://vk.com"
    });
    media.value.push({
        name: "Github",
        image: github,
        link: "https://github.com"
    });
    media.value.push({
        name: "Discord",
        image: discord,
        link: "https://discord.com"
    });

    let achievements = ref([] as Array<AchievementType>);
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });
    achievements.value.push({
        id: 1,
        name: "Знакомство с Born To Code"
    });

    let authorized = ref(false);
    let username = ref("");
    let id = ref(-1);

    async function remember(login: string) {
        authorized.value = true;
        username.value = login;

        await useAxios().get("/users/selfProfile", { withCredentials: true }).then(response => {
            if (response.status == 200)
                id.value = response.data;
        });
    }

    function isAuthorized() {
        return authorized.value;
    }

    function getUsername() {
        return username.value;
    }

    function getId() {
        return id.value;
    }

    async function authenticate() {
        try {
            return await useAxios().get("/users/authenticate", { withCredentials: true }).then((response) => response.status == 200);
        } catch (error) {
            console.log(error);

            return false;
        }
    }

    function translit(word: string) {
        //@ts-ignore
        const converter = { 'sch': 'щ','yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'ya': 'я','a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д','e': 'е', 'z': 'з', 'и': 'i', 'y': 'й', 'k': 'к','l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п','r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф','h': 'х', 'c': 'ц', 'y': 'ы',};
      
        for (const [key, value] of Object.entries(converter)) {
          word = word.split(key).join(value);
        }
      
        return word;
      }

    return { media, achievements, remember, authenticate, isAuthorized, getUsername, getId, translit };
});
