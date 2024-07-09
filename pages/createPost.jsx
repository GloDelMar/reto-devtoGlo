import { useState } from "react";
import { createPost, getPosts } from "../api/api"; // Asumiendo que tienes una función getPosts en tu API para obtener la lista de posts
import { Toaster, toast } from "sonner";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    body: "",
    date: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createPost(formData); // Crear el nuevo post
      toast.success("Registro correcto");

      // Limpiar el formulario después de crear el post
      setFormData({
        image: "",
        title: "",
        body: "",
        date: "",
      });

      // Recuperar y mostrar la lista de posts actualizada
      const updatedPosts = await getPosts(); // Suponiendo que getPosts() devuelve la lista actualizada de posts
      console.log("Lista de posts actualizada:", updatedPosts);

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al registrar");
    }
  };

    return (
      <main>
        <Toaster />
        <form
          className="max-w-screen-xl grid px-4 h-screen gap-x-4 mx-auto text-base grid-cols-[64px_7fr_3fr] grid-rows-[min-content_1fr_min-content]"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center h-14 col-span-2">
            <span className="block mr-4">
              <img
                className="w-auto h-[calc(56px-1rem)] object-contain align-middle inline-block outline-none"
                src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="DEV Community"
              />
            </span>
            <div className="flex flex-1 items-center text-gray-900 font-medium">
              <span className="hidden sm:inline-block mr-2">Create Post</span>
            </div>
            <nav className="ml-auto" aria-label="View post modes">
              <ul className="flex">
                <li>
                  <button
                    data-text="Edit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md"
                    type="button"
                    aria-current="page"
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    data-text="Preview"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md ml-2"
                    type="button"
                  >
                    Preview
                  </button>
                </li>
              </ul>
            </nav>
            <div className="absolute right-2 top-2 ml-0">
              <button
                type="button"
                title="Close the editor"
                aria-label="Close the editor"
                className="p-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="fill-current text-gray-700"
                >
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="rounded bg-white text-gray-900 shadow-[0_0_0_1px_rgba(156,163,175,1)] col-start-2 col-end-2 flex flex-col overflow-y-auto h-[calc(100vh-56px-88px)] overflow-wrap-anywhere">
            <div className="p-8 rounded-t-md">
              <div
                className="flex flex-row items-center mb-5"
                role="presentation"
              >
                <div className="flex items-center">
                  <label className="cursor-pointer px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100">
                    Add a cover image
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      data-max-file-size-mb="25"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
              <div className="mb-2 relative">
                <input
                  className="w-full p-4 text-2xl font-bold text-gray-900 bg-transparent border-0 focus:ring-0"
                  id="article-form-title"
                  placeholder="New post title here..."
                  aria-label="Post Title"
                  name="title"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex-1 relative outline-none flex flex-col rounded-bl-md rounded-br-md"></div>
            <div className="h-full">
              <input
                type="date"
                name="date"
                placeholder="Write your post content here..."
                id="article_body_markdown"
                className="h-full w-full p-8 rounded-bl-md rounded-br-md"
                onChange={handleChange}
              />
            </div>
            <div className="flex-1 relative outline-none flex flex-col rounded-bl-md rounded-br-md"></div>
            <div className="h-full">
              <input
                aria-label="Post Content"
                name="body"
                placeholder="Write your post content here..."
                id="article_body_markdown"
                className="h-full w-full p-8 rounded-bl-md rounded-br-md"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="crayons-article-form__aside">
            <div
              data-testid="article-form__help-section"
              className="sticky top-[597px]"
            >
              <div
                data-testid="article-publishing-tips"
                className="crayons-article-form__help crayons-article-form__help--tags"
              >
                <h4 className="mb-2 fs-l">Publishing Tips</h4>
                <ul className="list-disc pl-6 color-base-70">
                  <li>
                    Ensure your post has a cover image set to make the most of
                    the home feed and social media platforms.
                  </li>
                  <li>
                    Share your post on social media platforms or with your
                    co-workers or local communities.
                  </li>
                  <li>
                    Ask people to leave questions for you in the comments. Its
                    a great way to spark additional discussion describing
                    personally why you wrote it or why people might find it
                    helpful.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-span-2 p-0 h-22 flex items-center relative">
          <button
              type="submit"
              className="relative inline-block p-2 rounded-md font-inherit text-center cursor-pointer border-none bg-[rgb(59,72,233)] text-white font-medium whitespace-nowrap mr-2"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    );
 }