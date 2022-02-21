import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService {
    deleteList(id) {
        ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(t => t.listsId != id)
    }
    createList(newList) {
        const list = new List(newList)
        ProxyState.lists = [...ProxyState.lists, list]
    }
}

export const listsService = new ListsService()