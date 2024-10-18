import React from "react";
import Logo from '../images/logo.png';


function Header() {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" className="LOGO1">
          <img src={Logo}
          
          />

          


          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="" class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                   👕 Camisetas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                👖 Pantalones
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                🧥 Chaquetas
                </a>
              </li>

                <a class="nav-link" href="#">
                  👟 Zapatos
                </a>
                
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
