import React from "react";

function Home(props) {
  console.warn("props",props)
  console.warn("home",props.data)
  return (
    <div>
        <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://help.apple.com/assets/640A52196275DE31D4371B5E/640A52226275DE31D4371B8B/en_US/b352a789e96fa06f27068ee7cfef331c.png" />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>

          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button onClick={()=>props.addToCartHandler({price:1000, name:'i phone11'})}>Add To Cart</button>

          <button className="remove-cart-btn" onClick={()=>props.removeToCartHandler()}>Remove To Cart</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
