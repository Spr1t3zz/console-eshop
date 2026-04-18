function CartTotal({ list }) {
    let totalPrice = 0;

    list.forEach((product) => {
        totalPrice += Number(product.Price);
    });

    if (list.length > 0) {
        return (
            <div className="d-flex justify-content-between">
                <h3>Celkem k zaplacení: <b>{totalPrice}</b>,-</h3>
            </div>
        );
    } else {
        return <h3 className="text-danger">Zatím nic nebylo přidáno</h3>;
    }
}

export default CartTotal;
