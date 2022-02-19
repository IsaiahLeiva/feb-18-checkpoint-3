import { generateId } from "../Utils/generateId.js";



export class Task {
    constructor(id, name, checkbox) {
        this.id = generateId()
        this.name = name,
            this.checkbox = checkbox
    }

    get TaskTemplate() {
        return `
        <li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
        `
    }

}