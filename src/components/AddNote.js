import React, { useState } from 'react';

function AddNote({ notes, saveNotesToLocalStorage }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = () => {
        if (title.trim() && content.trim()) {
            const newNote = { id: Date.now(), title, content };
            const updatedNotes = [...notes, newNote];
            saveNotesToLocalStorage(updatedNotes);
            setTitle('');
            setContent('');
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div className="mb-4 add-note-container">
            <h3 className="text-secondary">Add a New Note</h3>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control mb-2 shadow-sm"
                    placeholder="Note Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="form-control mb-2 shadow-sm"
                    placeholder="Note Content"
                    rows="3"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <div className='w-100 text-center'>
                    <button className="btn btn-add-note text-white" onClick={handleAddNote}>
                        Add Note <i class="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default AddNote;
