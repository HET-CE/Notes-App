// const { require } = require("yargs")
const chalk = require('chalk');
const fs = require('fs');
const { title } = require('process');

const addNote = (title, body) => {
    const notes = loadnotes();

    // const duplicateNotes = notes.filter((note) => { return note.title === title })
    const duplicateNote = notes.find((note) => { return note.title === title })

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        // saveNotes(notes);
        fs.writeFileSync('notes.json', JSON.stringify(notes));
        console.log(chalk.green.inverse('added'));
    }
    else {
        console.log(chalk.red.inverse('title already taken'));
    }
}

// const saveNotes = (notes) => {
//     const dataJSON = JSON.stringify(notes);
//     fs.writeFileSync('notes.json', dataJSON);
// }

const loadnotes = () => {
    try {
        return (JSON.parse(fs.readFileSync('notes.json').toString()));
    }
    catch (e) {
        return [];
    }
}


const removeNote = (title) =>{
    const notes = loadnotes();

    const newNotes = notes.filter((note) => {
        return(note.title !== title)
    })
    if(notes.length == newNotes.length){
        console.log(chalk.red.inverse('Note not Removed'));
    }
    else{
        console.log(chalk.green.inverse('Note Removed'));
    }
    console.log(notes);
    console.log(newNotes);
    fs.writeFileSync('notes.json', JSON.stringify(newNotes));
}

const listNotes = () => {
    const notes = loadnotes();

    console.log(chalk.inverse("Your notes"))
    notes.forEach((note) => {
        console.log(chalk.green.inverse(note.title) + ' ' + chalk.blue.inverse(note.body))
    });
}

const readNote = (title) => {
    const notes = loadnotes();

    const note = notes.find((note) => {return note.title === title})
    if(note)
    console.log("Title :" + chalk.green(note.title) + "\nBody :"+ chalk.green(note.body));
    else
    console.log(chalk.red("not found"))
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}