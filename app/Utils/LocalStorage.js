//TODO: Revise this sheet

import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {

    localStorage.setItem('PapaMarks', JSON.stringify({
        pizzas: ProxyState.lists,
        toppings: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('List Boi'))
    console.log('loaded data', data)
    if (data != null) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.toppings = data.tasks.map(t => new Task(t))
    }
}