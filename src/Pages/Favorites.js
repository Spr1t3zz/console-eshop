import { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";
import ListingFavorites from "../Components/ListingFavorites";

function Favorites() {
    const [list, setListings] = useState([]);

    useEffect(() => {
        getFavorites();
    }, []);

    function getFavorites() {
        fetch("http://localhost:3002/api/favorites")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch favorites");
                return res.json();
            })
            .then(data => setListings(data))
            .catch(err => console.error("Favorites fetch error:", err));
    }

    function remove(favID) {
        fetch("http://localhost:3002/api/deleteFav", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ favID }),
        })
            .then(() => getFavorites())
            .catch(err => console.error("Delete fav error:", err));
    }

    return (
        <div className="body-container">
            <Header />
            <Navigation />
            <div className="product-container">
                {list.length === 0 ? (
                    <div className="empty-box">
                        <h3 className="empty-text">Oblíbené je prázdné</h3>
                    </div>
                ) : (
                    list.map((product) => (
                        <ListingFavorites
                            key={product.favID}
                            Name={product.Name}
                            Price={product.Price}
                            ImageLink={product.ImageLink}
                            favID={product.favID}
                            Remove={remove}
                        />
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Favorites;