
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
    if (text === 'quit') {
      quit();
    }
    else if(text === 'exit'){
      quit()
    }
    else if(text === 'help'){
      help()
    }else if(res === 'list'){
        list()
    }else if(res === 'add'){
        array.shift()
        let x = array.join(" ");
        add(x)
    }else if(res === 'remove'){
        array.shift()
        let x = array.join(" ");
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

  function help(){
    console.log('list of commands:\n' + 'hello\n' + 'quit\n' + 'exit\n' + 'help\n' + 'add\n' + 'list\n' + 'remove\n' + 'edit')
  }
  const tasks = [
    { name: "Do laundry", done: false },
    { name: "Buy groceries", done: false },
    { name: "Take out the trash", done: true}
  ];

  function list() {
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      let doneMarker = "[ ]";
      if (task.done) {
        doneMarker = "[✓]";
      }
      console.log(`${doneMarker} ${task.name}`);
    }
  }
  function add(name, done) {
    tasks.push({ name, done});
  }
  
  

  // The following line starts the application
  startApp("Jad Sarout")