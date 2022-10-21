import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Boots from "./pages/Boots";
import HomeWomen from "./pages/HomeWomen";
import Blazers from "./pages/Blazers";
import Jackets from "./pages/Jackets";
import Layout from './pages/Layout';
import NoPage from "./pages/NoPage";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeWomen />} />
          <Route path="/" element={<Layout />}>
            <Route path="blazers" element={<Blazers />} />
            <Route path="boots" element={<Boots />} />
            <Route path="jackets" element={<Jackets />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render
(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
