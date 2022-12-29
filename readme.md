# Node.js Challenge : Building command line applications

We're going to create a simple command-line application.
This application will allow to enter tasks, delete tasks, edit tasks, and list all tasks.
This is called a Create Read Update Delete, or CRUD for shot.

To control the application, we will use command line commands that we will invent and program ourselves.

For example, if our file is called "tasks.js":

```sh
> add buy bread
> add do the exercise
```

Should add two tasks, "buy bread" and "do the exercise".
To list those tasks, we'd do:

```sh
> list
1 - [ ] buy bread
2 - [ ] do the exercises
```

Then, I could do, for example:

```sh
> edit 1 buy batata
task 1 changed to "buy batata"
> list
1 - [ ] buy batattexttexttexttexta
2 - [ ] do the exercises
> check 2
task 2 is marked as checked
> list
1 - [ ] buy batata
2 - [✓] do the exercises
```

## Pre-requisites:

- Javascript Basics 01-04
- Javascript Basics 05 (Lab)
- Install [Node.js](https://nodejs.org/)

## Goals:

- Run Javascript outside the browser thanks to Node.js
- Writing a command line interface for an application
- Writing a CRUD application
- **Competencies**: 
  - <kbd>Node.js basics</kbd>
  - <kbd>capturing keyboard input in a CLI</kbd>
  - <kbd>writing a CRUD</kbd>
  - <kbd>writing and reading files</kbd>

## Step 1: Testing the software

The software provided already has a few commands built-in. Let's try them.

1. Run the file with `node tasks.js`
2. Try entering "hello", then try "quit"
3. Read the code, run the app again. Try to understand what is happening. Change a few things, get familiar with the code

## Step 2: Little steps

First, let's do some small steps to begin appropriating the code.  

Commit after **each** step.

*note*: after your change your code, you **must** restart the app, or else you won't see any change.

1. Change the name of the app from "Jad Sarout" to your own
2. commit ("changed app's name") 
3. People can quit the app by typing "quit". Allow people to quit the app by typing "exit" OR "quit"
4. commit ("exit command") 
5. Add a new command, "help", that lists all the possible commands
6. commit ("help command")
7. Document this function like the others (write a comment on top of it that explains what "help" does)
8. commit ("added jsdoc for help") 

If you haven't yet, now would be a good moment to push

## Step 3: String manipulation

Now, we're going to grow the possibilities of the app a little.

*note*: don't forget to commit after **each** step

1. Make the "hello" command able to take an argument. That is, if I write "hello x", the answer should be "hello x!". If I write "hello batata", it should tell me "hello batata!". 
  - <kbd>tip</kbd>: the function `onDataReceived` receives everything the user writes. Put a `console.log` at the top of the function and then test writing things in the running software to see how that works
  - <kbd>tip</kbd>: You're going to want to:
    - clean the text from the `endline` character `\n`, to make your life easier. Look into the string's `replace` method.
    - remove any additional space, look into the string's `trim` method.
  - split your string into words. Look into string's `split` method.  - the first word is your comman
  - if you feel things are getting complex, try doing a small example of what you're trying to achieve in isolation, in a new file or your browser's console.
2. commit ("extended hello")  
3. But, make it so if I write "hello" without anything, I still get "hello!". That is, if I write:
  - "hello world", I should get "hello world!"
  - but if I write "hello", I should *not* get a space ("hello !"). I should get "hello!"
4. commit ("handled empty state")  
5. Now that you've expanded the possibility of the "hello" function, update the text of "help" accordingly 
6. commit ("documented extended hello")  

If you haven't yet, now would be a good moment to push

## Step 4: Additional commands

We're going to add three functions: `add`, `remove`, and `list`.

*note*:Yep. Commits

1. Make a "list" command to list all tasks. It is advised to fill in some tasks in your code so you have something to see without having to enter new tasks every time you change your code. Make the list show task number on each line
2. commit ("list")  
3. Make an "add" command that allows to add a task. Store the task in a list (array). The command works as such:
  - `add x` should add a task "x" to the list
  - `add` without anything should give an error
4. commit ("add")  
5. Make a "remove" command that allows to remove the last task. The "remove" command works as such:
  - `remove` (without anything) should remove the *last* task
  - `remove 1` should remove the FIRST element of the list
  - `remove 2` should remove the SECOND element of the list
  - <kbd>tip</kbd>: look into Javascript's `splice` command
6. commit ("remove")  
7. document those new commands in the text of the "help" command
8. commit ("documented list, add, remove"). Congrats! You're close to a full CRUD app!  

If you haven't yet, now would be a good moment to push

## Step 5: Refinements

*note*: commits. Each step is a commit.

1. Make the "remove" command tell you if you enter a number that does not exist
2. commit ("better remove")  
3. Make an "edit" command that works as such:
  - `edit` without anything should give an error
  - `edit new text` should change the *last* task to "new text"
  - `edit 1 new text` should change the task 1 to "new text"
4. commit ("edit")  

If you haven't yet, now would be a good moment to push

## Step 6: Data modelling

We are going to add a done/undone (checked/unchecked) feature to our task list.  

Think of a single task. Until now, a task was, for example "get milk". It was just text. Now, we are going to want to add a "done" property, which can be `true` or `false`. How do we do that?

*note*: how about not forgetting to commit.

1. Think about how you want to model your data so each task has a `done` property
2. Change your model and test that everything you had before still works
3. Enter a few tasks in your array and make sure to have some that are done. Make this "done" property show in the list (for example, by putting a `[ ]` before each task and `[✓]` before tasks that are `done`). You will probably have to change slightly or entirely most of the functions you created previously.
4. commit ("added done property to tasks")  
5. Create a new command `check`, that works as such:
  - `check 1` should change task 1 to "done"
  - `check` should give an error
6. Create a new command `uncheck` that does the opposite of `check`
7. commit ("check/uncheck commands")  
8. Document those new commands in the "help" text
9. commit ("documented check/uncheck"). Congrats! At this state, you have a full fledged CRUD app, with just one problem...It doesn't save anything! Let's fix that  

If you haven't yet, now would be a good moment to push

## Step 7: Persistent data!

*commits*

1. Save the data to disk (you will need to use `fs`, and probably "JSON.stringify"). Have the data be saved in a file called "database.json". It should save on exit
2. Load the data from disk (also `fs`, and probably `JSON.parse`) when the software runs. You will probably need to read a bit on `try...catch`
3. commit ("load/save")  
4. Allow the save file to be configured (look into `process.argv`). That is, if I run the file as such:
  - `node tasks.js`, then the default file to load and to save to is "database.json"
  - but if I run `node tasks.js blah.json`, then the file to load and to save would be "blah.json"
  - this allows the user to have multiple lists
5. commit ("configurable save file") <kbd>🔑🔑🔑🔑🔑</kbd>

If you haven't yet, now would be a good moment to push

## Congrats!

You've come a long way, pat yourself on the back, and get some sleep.