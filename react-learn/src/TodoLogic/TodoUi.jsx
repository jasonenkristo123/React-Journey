import Todo from "./Todo";

export default function TodoUi() {
    const data = [
        {
            id: 0,
            text: "Learn HTML",
            isComplete: true,
            isDeleted: false
        },
        {
            id: 1,
            text: "Learn CSS",
            isComplete: true,
            isDeleted: false
        },
        {
            id: 2,
            text: "Learn JS",
            isComplete: true,
            isDeleted: false
        },
        {
            id: 3,
            text: "Learn REACT",
            isComplete: false,
            isDeleted: false
        }
    ]

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}