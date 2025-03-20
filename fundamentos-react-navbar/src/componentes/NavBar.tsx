import React, { useState } from "react";
const Navbar = () => {
  return (
    <nav className="navbar bg-primary navbar-links" data-bs-theme="dark">
<ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link " aria-current="page" href="#">Inicio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Enlace 1</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Enlace 2</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Enlace 3</a>
  </li>
</ul></nav>
  );
  
};
export default Navbar;