

export class TasksController {
    createTask(taskID) {
        window.event.preventDefault()
        const form = window.event.target

        const newTask = {
            taskID,
            name: form.name.value
        }
        console.log("[TaskController]: createTask", newTask)
        taskService.createTask(newTask)
    }

    async deleteTask(id) {
        if (await Pop.confirm()) {
            taskService.deleteTask(id)
        }
    }
}