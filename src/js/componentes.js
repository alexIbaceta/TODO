// referencias en el html
const divTodoList = document.body.querySelector('.todo-list');
const txtInput = document.body.querySelector('.new-todo');


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
    console.log(event);
});