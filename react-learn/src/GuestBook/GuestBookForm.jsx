export default function GuestBookForm({ref, message, setMessage, handleSubmit}) {
    return (
        <>
            <label htmlFor="message">Message</label> <br/>
            <textarea ref={ref} name="message" value={message} onChange={(e) => setMessage(e.target.value)}/> <br/>   
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}