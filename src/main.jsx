import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Page from "./routes/index.jsx"

import "../src/styles/global.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Page/>
    </BrowserRouter>
  </StrictMode>,
)
