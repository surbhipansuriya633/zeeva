import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  console.log(scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* spacer */}
      <div className="header-space"></div>

      <div className={`custom-header`}>
        {/* <div className={`custom-header ${scrolled ? "scrolled" : ""}`}> */}
        <div className="container-fluid">
          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-lg-3 col-6 p-0">
              <div className="logo text-center">
                <img src={require('../Assets/Image/logo_png.png')} alt="logo" />
              </div>
            </div>

            {/* Menu */}
            <div className="col-lg-9 d-none d-lg-block pe-0 menuitem">
              <nav className="menu-box">
                <ul className="nav justify-content-evenly align-items-center">
                  <li className="nav-item"><NavLink className="nav-link alink fw-semibold" to="/"><FaHome /></NavLink></li>
                  <li className="nav-item"><NavLink to="/about" className="nav-link alink">About</NavLink></li>
                  <li className="nav-item"><Link className="nav-link alink fw-semibold" to="/">Industries</Link></li>
                  <li className="nav-item"><Link className="nav-link alink fw-semibold" to="/">Products</Link></li>
                  <li className="nav-item"><Link className="nav-link alink fw-semibold" to="/">Sustainability</Link></li>
                  <li className="nav-item"><Link className="nav-link alink fw-semibold" to="/">Contact</Link></li>
                </ul>
              </nav>
            </div>


            {/* Toggle Button (MD & below) */}
            <div className="col-6 d-lg-none">
              <div className="d-flex justify-content-end align-items-center">
                <Link className="fw-bold text-dark mx-3" to="/"><FaHome className="fs-4" /></Link>
                <button
                  className="menu-toggle"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobileMenu"
                >
                  <IoMenu className="fs-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close bg-light"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="mobile-menu">
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">About</Link></li>
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">Industries</Link></li>
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">Products</Link></li>
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">Sustainability</Link></li>
            <li className="nav-item"><Link className="nav-link alink fw-bold" to="/">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header