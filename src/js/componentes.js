import { Todo } from '../classes'
import { todoList } from '../index.js';

// referencias en el html
const divTodoList = document.body.querySelector('.todo-list');
const txtInput = document.body.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTdo = `<li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
    <div class="view">
    <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTdo;
    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
}

// Eventos
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
        console.log(todoList.todos);
    }
});


divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    console.log(todoElemento);

    if (nombreElemento.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    if (nombreElemento.includes('button')) {
        todoList.eliminarTodo(todoId)
        divTodoList.removeChild(todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletado();

    // for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    //     const elemento = divTodoList.children[i];
    //     if (elemento.classList.contains('completed')) {
    //         divTodoList.removeChild(elemento);
    //     }
    // }

    for (let item of divTodoList.querySelectorAll('.completed')) {
        divTodoList.removeChild(item);
    }

})

ulFiltros.addEventListener('click', (event) => {
    // console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) {
        console.log('sin Filtro');
        return;
    }

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    // console.log(event.target);
    event.target.classList.add('selected');

    for (const elemento of divTodoList.children) {
        // console.log(elemento);
        elemento.classList.remove('hidden');
        const completados = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Pendientes':
                if (completados) {
                    elemento.classList.add('hidden');
                }
                break
            case 'Completados':
                if (!completados) {
                    elemento.classList.add('hidden');
                }
                break
        }

    }

});