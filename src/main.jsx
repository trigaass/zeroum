import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Approutes } from './routes';
document.body.style.margin ="0";
document.body.style.overflowX = "hidden";
document.body.style.fontFamily = "Inter, sans-serif";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Approutes />
  </StrictMode>,
)
