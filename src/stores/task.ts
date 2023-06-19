import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
    const tasks = ref([] as Array<Types.Task>);
    
    const htmlCheckElement = ref([] as Array<Types.TaskHtmlCheckElement>)

    function getTask(id: number) {

        return tasks.value.find(t => t.id == id);
    };

    tasks.value.push({
        id: 2,
        title: "wadwadw",
        author: "datePreLastHTML",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [true, false, false],
        creationDate: 1718739251,
        likes: 10,
        views: 15,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "dateLastCSS",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, true, false],
        creationDate: 1887120451,
        likes: 3,
        views: 45,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "dateLastJs",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, false, true],
        creationDate: 2002736051,
        likes: 60,
        views: 500,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 2,
        title: "wadwadw",
        author: "dateLastHTML",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [true, false, false],
        creationDate: 1818739251,
        likes: 120,
        views: 15,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "datePreLastCSS",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, true, false],
        creationDate: 1687120451,
        likes: 9,
        views: 45,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "datePreLastJs",
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, false, true],
        creationDate: 1902736051,
        likes: 120,
        views: 500,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    return { tasks };
})