import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Pages/Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto rounded-md'>
    <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  </div>
)