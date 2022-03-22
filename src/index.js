import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


const tarea = new Todo('Iniciar Curso JS');
export const todoList = new TodoList();

// tarea.completado = true;

todoList.nuevoTodo(tarea);



console.log(todoList);

crearTodoHtml(tarea);