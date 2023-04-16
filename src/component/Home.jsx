import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

/* const img1 =
  "https://th.bing.com/th/id/OIP.8Sg5izwWG6yTam2PTHGlxgHaEZ?w=314&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7";
const img2 =
  "https://th.bing.com/th/id/OIP.zi-7QX3svjenMJIDoTFK7AHaHa?w=187&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7";
 */
const Home = () => {
  const [product, setproduct] = useState([]);
  /*     const productlist=[
        {name:'Macbook Pro',price:12000,img:img1,
        id:"nckabvainvs"},
        {name:'Apple ipad',price:10000,img:img2,
        id:"nckabvain"}
    ] */
  useEffect(() => {
    const getApiData = async () => {
      const response = await fetch("https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd")
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((err) => {
          console.log(err);
        });
        setproduct(response)
        console.log(response)

      // update the state
    };
    getApiData()
   
  }, []);

  const dispatch = useDispatch();
  const addtocarthandler = (option) => {
    console.log(option);
    dispatch({ type: "addtocart", payload: option });
    toast.success("add to cart");
  };

  return (
    <div className="home">
      {product.map((k) => (
        <Productcard
          key={k.id}
          name={k.name}
          handler={addtocarthandler}
          imgsrc={k.img}
          price={k.price}
        />
      ))}
    </div>
  );
};
const Productcard = ({ name, id, price, handler, imgsrc }) => (
  <div className="productcard">
    <img src={imgsrc} alt={name} />
    <p>{name}</p>
    <h4>{price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgsrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
