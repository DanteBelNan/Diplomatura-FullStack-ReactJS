import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


import Nav from './components/layout/Nav';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage"
import ArticuloPage from "./pages/ArticuloPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;