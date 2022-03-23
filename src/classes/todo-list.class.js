export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos=this.todos.filter(elemento=>elemento.id!=id);
        
        // console.log(elementoBorrar);
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletado() {

    }

}