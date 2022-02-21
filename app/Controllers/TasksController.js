import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"


export class TasksController {
    // NOTE this is where you need to pass down a listId
    createTask(listID) {
        window.event.preventDefault()
        const form = window.event.target

        const newTask = {
            // NOTE this where you are setting the listId to each of your tasks
            listID,
            name: form.name.value
        }
        console.log("[TaskController]: createTask", newTask)
        tasksService.createTask(newTask)
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            tasksService.deleteTask(id)
        }
    }
}