import { ProxyState } from "../AppState";





//Private
function _drawList() {
    let template = ''

}


//Public
export class ListsController {
    constructor() {
        ProxyState.on('lists', _drawList)
        ProxyState.on('tasks', _drawTask)
        _draw()
    }

    createList() {
        window.event.preventDefault()
        const form = window.event.target
    }


}

