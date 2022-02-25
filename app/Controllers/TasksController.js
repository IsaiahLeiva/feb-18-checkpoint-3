// import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
// import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js";



// _drawTask()

export class TasksController {
    // NOTE this is where you need to pass down a listId
    createTask(listId, event) {
        console.log('creating a task');
        console.log(event.target)
        window.event.preventDefault()

        // console.log(ProxyState.tasks[0].TaskTemplate)
        const form = window.event.target

        const newTask = {
            // NOTE this where you are setting the listId to each of your tasks
            listId,
            name: form.taskname.value
        }
        console.log(event.target.parentNode)
        // event.target.insertAdjacentHTML("afterend", '<div style = "background: red; height: 100px; width: 100px;">test</div>')
        event.target.parentNode.innerHTML += `<div class = 'testing'></div>`
        console.log("[TaskController]: createTask", newTask)
        tasksService.createTask(newTask)
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            tasksService.deleteTask(id)
        }
    }
}