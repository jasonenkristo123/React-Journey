import Todo from "./Todo";

export default function TodoUi() {
    return (
        <ul>
            <Todo text="Learn HTML" isComplete={true}/>
            <Todo text="Learn CSS" isComplete={true}/>
            <Todo text="Learn JS" isComplete={true}/>
            <Todo text="Learn REACT" isComplete={false}/>
        </ul>
    )
}