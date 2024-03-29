export default class NotesView {
  // when make instance from a class the constructor method is revoked(call) root is argument that same is app and we add this property to class NotesView

  constructor(root,handlers) {
    // add property root to class NotesView
      this.root = root;
    const { onNoteAdd, onNoteEdit, onNoteSelect,onNoteDelete } = handlers;
    // attach methods to class NotesView
    this.onNoteSelect = onNoteSelect;
      this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    
    // the root behaves is similar to an elements HTML that we select it on DOM
      
    // so root is element and we add to innerHTML property belong to root(app) that div is consider some element for make view trough dynamic by js
    this.root.innerHTML = `
<div class="notes__sidebar">
<div class="notes__logo">Notes App
    <i class="fas fa-code"></i>
</div>

<div class="notes__list">

</div>
<button class="notes__add">Add Note</button>
</div>
<div class="notes__preview">
    <input type="text" class="notes__title" placeholder="note title...">
    <textarea  name="" class="notes__body"  >Take note</textarea>
</div>
    `;
      
    //   select an elements that class contain ".notes-add" and ".notes__title" and  ".notes__body" in root(app) element
      const addNoteBtn=this.root.querySelector(".notes__add");
      const inputTitle = this.root.querySelector(".notes__title");
      const inputBody = this.root.querySelector(".notes__body");

// eventListener method for button when user click that
      addNoteBtn.addEventListener("click", () => {
          //   run onNoteAdd method
          this.onNoteAdd();
          
          
      });
    //   attach eventlistener for input and textarea
      //there are an  two arrays so we can use forEach method to iterate over an members of array
    [inputTitle, inputBody].forEach((inputFelid) => {
      inputFelid.addEventListener("blur", () => {
        //   check inputTitle and inputBody
        //   remove whitecapping from start and end of strings
        const newTitle = inputTitle.value.trim();
        const newBody = inputBody.value.trim();
        this.onNoteEdit(newTitle, newBody);
              
      })
    });
          // hides notes preview in first loading

    this.updateNotePreviewVisibility(false);

  }



  _createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 50;
    return `
       <div class="notes__list-item " data-note-Id="${id}">
       <div class="notes__item-header">
          <div class="notes__small-title">${title}</div>
        <span class="notes__list-trash" data-note-Id="${id}">
        <i class="fa-regular fa-trash-can"></i></span>
       </div>
        <div class="notes__small-body">
        ${body.substr(0, MAX_BODY_LENGTH)}
        ${body.length  > MAX_BODY_LENGTH ?"...":""}
        </div>
        <div class="notes__small-updated"> 
        ${new Date(updated).toLocaleString("en", { dateStyle: "full", timeStyle: "short" }) }
        
        </div>

    </div>
    
    `
    
  }

  updateNoteList(notes) {
    // select notes__list from root(Dom)
    const notesContainer = this.root.querySelector('.notes__list');
    // empty note list
    notesContainer.innerHTML = "";
    // define empty string
    let notesList = "";
    // iterate over notes array and create html for each note
    for (const note of notes) {
      // object destructuring for access to  input parameters 
      const { id, title, body, updated } = note;
      // passing note to creatlistitemHTML Method for create html tags
      const html = this._createListItemHTML(id, title, body, updated);
      // adding html with notesList
      notesList += html;
      
    }
    notesContainer.innerHTML = notesList;
    notesContainer.querySelectorAll('.notes__list-item').forEach((noteItem) => {
      // set click event on each noteItem
      noteItem.addEventListener("click", () => {
        
        // get id of noteItem
        this.onNoteSelect(noteItem.dataset.noteId);

      })
    })
    // select an all note list trash and loop over them
    notesContainer.querySelectorAll('.notes__list-trash').forEach((noteItem) => {
      noteItem.addEventListener('click', (e) => {
        //stop propagation
        e.stopPropagation();
        this.onNoteDelete(noteItem.dataset.noteId);
        
       
        
      });
    
    })
  };

  updateActiveNote(note) {
    this.root.querySelector(".notes__title").value = note.title;
    this.root.querySelector(".notes__body").value = note.body;
    // add selected class css to note selected:
    // remove all note selected before that have selected class css modifier
    this.root.querySelectorAll(".notes__list-item").forEach((item) => item.classList.remove("notes__list-item--selected"));
    this.root.querySelector(`.notes__list-item[data-note-id="${note.id}"]`).classList.add("notes__list-item--selected");

  }
// this method clear all notes when loading application
  updateNotePreviewVisibility(visible) {
    this.root.querySelector(".notes__preview").style.visibility=visible ? "visible":"hidden";
    
  }
}
