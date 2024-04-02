import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
   const [products,setProducts]=useState([]);

   useEffect(()=>{
    Axios.get("http://127.0.0.1:5000/api/products")
    .then((res)=>{
      setProducts(res.data)
    })
    .catch()
   },[])
   const imgHandler=(evt)=>{
    evt.target.src="https://media.istockphoto.com/id/1318420912/vector/mock-up-screen-phone.jpg?s=612x612&w=0&k=20&c=z7RTcOE_vnT9eRcSEQhw0EVVRDb9JdDPaApfyO5nFxM="
   }
  return (
    <div className='mt-5'>
         <div className="row">
         {
          products.map((product)=>{
            return <div className="col-md-3 mt-3">
                 <div className="card">
                  <div className="card-header">
                    <img src={product.image} onError={imgHandler} style={{height:"200px"}} />
                  </div>
                  <div className="card-body">
                    <h5>{product.name}</h5>
                    <h5>{product.qty}</h5>
                    <h5>{product.info}</h5>
                  </div>
                 </div>
            </div>
          })
         }
         </div>
    </div>
  )
}

export default Products
