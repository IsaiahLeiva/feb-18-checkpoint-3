import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {

    localStorage.setItem('ListBoi', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
    console.log('I just did a save state');
}

// localStorage.removeItem('ListBoi')

export function loadState() {
    let data = JSON.parse(localStorage.getItem('ListBoi'))
    console.log(data)
    console.log('loaded data', data)
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.tasks = data.tasks.map(t => new Task(t))
    }
}