
function _draw() {

}

export class TasksController {
    constructor() {
        ProxyState.on('Tasks', _draw)
        _draw()
    }
}