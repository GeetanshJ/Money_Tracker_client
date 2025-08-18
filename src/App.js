import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:4000/api";

function App() {

  return (
<>
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </div>
</>

  );
}

export default App;

export { API_URL };
