import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const task = ref([] as Array<Task>);
    task.value.push({
        author: "horex",
        description: "Ваша первая задача",
        languages: [true, false, false]
    })
    task.value.push({
        author: "cowfucker",
        description: "Ваша первая задача",
        languages: [false, true, true]
    })
    type Task = {
        author: string,
        description: string,
        languages: Array<boolean>
    }
    return { task };
})