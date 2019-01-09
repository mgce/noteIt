import {observable, action, toJS} from "mobx";
import { Item } from "native-base";

let index = 0;

class NotesStore {
    @observable notesList = []

    @action
    addNote(note){
        const lastElement = this.notesList.pop();
        if(lastElement === undefined)
            note.key = 1
        else
            note.key = lastElement.key++
        this.notesList.push(note)
    };

    @action
    deleteNote(note){
        this.notesList.splice(this.notesList(note),1)
    }
}

const notesStore = new NotesStore();
export default notesStore;