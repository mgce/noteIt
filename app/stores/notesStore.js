import {observable, action} from "mobx";

class NotesStore {
    @observable notesList = noteList;
    @observable trash = [];

    @action
    addNote(note){
        const lastElement = this.notesList.pop();
        if(lastElement === undefined)
            note.id = 1
        else
            note.id = lastElement.id++
        this.notesList.push(note)
    };

    @action
    deleteNote(id){
        var note = this.notesList.find(note => note.id === id);
        if(note === undefined)
            return;
        this.notesList.remove(note);
    };

    @action
    editNote(editedNote){
        var oldNote = this.notesList.find(note => note.id === note.id);
        if(oldNote === undefined)
            return;
        var index = this.notesList.indexOf(oldNote);
        this.notesList[index] = editedNote;
    }

    @action
    moveToTrash(id){
        var note = this.notesList.find(note => note.id === id);
        if(note === undefined)
            return;
        this.notesList.remove(note);
        this.trash.push(note);
    }

    @action
    deleteFromTrashNote(id){
        var note = this.trash.find(note => note.id === id);
        if(note === undefined)
            return;
        this.trash.remove(note);
    };

    findByKey(id){
        return this.notesList.find(note => note.id === id);
    }
    
}

const notesStore = new NotesStore();
export default notesStore;

const noteList = [
    {
      id: 1,
      title: "Notatka 1 test",
      body:
        "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis...",
        dateCreate: "5 min ago"
    },
    {
      id: 2,
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
  