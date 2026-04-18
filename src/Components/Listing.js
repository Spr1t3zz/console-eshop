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
        <div>
            <br />
            <hr />
            <div >
                <img src={ImageLink} alt="product image" height="200px" class="product-photo" />
                <h4>{Name}</h4>
                <p>{Description}</p>
                <p><b>{Price}</b>,-</p>
            </div>
            <div>
                <button onClick={() => addFav(ID)} className="btn">❤️</button>
                <button onClick={() => add(ID)} className="btn">🛒</button>
            </div>
        </div>
    );
}

export default Listing;
