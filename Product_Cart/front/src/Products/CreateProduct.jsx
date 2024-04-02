import Axios  from 'axios';
import React, { useState,useRef  } from 'react'

const CreateProduct = () => {
  const [product,setProduct]=useState({name:"",image:"",price:0,qty:0,info:""})
  const [imageString, setImageString] = useState('');
  const formRef = useRef(null);
  const addProduct=(evt)=>{
      evt.preventDefault();
      Axios.post("http://127.0.0.1:5000/api/products",product)
      .then((resp)=>{
        console.log(resp.data)
        formRef.current.reset()
      })
      .catch((err)=>{
        console.log(err)
      })
      
  }
  const updateHandler=(evt)=>{
      setProduct({...product,[evt.target.name]:evt.target.value})
  }
 
    const handleImageChange = (event) => {
      const maxSize = 0.1 * 1024 * 1024; // 5MB (adjust as needed)
  
 
      const file = event.target.files[0];
      if (file.size > maxSize) {
        alert("Please select an image file smaller than 100KB."); // or set an error message
        return;
      }
      const reader = new FileReader();
     
      reader.onload = (event) => {
        const imageData = event.target.result;
        setImageString(imageData);
        setProduct({...product,image:imageData})
      };
      reader.readAsDataURL(file);
    };
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
                {/* <pre>{JSON.stringify(product)}</pre> */}
                <form className='form' onSubmit={addProduct} ref={formRef} >
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control ' type="text" placeholder='Enter name of the product ' onChange={updateHandler} name="name"/>
                  </div>
                  <div className="form-group mt-4 border border-primary">
                  <input className='form-control' type="file" placeholder='Upload File' onChange={handleImageChange} name="image"/>
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
