

import {useEffect, useState} from "react";
import CartTotal from "../Components/CartTotal";
import ListingCart from "../Components/ListingCart";

function Cart() {

    const [list, setListings] = useState([]);

    useEffect(() => {
        getCart();
    }, []);

    function getCart() {
        fetch("http://localhost:3002/api/cart")
            .then(res => res.json())
            .then(data => setListings(data));
    }

    function remove(ID) {
        fetch("http://localhost:3002/api/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ID }),
        })
            .then(() => getCart());
    }


    return (
        <div >
            {list.map((product) => (
                <ListingCart
                    key={product.ID}
                    Name={product.Name}
                    Price={product.Price}
                    ImageLink={product.ImageLink}
                    ID={product.ID}
                    Remove={remove}
                />
            ))}
            <CartTotal list={list} />
        </div>
    );
}

export default Cart;
