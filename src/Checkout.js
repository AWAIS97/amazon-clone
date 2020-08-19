/** @format */

import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg'
          alt=''
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your basket/cart is empty</h1>
          </div>
        ) : (
          <div>
            <h1 className='checkout_title'>Your Shopping Basket</h1>
            <hr />

            {/* list out all of the Checkout products */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className='checkout__right'>
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
