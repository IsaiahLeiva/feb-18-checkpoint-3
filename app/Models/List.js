import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }

    get Template() {
        return `
        <form class="px-3 pb-2" onsubmit="app.tasksController.createTask('${this.id}')">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Add Task..." aria-label="task"
            aria-describedby="task" id="name">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
              class="mdi mdi-plus"></i></button>
        </div>
      </form>

        `
    }

    get TasksTemplate() {
        let template = ''
        const myTasks = ProxyState.tasks.filter(t => t.tasksId == this.id)
        myTasks.forEach(t => template += t.Template)
        return template
    }


    // const myTasks = ProxyState.tasks.filter(t => t.tasksId == this.id)

    // out += myTasks.length

    // return out

}