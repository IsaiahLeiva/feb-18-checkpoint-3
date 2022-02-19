import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {

    localStorage.setItem('ListBoi', JSON.stringify({
        pizzas: ProxyState.lists,
        toppings: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('ListBoi'))
    console.log('loaded data', data)
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.toppings = data.tasks.map(t => new Task(t))
    }
}