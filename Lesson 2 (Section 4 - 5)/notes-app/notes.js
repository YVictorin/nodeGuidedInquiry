import fs from 'fs';
import chalk from 'chalk';

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();

    //filters for duplicates
    const duplicateNotes = notes.filter((note) => note.title === title);

    //if there are no duplicates push the note to the array
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
    }

    saveNote(notes)

    console.log(chalk.blue.inverse('New note added'));
}

const saveNote = (notesArr) => {
    //converting all the notes to a string then writing them to the json file
    const dataJSON = JSON.stringify(notesArr);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    //if you can read the json file, convert it to a string, then parse and return that string
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = String(dataBuffer);
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const editNote = (title, body) => {
    let notes = loadNotes();

    //for all the notes in the json file
    for(let i = 0; i < notes.length; i++) {

        //if the json note's title is the same as the argument title change the body of the note
        if (notes[i].title === title) {
            notes[i].body = body;
            console.log(chalk.green('Note edited'));
            saveNote(notes);        //save the changes made to the json file
            return;
        } else if (notes[i].title !== title) {
            console.log(chalk.yellow('Note title does not exist, try adding the note first'));
            return;
        } else {
            console.log(chalk.red('An unexpected error occurred'));
            return;
        }
    }
}

// module.exports = getNotes; //es5


export default {              //es6
    getNotes,
    addNote,
    editNote,
};