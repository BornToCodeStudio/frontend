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

    function getTaskByLikesFilter() : Array<Types.Task> {
        return tasks.value.sort((a,b) => b.likes - a.likes)
    }

    function getTaskByDate()
    {
        return tasks.value.sort((a,b) => a.creationDate - b.creationDate)
    }

    tasks.value.push({
        id: 1,
        title: "wadwadw",
        author: "horex",
        authorId: 1,
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
        id: 2,
        title: "wadwadw",
        author: "cowfucker",
        authorId: 2,
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, true, false],
        creationDate: 1687120451,
        likes: 3,
        views: 45,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    tasks.value.push({
        id: 3,
        title: "wadwadw",
        author: "cowfucker",
        authorId: 2,
        fullDescription: "Ваша первая задача",
        shortDescription: "Напишите код",
        codeExample: 'wadawdwa',
        languages: [false, false, true],
        creationDate: 2002736051,
        likes: 120,
        views: 500,
        htmlStruct: {
            checkElementRules: htmlCheckElement.value
        }
    })
    return { tasks, getTask, getTaskByLanguageFilter, getTaskByLikesFilter, getTaskByDate};
})