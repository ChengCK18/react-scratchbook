import useNotes from "../services/Notes";

function App() {
    const { notes, isLoading, isError } = useNotes();

    if (isLoading) {
        return <div>Loading.^.</div>;
    }
    if (isError) {
        return <div>Woops, something went wrong</div>;
    }

    // render data
    return (
        <div>
            <ul>
                {notes.map((item) => (
                    <li>
                        {item.id}={item.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
