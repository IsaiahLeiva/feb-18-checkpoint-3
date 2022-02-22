import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";


class TasksService {
    deleteTask(id) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    }
    createTask(newTask) {
        // console.log('this works', newTask);
        const task = new Task(newTask)
        ProxyState.tasks = [...ProxyState.tasks, task]
        console.log(ProxyState.tasks)
    }

}

export const tasksService = new TasksService()