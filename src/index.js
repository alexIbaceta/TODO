import './styles.css';
import { Todo, TodoList } from './classes';


const tarea = new Todo('Iniciar Curso JS');
const tarea2 = new Todo('Comprar Unicornio');
const todoList = new TodoList();

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);



console.log(todoList);