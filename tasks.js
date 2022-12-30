var fs = require('fs');
const { title } = require('process');
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
  array.shift()
  let x = array.join(" ");
  if (text === 'quit') {
    quit();
  }
  else if(text === 'exit'){
    quit()
  }
  else if(text === 'help'){
    help()
  }
  else if (res == "hello"){
    if(text.split(" ")[1] == undefined){
      x= ""
    }else {
      x = " " + text.split(" ")[1]
    }
    hello(x)
  }else if(res === 'list'){
    list(x)
  }else if(res === 'add'){
    add(x)
  }
  else if(res === 'remove'){
    remove(x)
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
  console.log('hello\n' + 'quit\n' + 'exit\n' + 'help\n' + 'add\n' + 'list\n' + 'remove')
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
// var tasks = ["Buy groceries", "Clean the house", "Finish project report"];

function list() {
console.log("Task List:");
for (var i = 0; i < tasks.length; i++) {
console.log(i + 1 + ": " + tasks[i]);
}
}


const tasks = []; // create an empty array to store the tasks
/**
 * 
 *adds task to the list
 * 
 */
function add(task) {
  if (!task) { // if no task is provided
    console.error("Error: Please provide a task to add"); // print an error message
  } else {
    tasks.push(task); // add the task to the array
    console.log(`'${task}' added to the list`); // print a confirmation message
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
  }
  else{
console.log(tasks.splice(index-1, 1));
  }
  // Use splice to remove the element at the specified index
  
}



// The following line starts the application
startApp("Raneem Aljamal")