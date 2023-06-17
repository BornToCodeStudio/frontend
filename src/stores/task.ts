import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([] as Array<Types.Task>);

    function getTask(id: number) {
        return tasks.value.find(t => t.id == id);
    };

    tasks.value.push({
        id: 2,
        title: "wadwadw",
        author: "horex",
        description: "Ваша первая задача",
        languages: [true, false, false],
        text: 'wadawdwa'
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "cowfucker",
        description: "Ваша первая задача",
        languages: [false, true, true],
        text: 'wadawdwa'
    })
    return { tasks, getTask };
})