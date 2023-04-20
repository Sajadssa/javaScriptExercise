import App from "./App.js";

// select an element named call element by id is equal app in DOM
const root = document.getElementById("app");
// for use of class NotesView we can instance from itself and we want to show dynamic html page with js so we passed app as parameter to instance view
// we passed object or method to view

// show note in updateNoteList method
// we passed object or method to view

//import class app in here

// root make page html element that is mean dom
//and app is our program that we passed root to app
// the task main.js file is that initialize our program
const app = new App(root);




// view.updateNoteList(NotesAPI.getAllNotes());
// view.updateActiveNote(NotesAPI.getAllNotes()[0]);
// console.log(NotesAPI.getAllNotes());