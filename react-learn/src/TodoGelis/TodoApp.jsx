// untuk logic action dan parent passing props

import { useImmerReducer } from "use-immer";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDone from "./TodoDone";

let initialTodo = [];

function todoReducer(todos, action) {
    if (action.type === "ADD_TODO") {
        todos.push({
            id: Date.now(),
            text: action.text,
            date: action.date,
            done: false
        })
    } else if (action.type === "TOGGLE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos[index].done = !todos[index].done;
    } else if (action.type === "DELETE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos.splice(index, 1);
    }
}

export default function TodoApp() {
    const [todos, dispatch] = useImmerReducer(todoReducer, initialTodo);

    function handleAdd(text, date) {
        dispatch({
            type: "ADD_TODO",
            text: text,
            date: date
        })
    }

    function handleToggle(todo) {
        dispatch({
            type:"TOGGLE_TODO",
            id: todo.id
        })
    }

    function handleDelete(todo) {
        dispatch({
            type: "DELETE_TODO",
            id: todo.id
        })
    }

    return (
        <main>
            <Header />
            <TodoForm onAdd={handleAdd} />
            <TodoList todos={todos.filter(todo => !todo.done)} onToggle={handleToggle} onDelete={handleDelete}/>
            <TodoDone todos={todos.filter(todo => todo.done)} onToggle={handleToggle} onDelete={handleDelete}/>
        </main>
    )
}