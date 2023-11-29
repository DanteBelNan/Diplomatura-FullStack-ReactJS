import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import Nav from './components/layout/Nav';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage"
import ArticuloPage from "./pages/ArticuloPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/articulos/:id" element={<ArticuloPage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="/login/" element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
