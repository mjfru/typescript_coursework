//? TS already knows about the document and its Type!
//? But...what's the type of 'btn'?
//? An HTMLButtonElement...is that the return type? No! It's a union type with null.
//? Why null? It might not find the element; this is happening beforehand and has no idea if it exists yet.

//* For local storage handling (an array with objects, a task and a status):
interface Todo {
    text: string;
    completed: boolean;
}

//! Non-null assertion operator
//* If we put an exclamation mark after .getElementById("idName")!
//* This tells TS to stop worrying, it's guaranteed not to be null and is indeed an HTMLElement type.
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist");

//? On-load Logic:
const todos: Todo[] = readTodos();
todos.forEach(createTodo);



function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

//? Added to help with storing checkbox status:
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }
    createTodo(newTodo);
    todos.push(newTodo);

    saveTodos();
    input.value = "";
})

function createTodo(todo: Todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked;
        saveTodos();
    })
    newLI.append(todo.text);
    newLI.append(checkbox);
    list?.append(newLI);
}


//* If button exists, carry on with this...
//* If we use the non-null assertion operator, we don't need the '?' after btn.
// btn?.addEventListener("click", function() {
//     alert(input.value);
//     input.value = "";
// })


//? tsc --watch