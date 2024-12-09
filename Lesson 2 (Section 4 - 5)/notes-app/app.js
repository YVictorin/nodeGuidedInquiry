import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import notes from './notes.js';


// Argument Parsing with Yargs latest(17.7.2) version

yargs(hideBin(process.argv))
    .command({                                                  //create remove command
        command: 'remove',
        describe: 'Remove note',
        handler: function () {
            console.log('Removing note...');
        }
    })
    .command({                                                  //create add command
        command: 'add',
        describe: 'Add a new note',
        builder: {                                              //setup for a body option for the add command
            body: {
                describe: 'This is the body of the note',
                demandOption: true,
                type: 'string',
            }, title: {                                         //setup for a title option for the add command
                describe: 'Note title',
                demandOption: true,
                type: 'string',
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body);
            console.log(chalk.red.inverse(argv.title,'\n', argv.body));
        }
    })
    .command({                                                      //create list command
        command: 'list',
        describe: 'List a new note',
        handler: function () {
            console.log('Here is a list of all your notes...')
        }
    })
    .command({                                                       //create read command
        command: 'read',
        describe: 'Read a note',
        handler: function () {
            console.log('You are reading this note...');
        }
    })
    .command({                                                      //create edit command
        command: 'edit',
        describe: 'Edit a new note',
        handler: function (argv) {
            notes.editNote(argv.title, argv.body);
        }
    })
    .parse();
