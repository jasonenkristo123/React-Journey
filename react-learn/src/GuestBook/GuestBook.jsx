import { useRef, useState } from "react";
import GuestBookName from "./GuestBookName";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameInput = useRef(null);
    const messageInput = useRef(null);

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();

            messageInput.current.focus();
        }
    };

    function handleSubmit(e) {
        e.preventDefault();

        setName("");
        setMessage("");

        nameInput.current.focus();

        alert(`Name : ${name}, Message : ${message}`);
    }

    return(
        <>
            <h1>Guest Book</h1>
            <GuestBookName ref={nameInput} name={name} setName={setName} handleKeyDown={handleKeyDown}/>
            <GuestBookForm ref={messageInput} message={message} setMessage={setMessage} handleSubmit={handleSubmit}/>
        </>
    )
}