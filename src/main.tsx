import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css' // 我們用 CDN Tailwind，所以註釋掉或刪除這行

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)