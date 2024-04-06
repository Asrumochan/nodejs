import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

const Cart = () => {
  const location = useLocation();
  const [products,setProducts]=useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(()=>{
    Axios.get(`http://127.0.0.1:5000/api/products/${location.state}`)
    .then((res)=>{
      setProducts([res.data])
     })
    .catch()
  },[])
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = products.reduce((acc, product) => {
        return acc + product.price * product.qty;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [products]);
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-10">
        <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total_Price</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((product)=>{
                  return <tr key={product._id}>
                          <td>{product.name}</td>
                          <td><img src={product.image} height='50px' alt="" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>{product.price*product.qty}</td>
                  </tr>
                })
              }
            </tbody>
        </table>
        </div>
      </div>
        {totalPrice}
    </div>
  )
}

export default Cart
