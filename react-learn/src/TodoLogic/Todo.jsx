export default function Todo({text, isComplete, isDeleted = false}) {
    if (isDeleted) {
        return null
    } else {
        return (
        <li>
            {text} {isComplete ? '✅' : '❌'}
        </li>
        )
    }
}