import {observable} from "mobx";
import { Item } from "native-base";

let index = 0;

class NotesStore {
    @observable notesList = []

    addNote(note){
        this.notesList.push({
            name: Item,
            items: [],
            index
        })
        index++
    };
}

const notesStore = new NotesStore();
export default notesStore;