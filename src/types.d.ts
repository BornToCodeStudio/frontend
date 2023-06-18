declare namespace Types {
    interface Task {
        id: number,
        title: string,
        author: string,
        fullDescription: string,
        shortDescription: string,
        codeExample: string,
        languages: Array<boolean>,
        createDate: Date
        htmlStruct: { 
            checkElementRules: Array<TaskHtmlCheckElement>
        }
    }

    interface TaskHtmlCheckElement {
        element: string,
        value: string
    }

    interface MediaType {
        name: string,
        image: string,
        link: string
    }

    interface AchievementType {
        id: number,
        name: string
    }
}