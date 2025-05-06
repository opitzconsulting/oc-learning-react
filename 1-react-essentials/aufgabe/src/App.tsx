import { useState } from 'react';
import './App.scss';
import { loadBooks } from './dummy-data/books.ts';

function App() {
  const [selectedBookIds, setSelectedBookIds] = useState<
    Record<string, boolean>
  >({});
  const allAvailableBooks = loadBooks();

  const totalSelected = Object.values(selectedBookIds).filter(Boolean).length;

  return (
    <>
      <h2>Books-To-Read</h2>
      <div className="card">
        {totalSelected === 0 ? (
          <p>Du hast noch keine Pläne...</p>
        ) : (
          <div>
            Du willst die folgenden Bücher lesen:
            <ul>
              {allAvailableBooks
                .filter((e) => selectedBookIds[e.id])
                .map((e) => (
                  <ul key={e.id}>{e.title}</ul>
                ))}
            </ul>
          </div>
        )}
      </div>

      <div className="books-list">
        {allAvailableBooks.map((e) => (
          <div className="book card">
            <span key={e.id} className="book-title">
              {e.title} -
            </span>
            {e.author} -<span className="book-genre">{e.genre}</span>
            <button
              onClick={() => {
                const newState = {
                  ...selectedBookIds,
                };
                newState[e.id] = !newState[e.id];

                setSelectedBookIds(newState);
              }}
              className="book-button"
              disabled={!selectedBookIds[e.id] && totalSelected >= 3}
            >
              {selectedBookIds[e.id] ? 'Entfernen' : 'Lesen!'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
