function ListingCart({ Name, Price, ImageLink, cartID, quantity, Remove }) {
    return (
        <div className="product-box">
            <img src={ImageLink} alt={Name} className="product-photo" />
            <div className="description-box">
                <h4>{Name}</h4>
                <p>Množství: {quantity}</p>
            </div>
            <div className="price-box">
                <p><b>{Price * quantity}</b>,-</p>
                <div className="button-box">
                    <button onClick={() => Remove(cartID)} className="btn">
                        <img src="https://www.iconshock.com/image/RealVista/General/close/"
                             alt="Remove" style={{ width: '16px', height: '16px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ListingCart;