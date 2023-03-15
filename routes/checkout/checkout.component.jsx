import "./checkout.styles.scss";

const Checkout = ({ cartProducts, handleDecrease, handleIncrease ,handleRemove}) => {
  return (
    <div className="container">
      <h5>
        <span>PRODUCT</span>
        <span>DESCRIPTION</span>
        <span>QUANTITY</span>
        <span>PRICE</span>
        <span>REMOVE</span>
      </h5>
      <hr />

      {cartProducts.map((cartProduct) => {
        return (
          <>
            <div className="cart" key={cartProduct.id}>
              <img src={cartProduct.img} />
              <div style={{ width: "90px" }}>
                <p
                  style={{
                    marginRight: "60px",
                    marginLeft: "-88px",
                    fontSize: "1em",
                    textAlign: "center",
                  }}
                >
                  {cartProduct.name}
                </p>
              </div>
              <p style={{ marginLeft: "-15px",width:"50px"}}>
                <span onClick={() => handleDecrease(cartProduct.id)}>
                  &#60;
                </span>
                {cartProduct.quantity}
                <span onClick={() => handleIncrease(cartProduct.id)}>
                  &#62;
                </span>
              </p>
              <div style={{width:"50px"}}>
                <p style={{ marginLeft: "-35px" }}>
                  {cartProduct.price * cartProduct.quantity}
                </p>
              </div>
              <p onClick={() => handleRemove(cartProduct.id)} style={{cursor:"pointer"}}>X</p>
            </div>
            <hr />
          </>
        );
      })}
      <p style={{ fontSize: "20px", textAlign: "end" }}>
        TOTAL:
        <span style={{ fontWeight: "bold", marginLeft: "5px" }}>
          {cartProducts.reduce((totalPrice, cartProduct) => {
            totalPrice += cartProduct.quantity * cartProduct.price;
            return totalPrice;
          }, 0)}
          $
        </span>
      </p>
    </div>
  );
};
export default Checkout;
