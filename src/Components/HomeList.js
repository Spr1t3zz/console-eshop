import Listing from "../Components/Listing.js";
import {useEffect, useState} from "react";

function HomeList({ Add }) {

    const [list, setListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/api/listings")
            .then(res => res.json())
            .then(data => setListings(data));
    }, []);

    return (
        <div>
            {list.length === 0 && (
                <h3 >Seznam položek je prázdný</h3>
            )}

            {list.map((product) => (
                <Listing
                    key={product.ID}
                    Name={product.Name}
                    Price={product.Price}
                    ImageLink={product.ImageLink}
                    Description={product.Description}
                    ID={product.ID}
                    Add={Add}
                />
            ))}
        </div>
    );
}

export default HomeList;
