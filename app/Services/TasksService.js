import { ProxyState } from "../AppState";
import { Task } from "../Models/Task";


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