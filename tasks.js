
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
  console.log('hello\n' + 'quit\n' + 'exit\n' + 'help')
}

/**
 * says hello and hello x
 * 
 * @param {string} x 
 */
function hello(x){
  console.log('hello' + x + "!")
}

var tasks = ["Task 1: Buy groceries", "Task 2: Clean the house", "Task 3: Finish project report"];

function list() {
console.log("Task List:");
for (var i = 0; i < tasks.length; i++) {
console.log(i + 1 + ": " + tasks[i]);
}
}

// The following line starts the application
startApp("Raneem Aljamal")