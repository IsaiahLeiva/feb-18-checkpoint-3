import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"




//Private
function _drawList() {
    console.log(ProxyState.lists)
    let template = ''
    const lists = ProxyState.lists
    console.log(lists)
    lists.forEach(l => template += l.Template)
    document.getElementById('lists').innerHTML = template


    // let taskTemplate = ''
    // const tasks = ProxyState.tasks
    // tasks.forEach(t => taskTemplate += t.TaskTemplate)
    // console.log(taskTemplate)
    // document.getElementById('lists').innerHTML += taskTemplate
}


//Public
export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawList)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)

        loadState()
    }

    createList() {
        window.event.preventDefault()
        const form = window.event.target

        const rawList = {
            name: form.listname.value,
            color: form.listcolor.value
        }
        listsService.createList(rawList)
    }

    deleteList(id) {
        listsService.deleteList(id)
    }

}

