import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className='bg-dark row justify-content-center align-items-center' >
    <div className='col d-flex justify-content-center align-items-center' >
      <h2 className='text-white' >Shop example</h2>
    </div>
    <div className='col d-flex justify-content-center align-items-center' >
      <Link className='link' to="">Shop</Link>
      <Link className='link' to="users">Cart</Link>
    </div>
    </nav>
  );
};

export default NavBar;