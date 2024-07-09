import "../styles/global.css"
import { AuthProvider } from "../hooks/useAuth"

export default function App({ Component, pageProps }) {
  return (
         <Component {...pageProps} />
   
  );
}