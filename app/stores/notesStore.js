import {observable, action, toJS} from "mobx";
import { Item } from "native-base";

let index = 0;

class NotesStore {
    @observable notesList = []

    @action
    addNote(note){
        this.notesList.push(note)
        index++

        var test = toJS(this.notesList)
    };
}

const notesStore = new NotesStore();
export default notesStore;