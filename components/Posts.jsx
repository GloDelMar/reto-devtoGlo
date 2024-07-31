import React, { useEffect, useState } from "react";
import { getPosts } from "../api/api";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((data) => setPosts(data))
            .catch((error) => console.error(error));
    }, []);

    if (posts.length === 0) {
        return <div>No hay posts para mostrar</div>;
    }

    const firstPost = posts[0];

    return (
        <section id="mainPost">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                <div className="p-4">
                    <img src={firstPost.imagen} className="w-full h-auto pb-4" />
                    <div className="flex items-center justify-start">
                        <div className="flex items-center">
                          
                            <img
                                src={firstPost.user.profilePic}
                                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                                alt="Imagen de perfil del usuario"
                            />
                        </div>
                        <div className="flex flex-col p-2">
                            <div className="flex space-x-2">{firstPost.user.name}</div>
                            <div>
                                {new Date(firstPost.createdat)
                                    .toLocaleDateString("es-ES", {
                                        day: "numeric",
                                        month: "short",
                                    })
                                    .replace(" de ", " ")}
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold p-4">{firstPost.title}</h2>
                        
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
        </section>
    );
}
