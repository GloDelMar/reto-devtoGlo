
const API_URL = "https://retobackendglo.onrender.com";

export function login(email, password) {
 return fetch(`${API_URL}/auth/login`, {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({email, password})
 })
 .then(response =>{
  if(!response.ok){
    throw new Error ("Credenciales incorrectas")
  }
  return response.json()
   })
   .then(data => {
    localStorage.setItem("token", data.data.token)
    return data
    })}

    
    export async function createAccount(email, password, name) {
      try {
        const response = await fetch(`${API_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password, name })
        });
    
        if (!response.ok) {
          throw new Error("Error al crear usuario");
        }
    
        const data = await response.json();
    
        if (data.data.token) {
          localStorage.setItem('token', data.token);
        }
    
        return data;
      } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
      }
    }
    
    export async function createPost(data, token) {
      const headers = {
        "Content-Type": "application/json",
        "Authorization": token
      };
    
      console.log("Headers:", headers);
      console.log("Body:", JSON.stringify({
        title: data.title,
        imagen: data.imagen,
        body: data.body,
      })); // Depuración
    
      return fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          title: data.title,
          imagen: data.imagen,
          body: data.body,
        })
      })
      .then((response) => response.json());
    }
    

  export async function getPosts() {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        console.log("Data received from API:", data);

        
        if (!Array.isArray(data.data.posts)) {
            throw new Error("La respuesta de la API no es un array de posts");
        }

        return data.data.posts;
    } catch (error) {
        console.error("Error fetching or parsing posts:", error);
        throw error;
    }
}





export async function getPostById(id) {
  try {
    const response = await fetch(`${API_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
    throw error;
  }
}




export function getUserById(id) {
  return fetch(`${API_URL}/users/${id}`, {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching user with id ${id}`);
      }
      return response.json();
    });
}
