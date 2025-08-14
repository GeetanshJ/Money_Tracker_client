import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
const API_URL = "http://localhost:4000/api";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}>Home</Route>
          <Route path='/about' element={<AboutUs />}>About Us</Route>
          <Route path='/' element={<Login />}>Login/SignUp</Route>
          <Route path='/profile' element={<Profile />}>Profile</Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export { API_URL };
