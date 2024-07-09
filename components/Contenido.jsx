import React, { useState } from 'react';
import Posts from './Posts';

export default function Content({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts || []);

  const handleFilter = (filterType) => {
    let filtered = [...posts]; // Copia del arreglo original de posts

    if (filterType === 'Relevant') {
      filtered.sort((a, b) => b.relevance - a.relevance);
    } else if (filterType === 'Latest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filterType === 'Top') {
      filtered.sort((a, b) => b.likes - a.likes);
    }

    setFilteredPosts(filtered);
  };

  return (
    <main className="flex flex-col">
      <div>
        <header className="flex flex-row">
          <button className="ml-2 text-xl" onClick={() => handleFilter('Relevant')}>
            Relevant
          </button>
          <button className="ml-4 text-xl" onClick={() => handleFilter('Latest')}>
            Latest
          </button>
          <button className="ml-4 text-xl" onClick={() => handleFilter('Top')}>
            Top
          </button>
        </header>
        <Posts posts={filteredPosts} /> {/* Renderiza los posts filtrados */}
      </div>
    </main>
  );
}
