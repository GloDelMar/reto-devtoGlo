import React from 'react';

// URLs de imágenes por defecto
const defaultProfilePic = 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'; // Imagen por defecto para el perfil
const defaultPostImage = 'https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg'; // Imagen por defecto para el post

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>No hay posts para mostrar</div>;
  }

  // Desestructuración del primer post y el resto
  const [firstPost, ...restPosts] = posts;

  // Función para renderizar cada post
  const renderPost = (post, isFirstPost) => {
    const { user = {}, imagen, createdat, title } = post || {};
    const { profilePic, name } = user || {};

    return (
      <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div className="p-4">
          {isFirstPost ? (
            <img
              src={imagen || defaultPostImage}
              className="w-full h-auto pb-4"
              alt={title || "Imagen del post"}
            />
          ) : (
            <div className="w-full h-auto pb-4"></div> // Espacio vacío para los demás posts
          )}
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <img
                src={profilePic || defaultProfilePic}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                alt={name ? `Imagen de perfil de ${name}` : "Imagen de perfil por defecto"}
              />
            </div>
            <div className="flex flex-col p-2">
              <div className="flex space-x-2">{name || 'Nombre del Usuario'}</div>
              <div>
                {createdat
                  ? new Date(createdat).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                    }).replace(" de ", " ")
                  : 'Fecha no disponible'}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold p-4">{title || 'Título no disponible'}</h2>
            <div className="ml-3">#Javascript #discuss #jokes</div>
          </div>
          <div className="flex flex-wrap gap-2 justify-between mt-4">
            <span className="relative flex items-center space-x-1">
              <div className="flex items-center justify-center ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  role="img"
                  aria-labelledby="acbgv9ug60wv1l65zdh85sopp7r3m6yg"
                >
                  <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                </svg>
                <span className="text-sm font-medium">
                  {Math.floor(Math.random() * 100)} Comentarios
                </span>
              </div>
            </span>
            <div className="flex items-center justify-end">
              <span className="text-sm font-medium">
                {Math.floor(Math.random() * 100)} min de lectura
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="posts">
      {firstPost && renderPost(firstPost, true)}

      {restPosts.length > 0 && (
        <div>
          {restPosts.map((post) => renderPost(post, false))}
        </div>
      )}
    </section>
  );
}
