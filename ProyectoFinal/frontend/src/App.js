// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Nav from './components/layout/Nav';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage"
import ArticuloPage from "./pages/ArticuloPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserProvider } from './contexts/UserContext';
import CrearArticulo from "./pages/CrearArticulo";
import ModificarArticulo from "./pages/ModificarArticulo";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <UserProvider>
          <Nav />
          <Routes>
            <Route path="/crearArticulo/" element={<CrearArticulo />} />
            <Route path="/modificarArticulo/:id" element={<ModificarArticulo />} />
            <Route path="/articulos/:id" element={<ArticuloPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/login/*" element={<LoginPage />} />
            <Route path="/register/*" element={<RegisterPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
