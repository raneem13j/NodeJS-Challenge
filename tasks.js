var fs = require('fs');
// Get the file name from the command-line arguments
const fileName = process.argv[2] || 'database.json';

var fileContents
// Read the file contents
if (fs.existsSync(fileName)) {
  fileContents = fs.readFileSync(fileName, 'utf8');
} else {
  fs.writeFileSync(fileName, "[]")
  fileContents = fs.readFileSync(fileName, 'utf8');
}
// Parse the file contents as JSON
const tasks = JSON.parse(fileContents);


const { title } = require('process');
const { finished } = require('stream');
const { isUndefined } = require('util');
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
 function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
/**
 * lists of tasks
 */
// const tasks = [
//   { name: "Do laundry", done: true },
//   { name: "Buy groceries", done: false },
//   { name: "Take out the trash", done: true},
//   { name: "clean your room", done:false}
// ];
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.replace("\n","");
  var array = text.split(" ")
  let res = array[0];
  if (text === 'quit') {
    quit();
  }
  else if(text === 'exit'){
    quit()
  }
  else if(text === 'help'){
    help()
  }
  else if (res === "hello"){
    array.shift()
    let x = array.join(" ");
    if(text.split(" ")[1] == undefined){
      x= ""
    }else {
      x = " " + text.split(" ")[1]
    }
    hello(x)
  }else if(res === 'list'){
    array.shift()
    let x = array.join(" ");
    list(x)
  }else if(res === 'add'){
    array.shift()
    let x = array.join(" ");
    add(x, false)
  }
  else if(res === 'remove'){
    array.shift()
    let x = array.join(" ");
    remove(x)
  }else if(res === 'edit'){
    let i = array[1]
    array.shift()
    array.shift()
    let newTitle = array.join(" ");
     edit(i, newTitle)
  }else if(res === 'check'){
    array.shift()
    let x = array.join(" ");
    checkTask(x)
  }else if(res === 'uncheck'){
    array.shift()
    let x = array.join(" ");
    uncheckTask(x)
  }
  else{
    unknownCommand(text);
  }
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * lists commands
 * 
 */
function help(){
  console.log('..........\n' + 'list of commands:\n' + 'hello\n' + 'quit\n' + 'exit\n' + 'help\n' + 'add\n' + 'list\n' + 'remove\n' + 'edit\n' + 'check\n' + 'uncheck\n' + '..........')
}
/**
 * says hello and hello x
 * 
 * @param {string} x 
 */
function hello(x){
  console.log('hello' + x + "!")
}
/**
 * lists all tasks
 * 
 */
function list() {
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    let doneMarker = "[ ]";
    if (task.done) {
      doneMarker = "[???]";
    }
    console.log(i + 1 + ": " + `${doneMarker} ${task.name}`);
  }
}
/**
 * 
 *adds task to the list
 * 
 */
function add(name, done) {
  
  if(!name && !done){
    console.error('Error: Please provide a task to add');
  } else {
    tasks.push({ name, done });
    console.log(`'${name}' added to the list`); // print a confirmation message
    var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
  }
}

/**
 * 
 * removes tasks
 * 
 */
function remove(index) {
  // If no index is provided, remove the last element of the list
  if (index === undefined) {
   console.log(tasks.length - 1);
  }if(index > tasks.length){
    console.log("this task's number dose not exist")
  }
  else{
  // Use splice to remove the element at the specified index
  console.log(tasks.splice(index-1, 1));
  }
}
/**
 * 
 * edits the tasks name
 * 
 */
function edit(i, newTitle) {
   if(!i && !newTitle){
      console.log('Error: add the new text')
   }
   else if(i >= 0 && i < tasks.length){
     tasks[i-1].name = newTitle
   }
} 
/**
 * 
 * check the tasks
 * 
 */
function checkTask(index) {
  if(!index){
    console.error('Error: no task index provided')
  }else{
    tasks[index-1].done = true;
    var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
 }
  
}
/**
 * 
 * uncheck the tasks
 * 
 */
function uncheckTask(index) {
  if(!index){
    console.error('Error: no task index provided')
  }else{
  tasks[index-1].done = false;
  var data = JSON.stringify(tasks, null, 2);
    fs.writeFileSync(fileName, data, finished);
}
}
// The following line starts the application
startApp("Raneem Aljamal")