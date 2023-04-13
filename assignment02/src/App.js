import "./App.css";
// import logo from "./logo.png";
import items from "./products"
// import {Categories} from "./Categories"
import React, { useState, useEffect } from "react";

export const App = () => {
  console.log("Step 1: After reading file :");
  
  const [ProductsCategory, setProductsCategory] = useState(items);
  // var ProductsCategory = Products;
  const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {total();}, [cart]);
    
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };
    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const removeFromCart = (el) => {
      let itemFound = false;
      const updatedCart = cart.filter((cartItem) => {
        if (cartItem.id === el.id && !itemFound) {
        itemFound = true;
        return false;
        }
        return true;
      });
      if (itemFound) {
        setCart(updatedCart);
      }
    };

    const cartItems = cart.map((el) => (
      <div key={el.id}>
          <img class="img-fluid" src={el.image} width={30} />
          <p>{el.title} ${el.price}</p>
      </div>
  ));

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
}

  const render_products = (ProductsCategory) => {

    return <div className='category-section fixed'>
	  {console.log("Step 3 : in render_products ")}
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-600 category-title">Products ({ProductsCategory.length})</h2>

      <div className="m-6 p-3 mt-10 ml-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-10" style={{ maxHeight: '700px', overflowY: 'scroll' }}>
        {/* Loop Products */}
        {ProductsCategory.map((product, index) => (
          <div key={index} className="group relative shadow-lg" >
            <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
              <img
                alt="Product Image"
                src={product.image}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="flex justify-between p-3">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{product.title}</span>
                  </a>
                  <p>Tag - {product.category}</p>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Rating: {product.rating.rate}</p>
                
                <button class='relative bg-blue-500 text-white p-3 rounded font-bold overflow-visible' type="button" onClick={() => removeFromCart(product)}>-</button>
                <p>{howManyofThis(product.id)}</p>
                <button class='relative bg-blue-500 text-white p-3 rounded font-bold overflow-visible' type="button" variant="light" onClick={() => addToCart(product)}> + </button>
              </div>
              <p className="text-sm font-medium text-green-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  }

  const Shop = () => {
    // const [cart, setCart] = useState([]);
    // const [cartTotal, setCartTotal] = useState(0);
    // useEffect(() => {total();}, [cart]);
    
    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < cart.length; i++) {
    //         totalVal += cart[i].price;
    //     }
    //     setCartTotal(totalVal);
    // };
    // const addToCart = (el) => {
    //     setCart([...cart, el]);
    // };

    // const removeFromCart = (el) => {
    //     let hardCopy = [...cart];
    //     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    //     setCart(hardCopy);
    // };

    // const cartItems = cart.map((el) => (
    //     <div key={el.id}>
    //         <img class="img-fluid" src={el.image} width={30} />
    //         <p>{el.title} ${el.price}</p>
    //     </div>
    // ));
    
    // const listItems = Products.map((el) => (
    //     <div key={el.id}>
    //         <img class="img-fluid" src={el.image} width={100} />
    //         <p>{el.title} 
    //         {el.category} 
    //         {el.price}
    //         </p> 
    //         <button type="button" onClick={() => removeFromCart(el)}>-</button>{" "}
    //         <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
    //     </div>
    // ));

    // return (
    //     <div>
    //         <div> {listItems} </div>
    //         <div>Items in Cart :</div>
    //         <div>{cartItems}</div>
    //         <div>Order total to pay: {cartTotal}</div>
    //     </div>
    // );
}
  
  // function handleClick(tag){
  //   console.log("Step 4 : in handleClick", tag);
  //   let filtered = Products.filter(cat => cat.category === tag);
  //   setProductsCategory(filtered);
  //   // ProductsCategory = filtered;
  //   console.log("Step 5 : ", Products.length, ProductsCategory.length);
  // }

  
  return (
    // <div className="flex fixed flex-row">
	  //   {console.log("Step 2 : Return App :",Products.length,ProductsCategory.length)}
    //   <div className="h-screen  bg-slate-800 p-3 xl:basis-1/5" style={{ minWidth: '65%' }}>
    //     <img className="w-full" src={logo} alt="Sunset in the mountains" />
    //     <div className="px-6 py-4">
    //       <h1 className="text-3xl mb-2 font-bold text-white"> Product Catalog App </h1>
    //       <p className="text-gray-700 text-white">
    //         by - <b style={{ color: 'orange' }}>Jason Delacruz, Sam Russett</b>
    //       </p>
    //       <div className="py-10">
    //         { (Categories) ? <p className='text-white'>Tags : </p> : ''}
    //         {
    //           Categories.map(tag => <button key={tag} className="inline-block bg-amber-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2" onClick={()=>{handleClick(tag)}}>{tag}</button>)
    //         }
    //       </div>
    //     </div>
    //   </div>
      <div className="ml-5  p-10 xl:basis-4/5">
        {console.log("Before render :",items.length,ProductsCategory.length)}
        {render_products(ProductsCategory)}
      </div>
    // </div>
  );

};
