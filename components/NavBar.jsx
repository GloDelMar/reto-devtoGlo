import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado inicial de autenticación
  const router = useRouter(); // Inicializa el hook useRouter

  useEffect(() => {
    // Verificar si hay un token en el localStorage para determinar si el usuario está autenticado
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token del localStorage al cerrar sesión
    setIsLoggedIn(false);
    window.location.reload(); // Recargar la página actual para limpiar el estado
  };
  
  return (
    <nav className="flex items-center p-1 mb-2 bg-white ml-3 mr-3 w-full">
      <div className="flex items-center justify-center w-[200px] lg:w-52 xl:w-52">
        <span className='lg:hidden lx:hidden'>
          <img
            className='h-[40px]' 
            src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
            alt="Menu"
          />
        </span>
        <Link legacyBehavior href="/">
          <a>
            <img
              className="w-12 ml-2"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="Dev logo"
            />
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex items-center ml-2 ">
        <form className="flex items-center rounded-lg border border-gray-300 overflow-hidden h-10 px-3 text-gray-700 focus-within:border-blue-500 focus-within:ring-blue-500">
          <button
            type="button"
            className="bg-primary justify-start items-center p-3 text-xs font-medium rounded uppercase text-white transition duration-150 ease-in-out hover:bg-blue-300 focus:bg-primary-accent-300 focus:outline-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
              alt="Search icon"
              className="h-5"
            />
          </button>
          <input
            type="search"
            placeholder="Search"
            className="flex-1 h-full px-3 w-[600px] focus:outline-none"
          />
        </form>
      </div>

      {isLoggedIn ? (
        // Si está autenticado, mostrar los botones de crear post, notificaciones y foto de usuario
        <div className="flex w-full justify-end md:max-w[500px] items-center">
          <button
            type="button"
            className="bg-primary lg:hidden xl:hidden justify-start items-center p-3 text-xs font-medium rounded uppercase text-white transition duration-150 ease-in-out hover:bg-blue-300 focus:bg-primary-accent-300 focus:outline-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
              alt="Search icon"
              className="h-5"
            />
          </button>
          <Link legacyBehavior href="/createPost">
            <a className="ml-4 text-black rounded px-3 py-1 hover:bg-blue-200 hover:text-blue-500 hover:underline focus:outline-none">
              Create Post
            </a>
          </Link>
          {/* Aquí iría el icono de notificaciones */}
          {/* Aquí iría la foto de usuario */}
          <button
            onClick={handleLogout}
            className="ml-4 text-black rounded px-3 py-1 hover:bg-blue-200 hover:text-blue-500 hover:underline focus:outline-none"
          >
            Logout
          </button>
        </div>
      ) : (
        // Si no está autenticado, mostrar los botones de login y create account
        <div className="flex items-center md:max-w[500px] w-full justify-end">
          <button
            type="button"
            className="lg:hidden xl:hidden bg-primary justify-start items-center p-3 text-xs font-medium rounded uppercase text-white transition duration-150 ease-in-out hover:bg-blue-300 focus:bg-primary-accent-300 focus:outline-none"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
              alt="Search icon"
              className="h-5"
            />
          </button>
          <Link legacyBehavior href="/login">
            <a className="hidden lg:inline-block xl:inline-block text-black rounded px-3 py-1 hover:bg-blue-200 hover:text-blue-500 hover:underline focus:outline-none">
              Log in
            </a>
          </Link>
          <Link legacyBehavior href="/createAccount">
            <a className="ml-4 text-blue-500 bg-white border border-blue-500 rounded px-3 py-1 hover:bg-blue-500 hover:text-white hover:underline focus:outline-none">
              Create Account
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
