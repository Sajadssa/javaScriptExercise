export default class NotesView {
  // when make instance from a class the constructor method is revoked(call) root is argument that same is app and we add this property to class NotesView

  constructor(root,handlers) {
    // add property root to class NotesView
      this.root = root;
      const { onNoteAdd,onNoteEdit,onSelect,onDelete } = handlers;
      this.onNoteAdd = onNoteAdd;
      this.onNoteEdit = onNoteEdit;
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
    <textarea  name="" class="notes__body" id="" >Take note</textarea>
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
      })
          

  }
  _creatListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 50;
    return `
       <div class="notes__list-item " data-node-id=${id}>
        <div class="notes__small-title">${title}</div>
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
}
