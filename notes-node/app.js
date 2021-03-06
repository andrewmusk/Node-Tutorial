
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	};

const argv = yargs
.command('add','Add a new note',{
	title : titleOptions,
	body : {
		descirbe: 'Contents of the note',
		demand: true,
		alias: 'b'
	}
})
.command('list','List All notes')
.command('read','Read a note', {
	title: titleOptions
})
.command('remove','Remove a note', {
	title: titleOptions
})
.help()
.argv;
var command = argv._[0];


if(command == 'add') 
{
 var note = notes.addNote(argv.title, argv.body);
 if(note)
 {
 	console.log("Note created");
 	notes.logNote(note);
 } else {
 	console.log("Note title taken");
 }
} 
else if (command == 'list') 
{
 var allNotes = notes.getAll();
 console.log(`Printing ${allNotes.length} note(s).`);
 allNotes.forEach((note) => notes.logNote(note));
} 
else if (command == "read") 
{
 var note = notes.getNote(argv.title);
 if(note)
 {
 	console.log("Note found");
 	notes.logNote(note);
 } else {
 	console.log("Note not found");
 }
}
 else if (command == "remove")
{
 var result = notes.removeNote(argv.title);
 var message = result ? 'Note was removed' : 'Note was not found';
 console.log(message);
}
else
{
 console.log("Command Unknown");
}

