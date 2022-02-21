import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    console.log(this.name);
    console.log(this.color)
    return `
  <div id="lists" class="row">
    <div class="col-md-4 p-3">
      <div class="rounded shadow bg-white">
        <div style="${'background' + ':' + this.color + ';'}" class="rounded-top text-center p-2">
          <h4 class="d-flex justify-content-between">
            ${this.name}
            <i class="mdi mdi-delete selectable" title="delete list"
              onclick="app.listsController.deleteList('${this.id}')"></i>
          </h4>
        </div>
        <div class="p-3">

          <div class="bg-secondary lighten-30 mt-4 p-2 rounded">
            <ul>
              ${this.TasksTemplate}
            </ul>
          </div>
        </div>

        <form class="px-3 pb-2" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="input-group">
            <input type="text" id="requirement" class="form-control" minlength="3" maxlength="50"
              placeholder="Add Task..." aria-label="task" aria-describedby="task" id="name">
            <div id="error"></div>
            <submit class="btn btn-outline-secondary" type="submit" id="button-addon2"><i class="mdi mdi-plus"></i>
            </submit>
        </form>
      </div>
    </div>
  </div>
        `
  }

  get TasksTemplate() {
    let template = ''
    // NOTE right here is where you need to filter the tasks by their listId (complete)
    const myTasks = ProxyState.tasks.filter(t => t.listsId == this.id)
    myTasks.forEach(t => template += t.Template)
    return template
  }



  // NOTE find how many tasks are for this list, use a filter, and then get the length of that array
  // NOTE do another get method, filter array by listId, and then filter again by homw many are complete
  // get TasksTotal(){}

  get TasksTotal() {
    tasks.filter(listsId)
    tasks.filter(this.TasksTotal)
  }


}