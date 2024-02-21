import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './components/router/router.jsx'
import { RouterProvider } from 'react-router-dom'
//google analytics
import ReactGA from "react-ga4"

ReactGA.initialize("G-8KV1474M21"); // measurement ID

ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </React.StrictMode>,
)
