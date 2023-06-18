import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([] as Array<Types.Task>);
    
    const htmlCheckElement = ref([] as Array<Types.TaskHtmlCheckElement>)
    

    function getTask(id: number) {
        return tasks.value.find(t => t.id == id);
    };

    function getTaskByLanguageFilter(filter: number) : Array<Types.Task> {
        return tasks.value.filter(f => f.languages[filter])
    }

    tasks.value.push({
        id: 2,
        title: "wadwadw",
        author: "horex",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [true, false, false],
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "cowfucker",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, true, false],
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "cowfucker",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, false, true],
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    return { tasks, getTask, getTaskByLanguageFilter};
})