import "./App.css";
import Home from "./Pages/Home.js";
import Favorites from "./Pages/Favorites.js";
import Cart from "./Pages/Cart.js";
import News from "./Pages/News.js";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";

function App() {
    return (
        <article className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products-page" element={<Home />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/Cart-items" element={<Cart />} />
                <Route path="/News" element={<News />} />
                <Route path="/Something-went-wrong" element={<AboutUs />} />
            </Routes>
        </article>
    );
}

export default App;