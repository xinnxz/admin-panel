import React from 'react'
import App from '../App';
import Main from '../components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Main />}>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router