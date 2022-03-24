import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


const tarea = new Todo('Iniciar Curso JS');
export const todoList = new TodoList();
console.log(todoList.todos);
// todoList.todos.forEach(crearTodoHtml);
todoList.todos.forEach(todo => crearTodoHtml(todo) );