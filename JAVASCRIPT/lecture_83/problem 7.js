// The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
function saveNoteToLocalStorage(note){
    let notes=JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes",JSON.stringify(notes));
    return notes;
}
const newNote = {
  name:"tuti",
  age:20,
  stream:"cse"
};

let updateNote=saveNoteToLocalStorage(newNote);
console.log(updateNote);