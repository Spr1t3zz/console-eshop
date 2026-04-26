function add(ID) {
    fetch("http://localhost:3002/api/addToCart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: ID }),
    })
}

function addFav(ID) {
    fetch("http://localhost:3002/api/addToFavs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ID: ID }),
    })
}

function Listing({ Name, Price, Description, ImageLink, ID}) {
    return (
        <div className="product-box">
            <img src={ImageLink} alt="product image" className="product-photo" />

            <div className="description-box">
                <h4>{Name}</h4>
                <p>{Description}</p>
            </div>

            <div className="price-box">
                <p><b>{Price}</b>,-</p>

                <div className="button-box">
                    <button onClick={() => addFav(ID)} className="btn">❤️</button>
                    <button onClick={() => add(ID)} className="btn">🛒</button>
                </div>
            </div>
        </div>
    );
}

export default Listing;
