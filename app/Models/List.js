import { generateId } from "../Utils/generateId.js";



export class List {
    constructor(name, color) {
        this.id = generateId()
        this.name = name
        this.color = color
    }

    get listTemplate() {
        // TODO: add html
        return `
        
        
        `


    }


}