import React, { useState } from 'react';
import AddNote from './components/AddNote';
import ViewNotes from './components/ViewNotes';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [searchQuery, setSearchQuery] = useState('');

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  return (
    <div className="app-container">
      <div className="container mt-5">
        <div className="card shadow p-4 app-card">
          <h1 className="text-center app-title mb-4">Notes App</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <AddNote notes={notes} saveNotesToLocalStorage={saveNotesToLocalStorage} />
          <ViewNotes
            notes={notes.filter(note =>
              note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              note.content.toLowerCase().includes(searchQuery.toLowerCase())
            )}
            saveNotesToLocalStorage={saveNotesToLocalStorage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
