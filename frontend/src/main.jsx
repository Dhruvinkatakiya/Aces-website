import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/AuthContext'
import './index.css'
import App from './App.jsx'

(function hideInjectedControllers() {
  const remove = () => {
    document.querySelectorAll('#vsc-controller,.vsc-controller,[data-vscid],.video-speed-controller')
      .forEach(el => el.remove());
  };
  remove();
  const obs = new MutationObserver(remove);
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
