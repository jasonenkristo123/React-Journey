export default function GuestBookName({ref, name, setName, handleKeyDown}) {
    return (
        <>
            <label htmlFor="name">Name</label> <br/>
            <input name="name" onKeyDown={handleKeyDown} ref={ref} type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
        </>
    )
}