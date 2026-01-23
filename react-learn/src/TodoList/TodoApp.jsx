import { useImmerReducer } from "use-immer";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


let initialTodo = [
    {id: Date.now(), text: "Learn React", done: false}
];

function todoReducer(todos, action) {
    if (action.type === "ADD_TODO") {
        todos.push({
            id: Date.now(),
            text: action.text,
            done: false
        })
    } else if (action.type === "CHANGE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos[index] = {...action};
    } else if (action.type === "DELETE_TODO") {
        const index = todos.findIndex(todo => todo.id === action.id);
        todos.splice(index, 1);
    }
}

export function TodoApp() {
    const [todos, dispatch] = useImmerReducer(todoReducer, initialTodo);

    function handleAdd(text) {
        dispatch({
            type: "ADD_TODO",
            text: text
        })
    } 

    function handleChange(todo) {
        dispatch({
            ...todo,
            type:"CHANGE_TODO"
        })
    }

    function handleDelete(todo) {
        dispatch({
            id: todo.id,
            type: "DELETE_TODO"
        })
    }

    return (
        <div>
            <Header/>
            <TodoForm onAddNote={handleAdd}/>
            <TodoList todos={todos} onChange={handleChange} onDelete={handleDelete}/>
        </div>
    )

}