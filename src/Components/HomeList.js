import Listing from "../Components/Listing.js";
import { useEffect, useState } from "react";

function HomeList({ searchQuery }) {
    const [list, setListings] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3002/api/listings")
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => setListings(data))
            .catch(() => setError(true));
    }, []);

    const filteredList = list.filter((product) =>
        product.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.Description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {error || (list.length === 0 && filteredList.length === 0) ? (
                <div className="error-container">
                    <img src="https://file.garden/agGlWxEnpRn5fc3C/image_2026-05-11_131354498.png" alt="Xbox 360" />
                    <h1 className="error-message">Něco se pokazilo...</h1>
                </div>
            ) : filteredList.length === 0 ? (
                <div className="empty-box">
                    <h3 className="empty-text">Žádné produkty neodpovídají vašemu hledání</h3>
                </div>
            ) : (
                filteredList.map((product) => (
                    <Listing
                        key={product.ID}
                        Name={product.Name}
                        Price={product.Price}
                        ImageLink={product.ImageLink}
                        Description={product.Description}
                        ID={product.ID}
                    />
                ))
            )}
        </div>
    );
}

export default HomeList;