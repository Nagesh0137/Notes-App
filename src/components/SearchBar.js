import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="mb-4 col-12 col-md-4">
            <div className='border d-flex align-items-center form-control shadow-sm'>
                <i class="fa-solid fa-magnifying-glass text-secondary"></i>
                <input
                    type="text"
                    className=" search-bar border-0"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBar;
