import {createTodo, createProject, addToProject, showProject} from './todos.js'

// declacre Variables
const contentDiv = document.querySelector('#content');

// Testing
let testtodo = createTodo('test', 'this is a test todo', 'december', 1);
let testtodo2 = createTodo('Second test', 'this is the second testtodo', '1. January 2024', 2);


let testproject = createProject('Testproject');

addToProject(testtodo, testproject);
addToProject(testtodo2, testproject);

let testproject2 = createProject('Todos today');
addToProject(testtodo, testproject2);
addToProject(testtodo, testproject2);
addToProject(testtodo2, testproject2);

showProject(testproject, contentDiv);
showProject(testproject2, contentDiv);


