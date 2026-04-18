function ListingFavorites({ Name, Price, ImageLink, ID, Remove }) {
    return (
        <div >
            <br />
            <hr />
            <div className="col-9 row">
                <img src={ImageLink} alt="" height="50px" />
                <h4>{Name}</h4>
                <p><b>{Price}</b>,-</p>
            </div>
            <div className="col-3">
                <button onClick={() => Remove(ID)} className="btn">❌❤️</button>
            </div>
        </div>
    );
}

export default ListingFavorites;
