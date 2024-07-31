import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ListSections } from "./listaSec";


export function LeftSideBar() {
  const infoTabs = [
    {
      icon: "https://img.icons8.com/?size=100&id=FYJ9HNSqf_uK&format=png&color=000000",
      title: "Code of Conduct",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=4dTBn5vlN-an&format=png&color=000000",
      title: "Privacy Policy",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=runYFO7RVbcD&format=png&color=000000",
      title: "Terms of use",
    },
  ];

  const socials = [
    {
      icon: "https://cdn.icon-icons.com/icons2/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png",
    },
    {
      icon: "https://i.pinimg.com/originals/b6/99/1c/b6991c27a36077737c09a40cb31ecdef.jpg",
    },
    {
      icon: "https://xmorse.gallerycdn.vsassets.io/extensions/xmorse/dark-theme-github/2.0.0/1565294235331/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png",
    },
    {
      icon: "https://images.freeimages.com/fic/images/icons/2779/simple_icons/4096/twitch_4096_black.png",
    },
    {
      icon: "https://cdn.icon-icons.com/icons2/3398/PNG/512/mastodon_logo_icon_214664.png",
    },
  ];

  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const tokenFromStorage = localStorage.getItem("token");
      setToken(tokenFromStorage);
    }
  }, []);

  function handleClickCreate() {
    router.push("/createAccount");
  }

  function handleClickLogin() {
    router.push("/login");
  }

 

  return (
    <aside className="hidden md:block max-w-96 min-w-[250px] p-3 flex-col ml-2 mr-4">
      {!token && (
        <div className="mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center mb-2">
          <h2 className="text-lg font-bold mb-2">
            DEV Community is a community of 1,692,174 amazing developers
          </h2>
          <p className="text-gray-600 mb-4 text-left">
            We're a place where coders share, stay up-to-date and grow their careers.
          </p>
          <button
            className="w-full bg-transparent border border-[#3B49DF] text-[#3B49DF] hover:bg-[#3B49DF] hover:text-white font-semibold py-2 px-4 rounded-lg mb-2"
            onClick={handleClickCreate}
          >
            Create account
          </button>
          <button
            className="w-full text-black hover:bg-[#E4E4F3] hover:text-[#3B49DF] hover:underline py-2 px-4 rounded-lg mb-2"
            onClick={handleClickLogin}
          >
            Login
          </button>
        </div>
      )}

   
      <div className="mt-4">
        <ListSections />
      </div>

      <div className="mt-3">
        <p className="font-bold">Other</p>
        {infoTabs.map((tab, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-1 hover:bg-gray-100 cursor-pointer"
          >
            <img
              src={tab.icon}
              alt={tab.title}
              className="w-5 h-5 object-contain"
            />
            <span className="text-gray-700">{tab.title}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3 mt-6">
        {socials.map((social, index) => (
          <img
            key={index}
            src={social.icon}
            alt=""
            className="w-6 h-6 object-contain cursor-pointer"
          />
        ))}
      </div>
    </aside>
  );
}
