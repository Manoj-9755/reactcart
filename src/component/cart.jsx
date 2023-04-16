import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartitems,subtotal,tax,shipping,total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({
      type: "addtocart",
      payload: { id },
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
  };
  dispatch({
      type: "calculateprice",
    
  });
  const deletehandle = (id) => {
    dispatch({
      type: "deletefromcart",
      payload: id,
    });
  };

  return (
    <div className="cart">
      <main>
        {cartitems.length > 0 ? (
          cartitems.map((i) => (
            <Cartitem
              imgsrc={i.imgsrc}
              name={i.name}
              price={23212}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deletehandle={deletehandle}
            />
          ))
        ) : (
          <h1>NO item here</h1>
        )}
      </main>
      <aside>
        <h2> subtotal:${subtotal}</h2>
        <h2> shiping:${shipping}</h2>
        <h2> tax:${tax}</h2>
        <h2> total:${total}</h2>
      </aside>
    </div>
  );
};

const Cartitem = ({
  imgsrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deletehandle,
  id,
}) => (
  <div className="cartitem">
    <img src={imgsrc} alt="item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deletehandle(id)} />
  </div>
);

export default Cart;
