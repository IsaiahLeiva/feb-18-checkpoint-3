import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"


export class TasksController {
    createTask(taskID) {
        window.event.preventDefault()
        const form = window.event.target

        const newTask = {
            taskID,
            name: form.name.value
        }
        console.log("[TaskController]: createTask", newTask)
        tasksService.createTask(newTask)
    }

    permitTask(value) {
        if (value.length >= 3 & value.length <= 50) {
            // document.getElementById('error').innerHTML = "Must be between 3 and 50 characters";

        }
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            taskService.deleteTask(id)
        }
    }
}