import { useImmerReducer } from "use-immer";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDone from "./TodoDone";


let initialTodo = [
];

function todoReducer(todos, action) {
    if (action.type === "ADD_TODO") {
        todos.push({
            id: Date.now(),
            text: action.text,
            date: action.date,
            done: false
        })
    } else if (action.type === "DELETE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos.splice(index, 1);
    } else if (action.type === "TOGGLE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos[index].done = !todos[index].done;
    }
}

export function TodoApp() {
    const [todos, dispatch] = useImmerReducer(todoReducer, initialTodo);

    function handleAdd(text, date) {
        dispatch({
            type: "ADD_TODO",
            text: text,
            date: date
        })
    } 

    

    function handleDelete(todo) {
        dispatch({
            id: todo.id,
            type: "DELETE_TODO"
        })
    }

    function handleToggle(todo) {
        dispatch({
            type: "TOGGLE_TODO",
            id: todo.id
        })
    }

    return (
        <div>
            <Header/>
            <TodoForm onAddNote={handleAdd}/>
            <TodoList
            todos={todos.filter(todo => !todo.done)} onToggle={handleToggle} onDelete={handleDelete}/>
            <TodoDone todos={todos.filter(todo => todo.done)} onToggle={handleToggle} onDelete={handleDelete} />
        </div>
    )
}