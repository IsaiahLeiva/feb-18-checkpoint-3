




//Private
function _draw() {

}


//Public
export class ListsController {
    constructor() {
        ProxyState.on('Lists', _draw);
        _draw()
    }

}

