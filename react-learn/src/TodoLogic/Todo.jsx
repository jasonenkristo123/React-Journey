export default function Todo({text, isComplete}) {
    if (isComplete) {
        return (
            <li>
                <del>{text}</del>
            </li>
        )
    } else {
        return (
            <li>
                {text}
            </li>
        )
    }
}