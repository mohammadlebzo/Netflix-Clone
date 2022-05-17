// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import FavList from './components/favList/FavList';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritelist" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
