import { generateId } from "../Utils/generateId";



export class Task {
    constructor(id, name, checkbox) {
        this.id = generateId()
        this.name = name,
            this.checkbox = checkbox
    }

    get TaskTemplate() {
        // TODO: add html 
        return

    }

}