import './App.scss'
import {loadBooks} from "./dummy-data/books.ts";

function App() {
    const allAvailableBooks = loadBooks();

    return (
        <>
            <h2>Books-To-Read</h2>
            {/* TODO: Display a box with all selected books here */}

            <div className="books-list">
                {/* TODO: Display a list of all available books here */}
            </div>
        </>
    )
}

export default App
