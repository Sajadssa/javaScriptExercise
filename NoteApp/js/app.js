//define notes saved before in local storage
const notes = [
    {
        id: 1,
        title: "first title",
        body: "the first note",
        updated: "2023-03-01T15:26:12.566Z"

    },
    {
        id: 2,
        title: "second title",
        body: "the second note",
        updated: "2023-03-02T15:16:12.566Z"

    },
    {
        id: 3,
        title: "third title",
        body: "the third note",
        updated: "2023-03-03T13:42:56.541Z"

    },
];
//define class for crud:create,read(get),update,delete
class NotesAPI {
    static getAllNotes() {
        // JSON.parse(localStorage.getItem("notes-app"))
        const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
        //    const savedNotes = JSON.parse(localStorage.getItem("note-app")) || [];
        return savedNotes.sort((a, b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1
        });
    }
    //saveNote
    static saveNotes(noteToSave) {
        // take an notes from local storage
        const notes = NotesAPI.getAllNotes();
        // check note in local storage by find method
        const existNote = notes.find((n) => n.id === noteToSave.id);
        if (existNote) {
            // if note is exist we update there below property
            existNote.title = noteToSave.title;
            existNote.updated = new Date().toISOString();
            existNote.body = noteToSave.body;

        }
        else {
            // add id property id to noteToSave
            // generate specific number
            noteToSave.id = new Date().getTime();
            // add property updated to 
            // date format date that sending to backend
            noteToSave.updated = new Date().toISOString();
            notes.push(noteToSave);

        }
        // save new note and update existing note in local storage
        localStorage.setItem("notes-app", JSON.stringify(notes));


    }
    // delete note
    static deleteNote(id) {
        const notes = NotesAPI.getAllNotes();
        const filterNote = notes.filter(n => n.id !== id);
        
        // update local storage
        localStorage.setItem('notes-app', JSON.stringify(filterNote));
    }

}
// console.log(NotesAPI.saveNotes({
//     id: 1,
//     title: "first title-edited",
//     body: "the first note-edited",
//     updated: "2023-03-03T15:26:12.566Z"
// }
// ));
console.log(NotesAPI.getAllNotes());
console.log(NotesAPI.deleteNote(3));

