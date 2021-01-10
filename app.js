const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');
// const validator = require('validator');


// yargs.version('1.1.0');
yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
        body : {
            describe: 'body of a note',
            demandOption: true,
            tye: 'string'
        },
        title : {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
     },
     handler: function(argv){
        //  console.log('Title : ' + argv.title + '\nBody : ' + argv.body);
        notes.addNote(argv.title, argv.body);
     }
    //  handler(argv){
    //     //  console.log('Title : ' + argv.title + '\nBody : ' + argv.body);
    //     notes.addNote(argv.title, argv.body);
    //  }
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title : {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
    // handler(argv){
    //     notes.removeNote(argv.title);
    // }
})

yargs.command({
    command: 'read',
    describe: 'reading a command',
    builder: {
        title : {
            describe: 'title of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.readNote(argv.title)
    }
    // handler(){
    //     console.log('read');
    // }
})

yargs.command({
    command: 'list',
    describe: 'listing a command',
    handler: function(argv){
        notes.listNotes(argv.title);
    }
    // handler(){
    //     console.log('list')
    // }
})

yargs.parse();
// console.log(yargs.argv);




// const notes = getNotes();
// console.log(notes);

// console.log(process.argv)
// console.log(chalk.red.inverse.bold('Error!'))

// console.log(validator.isEmail('example@example.com'))
// console.log(validator.isURL('https://hi.com'))

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);



// const fs = require('fs');
// // fs.writeFileSync('notes.txt','Hi, I am working in amazon');
// fs.appendFileSync('notes.txt',' And i land in my dream job');