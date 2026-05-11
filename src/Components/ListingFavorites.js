function ListingFavorites({ Name, Price, ImageLink, favID, Remove }) {
    return (
        <div className="product-box">
            <img src={ImageLink} alt={Name} className="product-photo" />
            <div className="description-box">
                <h4>{Name}</h4>
            </div>
            <div className="price-box">
                <p><b>{Price}</b>,-</p>
                <div className="button-box">
                    <button onClick={() => Remove(favID)} className="btn">
                        <img src="https://www.iconshock.com/image/RealVista/General/close/"
                             alt="Remove" style={{ width: '16px', height: '16px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListingFavorites;