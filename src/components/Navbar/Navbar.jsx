import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
        <div className="container-fluid ms-5 me-5">
          <NavLink to='/' className="underline"> 
            <img src={"./logotipo.png"} className="logotipo"/>
            <a className="navbar-brand" href="#" >Eureka</a>
          </NavLink>
          <button className="navbar-toggler" type="but ton" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink to='categoria/consultoria' className="underline">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Consultoria</a>
                </li>
              </NavLink>
              <NavLink to='categoria/staffing' className="underline">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Staffing</a>
                </li>
              </NavLink>
              <NavLink to='categoria/celulas' className="underline">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Celulas</a>
                </li>
              </NavLink>

              <li className="nav-item">
                <a className="nav-link active" href="#">Nosotros</a>
              </li>
            </ul>
          </div>
          <NavLink to='cart' >
            <CartWidget/>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar