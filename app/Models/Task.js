import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        // NOTE you're going about this the wrong way. You need to keep track of whether or not a task is complete... think true or false
        this.checkbox = data.checkbox || false
        // NOTE each task will need a listId to tell the task which list it belongs on

    }

    get TaskTemplate() {
        return `
        <li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `
        // NOTE use a input type checkbox here, look into writing a ternary operator based wether or not this.checkbox is true or false
    }

}