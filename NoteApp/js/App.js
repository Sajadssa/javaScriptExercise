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
    this._setNotes(notes);
   //SET ACTIVE NOTE:
    if(notes.length>0)
    this._setActiveNote(notes[0]);
  }

  _setNotes(notes) {
    // SET NOTES:
    this.notes = notes;
    // for show note list in right panel
    this.view.updateNoteList(notes);
    // for show title and body  notes preview
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }

  _setActiveNote(note) {
    
    // recognize which is note that's active
    this.activeNote = note=note;
    this.view.updateActiveNote(note);
    //
  }

  _handlers() {
    return {
      onNoteAdd: () => {
        console.log("Note has been added");
        const newNote = {
          title: "New Note",
          body: "this is new.......",
        };
        // we taken note and shall be save
        NotesAPI.saveNotes(newNote);
        this._refreshNotes();
      },
      onNoteEdit: (newTitle, newBody) => {
        // console.log(newTitle, newBody);
        NotesAPI.saveNotes({
          id: this.activeNote.id,
          title: newTitle,
          body: newBody,
        });
        this._refreshNotes();
      },

      onNoteSelect: (noteId) => {
        //when user select note=>1.add css class modifier to it,title and body in left side shall be update
        //view.updateActiveNote(note)

        console.log("note id", noteId);

        // FIND note id with FIND METHOD

        const selectedNote = this.notes.find((n) => n.id == noteId);
        // this.activeNote = selectedNote;
        // this.view.updateActiveNote(selectedNote);
        this._setActiveNote(selectedNote);
      },
      onNoteDelete: (noteId) => {
         console.log("note id for delete", noteId);
        NotesAPI.deleteNote(noteId);
        this._refreshNotes();
      },
    };
  }
}

const view = new NotesView(app, {});
