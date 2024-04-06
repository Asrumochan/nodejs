import React, { Fragment } from 'react'
import {Link,BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Products from './Products/Products'
import Admin from './Products/Admin'
import CreateProduct from './Products/CreateProduct'
import UpdateProduct from './Products/UpdateProduct'
import Cart from './Products/cart'

const App = () => {
 return <Fragment>
  <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
        <Link to="/" className='navbar-brand'>Product Cart</Link>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li><Link  className='nav-link' to="/products">Products</Link></li>
            <li><Link className='nav-link' to="/create">New Product</Link></li>
            <li><Link  className='nav-link' to="/admin">Admin</Link></li>
          </ul>
        </div>
        <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' }} />
        <p style={{color:"white"}}>{0}</p>
        </nav>
        <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/create" element={<CreateProduct/>} />
        <Route path="/update" element={<UpdateProduct/>} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
  </Router>
       </Fragment>
}

export default App