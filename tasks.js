const fs = require('fs');
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

let counter = parseFloat(fs.readFileSync('data/counter.txt')) || 0

// //.convert number. to base36-
const toBase36 = number => parseInt(number).toString(36)

// // convert number from base36-
// const fromBase36 = number => parseInt(number, 36)

// save: save current.list-
// function save(data={}, file='data/data.json') {

// }

// load: load. from.JSON-
function load(file='data/data.json') {
const text = fs.readFileSync(file)
return JSON.parse(
text.length
? text
:'{}'
)
}
const keywords = [
  'all'
]
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
  if (text === 'exit') {
    quit();
  }
  else if(text === 'quit'){
    quit();
  }
  else if(text === 'help'){
    help();
  }
  else if(text === 'list'){
    list();
  }
  else if(res === 'add'){
    add(x);
  }
  else if (res == "hello"){
    if(text.split(" ")[1] == undefined){
      x= ""
    }else {
      x = " " + text.split(" ")[1]
    }
    hello(x)
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
function hello(x){
  console.log('hello' + x + "!")
}

/**lists commands
 * 
 * @returns {Void}
 */

function help(){
  console.log('hello: says hello!\n' + "hello x: says hello x!\n" + 'quit: Exits the application\n' + 'exit: Exits the application\n' + 'unknownCommand: This function is supposed to run when all other commands have failed\n' + 'node tasks.js: Starts tha application\n' + 'help: lists the commands')
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
 * lists all tasks
 * 
 * @param {string} term 
 * 
 */
  function list (term='all') {
  let data = load()
  let items = []
  if (arguments.length > 0) {
    if (keywords.includes(arguments[0])) {
      switch (arguments[0]) {
        case 'all':add 
          items = Object.entries(data)
        break
        case 'tagged':
          items = Object.entries(data)
            .filter(item => item[1].tags.includes(arguments[1]))
        break
        case 'checked':
          items = Object.entries(data)
            .filter(item => item[1].status)
        break
        case 'unchecked':
          items = Object.entries(data)
            .filter(item => !item[1].status)
        break
      }
       }else {
      items = Object.entries(data)
        .filter(item => item[1].tags.includes(term))
    }
  } else {
    items = Object.entries(data)
  }
  console.log(data.title)
  
 }



/** 
 * adds tasks
 * 
 * @param  {string} title 
 * @returns 
 */
function add(title){
  let data = load()
  data = {
    title: title,
    tags: [],
    status: false
  }
  counter++
  fs.writeFileSync('data/counter.txt', counter.toString())
  file='data/data.json'
  return fs.writeFileSync(file, JSON.stringify(data))
}

// The following line starts the application
startApp("Raneem Aljamal")
