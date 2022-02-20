import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
    createTask(newTask) {
        const task = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
    }

}

export const tasksService = new TasksService()