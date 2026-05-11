import { useEffect, useState } from "react";
import Header from "../Components/Header.js";
import Navigation from "../Components/Navigation.js";
import Footer from "../Components/Footer.js";
import ListingCart from "../Components/ListingCart";
import CartTotal from "../Components/CartTotal";

function Cart() {
    const [list, setListings] = useState([]);

    useEffect(() => {
        getCart();
    }, []);

    function getCart() {
        fetch("http://localhost:3002/api/cart")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch cart");
                return res.json();
            })
            .then(data => setListings(data))
            .catch(err => console.error("Cart fetch error:", err));
    }

    function remove(cartID) {
        fetch("http://localhost:3002/api/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cartID }),
        })
            .then(() => getCart())
            .catch(err => console.error("Delete error:", err));
    }

    return (
        <div className="body-container">
            <Header />
            <Navigation />
            <div className="product-container">
                {list.length === 0 ? (
                    <div className="empty-box">
                        <h3 className="empty-text">Košík je prázdný</h3>
                    </div>
                ) : (
                    list.map((product) => (
                        <ListingCart
                            key={product.cartID}
                            Name={product.Name}
                            Price={product.Price}
                            ImageLink={product.ImageLink}
                            cartID={product.cartID}
                            quantity={product.quantity}
                            Remove={remove}
                        />
                    ))
                )}
                {list.length > 0 && <CartTotal list={list} />}
            </div>
            <Footer />
        </div>
    );
}

export default Cart;