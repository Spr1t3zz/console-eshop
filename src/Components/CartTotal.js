function CartTotal({ list }) {
    let totalPrice = 0;

    list.forEach((product) => {
        totalPrice += Number(product.Price) * product.quantity;
    });

    if (list.length > 0) {
        return (
            <div style={{ marginTop: 'auto', textAlign: 'center', padding: '15px 0 5px 0', width: '100%', borderTop: '1px solid #d4d0c8' }}>
                <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Tahoma, Verdana, Arial, sans-serif', fontWeight: 'bold', color: '#666', textShadow: '1px 1px 0 #fff' }}>
                    Celkem k zaplacení: <b>{totalPrice}</b>,-
                </h3>
            </div>
        );
    } else {
        return <h3 className="text-danger">Zatím nic nebylo přidáno</h3>;
    }
}

export default CartTotal;