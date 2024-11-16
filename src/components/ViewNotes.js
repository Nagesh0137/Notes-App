import React, { useState } from 'react';

function ViewNotes({ notes, saveNotesToLocalStorage }) {
    const [editingNote, setEditingNote] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const handleEdit = (note) => {
        setEditingNote(note.id);
        setEditTitle(note.title);
        setEditContent(note.content);
    };

    const handleSaveEdit = () => {
        const updatedNotes = notes.map(note =>
            note.id === editingNote ? { ...note, title: editTitle, content: editContent } : note
        );
        saveNotesToLocalStorage(updatedNotes);
        setEditingNote(null);
    };

    const handleDelete = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        saveNotesToLocalStorage(updatedNotes);
    };

    return (
        <div>
            <h3 className="text-secondary">Your Notes</h3>
            {notes.length === 0 && <p className="text-muted">No notes available. Add one!</p>}
            <div className="row">
                {notes.map(note => (
                    <div key={note.id} className="col-md-4 mb-4 animated-card">
                        <div className="card shadow note-card">
                            <div className="card-body">
                                {editingNote === note.id ? (
                                    <>
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                        />

                                        <textarea
                                            className="form-control mb-2"
                                            rows="3"
                                            value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}
                                        ></textarea>
                                        <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
                                            Save
                                        </button>
                                        <button className="btn btn-secondary btn-sm" onClick={() => setEditingNote(null)}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h5 className="card-title">{note.title}</h5>
                                        <hr className='m-0 p-0' />
                                        <p className="card-text">{note.content}</p>
                                        <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(note)}>
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(note.id)}>
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewNotes;
