import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }

    get Template() {
        console.log(this.name);
        console.log(this.color)
        return `
        <div class="col-md-4 p-3">
    <div  class="rounded shadow bg-white">
      <div style = "${'background' + ':' + this.color + ';'}" class="rounded-top text-center p-2">
        <h4 class="d-flex justify-content-between">
        ${this.name.toUpperCase()} 
        <i class="mdi mdi-delete selectable" title="delete list" onclick="app.listsController.deleteList('${this.id}')" ></i>
        </h4>
      </div>
      <div class="p-3">
        <div class="bg-secondary lighten-30 p-2 rounded">
        </div>
        <div class="bg-secondary lighten-30 mt-4 p-2 rounded">
          <p><b>Add Task</b></p>
          <ul>
             ${this.TasksTemplate}
          </ul>
        </div>
      </div>
    //   NOTE: Below is the task adding template 
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