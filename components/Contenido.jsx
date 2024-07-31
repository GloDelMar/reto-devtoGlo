import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import { getPosts, getUserById } from '../api/api';

export default function Content() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [users, setUsers] = useState({}); // Mapa de usuarios por ID

  useEffect(() => {
    // Obtener posts al montar el componente
    getPosts()
      .then(response => {
        if (!Array.isArray(response)) {
          throw new Error("La respuesta de getPosts no es un array de posts");
        }

        const data = response;
        setPosts(data);
        setFilteredPosts(data);

        // Obtener información de usuario para cada post
        const userIds = [...new Set(data.map(post => post.user))];
        const userPromises = userIds.map(id => getUserById(id));

        Promise.all(userPromises)
          .then(userResponses => {
            const usersMap = userResponses.reduce((acc, user) => {
              acc[user._id] = user; // Suponiendo que cada respuesta de usuario tiene un _id
              return acc;
            }, {});
            setUsers(usersMap);
          })
          .catch(error => console.error('Error al obtener usuarios:', error.message));
      })
      .catch(error => console.error('Error al obtener posts:', error.message));
  }, []);

  const handleFilter = (filterType) => {
    let filtered = [...posts]; // Copia del arreglo original de posts

    if (filterType === 'Relevant') {
      filtered.sort((a, b) => b.relevance - a.relevance);
    } else if (filterType === 'Latest') {
      filtered.sort((a, b) => new Date(b.createdat) - new Date(a.createdat));
    } else if (filterType === 'Top') {
      filtered.sort((a, b) => b.likes - a.likes); // Asegúrate de que los posts tengan una propiedad likes
    }

    setFilteredPosts(filtered);
  };

  return (
    <main className="flex flex-col">
      <div>
        <header className="flex flex-row">
          <button className="ml-2 text-xl" onClick={() => handleFilter('Relevant')}>
            Relevante
          </button>
          <button className="ml-4 text-xl" onClick={() => handleFilter('Latest')}>
            Más Reciente
          </button>
          <button className="ml-4 text-xl" onClick={() => handleFilter('Top')}>
            Más Popular
          </button>
        </header>
        <Posts posts={filteredPosts} users={users} />
      </div>
    </main>
  );
}
