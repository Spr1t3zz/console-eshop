

import {useEffect, useState} from "react";
import ListingFavorites from "../Components/ListingFavorites";

function Favorites() {

    const [list, setListings] = useState([]);

    useEffect(() => {
        getFavs();
    }, []);

    function getFavs() {
        fetch("http://localhost:3002/api/favorites")
            .then(res => res.json())
            .then(data => setListings(data));
    }

    function removeFav(ID) {
        fetch("http://localhost:3002/api/deleteFav", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ID }),
        })
            .then(() => getFavs());
    }


    return (
        <div >
            {list.map((product) => (
                <ListingFavorites
                    key={product.ID}
                    Name={product.Name}
                    Price={product.Price}
                    ImageLink={product.ImageLink}
                    ID={product.ID}
                    Remove={removeFav}
                />
            ))}
        </div>
    );
}

export default Favorites;
