import React, { useState } from 'react'

const CreateProduct = () => {
  const [product,setProduct]=useState({name:"",image:"",price:0,qty:0,info:""})
  const addProduct=(evt)=>{
      evt.preventDefault();
  }
  const updateHandler=(evt)=>{
      setProduct({...product,[evt.target.name]:evt.target.value})
  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-10">
            <div className="card">
              <div className="card-header">
                <h1>Add Product</h1>
              </div>
              <div className="card-body ">
                <pre>{JSON.stringify(product)}</pre>
                <form className='form' onSubmit={addProduct}>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control ' type="text" placeholder='Enter name of the product ' onChange={updateHandler} name="name"/>
                  </div>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control' type="text" placeholder='Upload File' onChange={updateHandler} name="image"/>
                  </div>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control' type="number" placeholder='Enter price of the product' onChange={updateHandler} name="price" />
                  </div>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control' type="number" placeholder='Enter quantity' onChange={updateHandler} name="qty"/>
                  </div>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control' type="text" placeholder='Enter Info' onChange={updateHandler} name="info"/>
                  </div>
                  <div className="form-group mt-4">
                    <input className='form-control btn btn-primary' type="submit" value='Add Product' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
