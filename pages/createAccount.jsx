import React, { useState } from 'react';
import { createAccount } from '../api/api';
import { useRouter } from 'next/router';

export default function CreateAccount() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createAccount(email, password, name);
      console.log('Response from API:', response);

      // Ya no necesitas verificar el token aquí porque la función createAccount lo maneja
      router.push('/'); // Ejemplo de redirección exitosa

      setName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Error creating account:', error);
      setError('Error al crear cuenta: ' + error.message);
    }
  };
  
    return (
        <main className="flex justify-center items-center flex-col min-h-screen">
            <div className="flex flex-col items-center mb-8">
                <img className="mb-4" src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"  alt="icono de dev" />
                <h1 className="text-2xl font-bold mb-2">Join the DEV Community</h1>
                <p>DEV Community is a community of 1,683,678 amazing developers</p>
            </div>
            

             <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-8 w-8 mr-4" src="data:image/png;base64,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" alt="" />
                <span className="text-center flex-grow">Sing up with Apple</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-8 w-8 mr-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AgP8Adv8AeP8Ae//c6v/T5P8Afv++1v+Vvv8AdP8Aev/K3v/D2f+40/8Ac//p8v9kpP+Ouv+ry//l8P8niv/v9v+oyf93rf9Jl/8zjv8Xhv98sP9+sv/P4v9bn/8AbP+gxf9fof9mKvi6AAAEi0lEQVR4nO2d63KiQBBGgZkEBVTAG6LuJr7/Qy6a3dqYQGjG7rlY3/ltTeXUkJ57dxQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKHbFvm4uh/aY5gkLSsfb9lCd5uti51ouihanY6ZyrdM0jTnp2tNaqex4Klzqbc4q0axi39FJft448iurTFrvr2RWlS4Ea0t+H461db9yq6z5XVFby91YJLyBZZw0sRpy1ivLfldW6ycXtKlYuBHsFC19qGXiSDCOEzvhZms7yPwn3doQrO0OE/coC+NimTkUjONM/jut7M1k+tCVtODGbRd2nSg9DT+77cKuE8/Chi7DzAdKVrBwNxb+I1mIGp5cf6TdZ3oSNTy69us4SgruXEfSK5nk9lThPtB0oUZy/r32wTDfCxrW7gNNF2ok56YehNLOsBE0rBgXTrcdX5UkSuV60nZyehE0PDAZapXpQzNfz4pfv4rle121KkuUprWeHgQNWw5DnRzPi28Rf/e6PtOaT1tBwy2DX9a8DjW/oIVqySH/ccGs+WG8ntEMU0HDR0Opjgf7b4Kh5OriwQFf/f65eaJhImj42NpJje1AhG6oR3qQbJh5akjY6wzckLBfHfZXqt7Hmw/bkDJMB21I2j8K2ZB2pBKyoSIdboZsSAvwARsSF63EtYWPhmo50vBuV242m30erOHwFmdZtzrruF3Zowl6aRgPNXhaEbcuPDdMh+bcW2KveW84dObXmq2oPTTM++ek74bNeWg4EEpNN+58NJz1NbYwjVs+GvZOu42vBPho2HseZry9HIyh8eAaiqH5eXIohpun78OXpzd8hSEMYejc8PkjDQxh6NQw1ff0vgR5WemvBGOYNvN76r672WU9//ozoqJ7w/7l4DjUxzgeGPYu6ceh3u0M15C45R2wYUD/h4aGF+K2RriG1Edx4RpSpwDBGpI3boI1JC+ngjVcUu8FBms4px61BWvYhDPzNjQkX5MP1pDoF7AheZc/VEP6mj9UQ+J1IT8MjVbA1LWTD4a6ni3v6bswtJstPlPQ31S5N4yvT7Y+078T9Xb/I/qJsAeG3/6kvnckQe8mwhCGMIQhDGEIQxjCEIYwfAJDydfqRs8j2A21oKHhvWVmw8EXOAwYJsJiNpRMgGl4+ZzXUDS3iWF+GmZDyfw01JN2WUPJ9Jfk4yFJQ9Gke4a5vpgNJXN90felBQ1p78INMcy5x2womXPP8J0Lr6Fo3kTDIZ/XUDT3pWHSPVZD4fylZq8iWQ2layQYhRpWw1xW0OzhJ6eheC5oo3zenIbi+byNcrIzGsrnZDfKq89oaCGvvkltBD5DG7URTOpbsBnaqW9hUKMkeWEytFSjJFpMrTPDZWirzsz0WkFMhh6XQ+IxtCk4tWYXh6Hlml0T664xGFqvuxZNqp33sKGL2nnRlPqHDxq6qn8Y0WtYPmKoE+WshuWN4lqHVI3UITUwvNUhza91SGWLrpDYFev6VB3abaxVf3HYt95Z29twMdn02B4uTb33oZYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApvAHiS1bcv9TaMIAAAAASUVORK5CYII=" alt="icono facebook" />
                <span className="text-center flex-grow">Sign up with Facebook</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-6 w-6 mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO2_GkQkmlKzhyi81KW9GyKHJ_JmEojWg6w&s" alt="icono de forem" />
                <span className="text-center flex-grow">Sing up with Forem</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-6 w-6 mr-4" src="data:image/png;base64,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" alt="icono de gitHub" />
                <span className="text-center flex-grow">Sing up with GitHub</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-7 w-7 mr-4" src="data:image/png;base64,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" alt="iconod de Google" />
                <span className="text-center flex-grow">Sing up with Google</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-8 w-8 mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJpCVDLasZxDQvE23mfrfZnpimt05dhfvJQ&s" alt="icno de twitter" />
                <span className="text-center flex-grow">Sing up with Twitter (X)</span>
              </div>
              <div className=" flex items-center border border-blue-500 p-4 rounded-lg w-96 lg:w-1/3 md:w-1/2 sm:w-96 mb-4"> 
                <img className="h-8 w-8 mr-4" src="data:image/png;base64,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" alt="icono de Email" />
                <span className="text-center flex-grow">Sing up with Email</span>
              </div>
            
            <div>
                <p>OR</p>
            </div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-96 lg:w-1/3 md:w-1/2 sm:w-96">
    <div className="flex flex-col w-full mb-4">
          <span className="mb-1">Name</span>
          <input
            className="border border-gray-400 px-2 py-1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <span className="mb-1">Email</span>
          <input
            className="border border-gray-400 px-2 py-1"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full mb-4">
          <span className="mb-1">Password</span>
          <input
            className="border border-gray-400 px-2 py-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <label className="flex items-center w-full">
            <input className="mr-2 text-2xl" type="checkbox" />Remember me
            <p className="ml-auto text-[#1d4ed8]">Forgot password?</p>
          </label>
        </div>
        <div className="flex items-center flex-col justify-between w-full">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 w-full mb-8" type="submit">
            Create Account
          </button>
          <p className="ml-4 text-sm">By signing in, you are agreeing to our privacy policy, terms of use and code of conduct.</p>
        </div>
        <div className="mt-4">
          <p>New to DEV Community? Create account.</p>
        </div>
      </form>


        </main>
    )
}
