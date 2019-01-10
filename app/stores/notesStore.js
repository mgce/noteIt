import {observable, action, toJS} from "mobx";
import { Item } from "native-base";

let index = 0;

class NotesStore {
    @observable notesList = noteList;

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
    deleteNote(key){
        var note = this.notesList.find(note => note.key === key);
        if(note === undefined)
            return;
        var index = this.notesList.indexOf(note);
        this.notesList.splice(index,1)
        console.log(this.notesList);
    };
}

const notesStore = new NotesStore();
export default notesStore;

const noteList = [
    {
      key: 1,
      title: "Notatka 1 test",
      body:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
        dateCreate: "5 min ago"
    },
    {
      key: 2,
      title: "Notatka 2",
      body:
        "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
        dateCreate: "5 min ago"
    },
    // {
    //   key: "3",
    //   title: "Notatka 3",
    //   description:
    //     "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    //   creationDate: "5 min ago"
    // },
    // {
    //   key: "4",
    //   title: "Notatka 4",
    //   description:
    //     "Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
    //   creationDate: "5 min ago"
    // },
    // {
    //   key: "5",
    //   title: "Notatka 5",
    //   description: "Test",
    //   creationDate: "5 min ago"
    // },
    // {
    //   key: "6",
    //   title: "Notatka 6",
    //   description: "Test",
    //   creationDate: "5 min ago"
    // },
    // {
    //   key: "7",
    //   title: "Notatka 7",
    //   description: "Test",
    //   creationDate: "5 min ago"
    // },
    // {
    //   key: "8",
    //   title: "Notatka 8",
    //   description: "Test",
    //   creationDate: "5 min ago"
    // }
  ];
  