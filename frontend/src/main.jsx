import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
