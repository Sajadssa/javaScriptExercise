import NotesAPI from "./NotesAPI.js";
import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    // first call notesView for pass root
    //default mode all note is empty an array
    this.notes = [];
    // for make active note
    this.activeNote = null;
    // when instance from NotesView Class that  call constructor method and makes the program view
    this.view = new NotesView(root, this._handlers());
    // we passed refreshNotes to update noteList and show on beside right panel
    this._refreshNotes();
  }
  //create method handlers for store behavior's or method of an object
  //and that return a object that consist of key and value that is CRUD Operations

  _refreshNotes() {
    //get all notes first
    const notes = NotesAPI.getAllNotes();
    // fill empty array with notes in constructor method
    // SET NOTES:
    this.notes = notes;
    // for show note list in right panel
    this.view.updateNoteList(notes);
    // for show title and body  notes preview
    this.view.updateNotePreviewVisibility(notes.length > 0);
    //SET ACTIVE NOTE:
    // recognize which is note that's active
    this.activeNote = notes[0];
    this.view.updateActiveNote(notes[0]);
    //
  }

  _handlers() {
    return {
      onNoteAdd: () => {
        console.log("Note has been added");
      },
      onNoteEdit: (newTitle, newBody) => {
        console.log(newTitle, newBody);
      },

      onNoteSelect: (noteId) => {
        //when user select note=>1.add css class modifier to it,title and body in left side shall be update
        //view.updateActiveNote(note)

        console.log("note id", noteId);

        // FIND note id with FIND METHOD

        const selectedNote = this.notes.find((n) => n.id == noteId);
        this.activeNote = selectedNote;
        this.view.updateActiveNote(selectedNote);
      },
      onNoteDelete: (noteId) => {
        console.log("note id for delete", noteId);
      },
    };
  }
}

const view = new NotesView(app, {});
