import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }

    get Template() {
        // TODO: add html
        return `
        
        
        `

    }

    get TasksTemplate() {
        let template = ''
        const myTasks = ProxyState.tasks.filter(t => t.tasksId == this.id)
        myTasks.forEach(t => template += t.Template)
        return template
    }

    // const myTasks = ProxyState.tasks.filter(t => t.taskId == this.id)




}