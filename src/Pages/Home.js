import { useState } from "react";
import HomeList from "../Components/HomeList.js";
import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="body-container">
            <Header />
            <Navigation searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <div className="product-container">
                <HomeList searchQuery={searchQuery} />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;