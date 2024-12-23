import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/styles.css";
import logo2 from "../images/background.jpg";

const ShopHomepage = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            The Elements Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      Todos Los Productos
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Lo Nuevo
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
            <a href="/Perfil" className="btn btn-outline-dark">

            Perfil
          </a>
          <br />

                      <a href="/Cart" className="btn btn-outline-dark">
            <i className="bi-cart-fill me-1"></i>
            Carrito
            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
          </a>

            </form>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Compra Con Estilo</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Diseños que marcan la diferencia{" "}
            </p>
          </div>
        </div>
      </header>

      {/* Section */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {Array(1)
              .fill()
              .map((_, index) => (
                <div className="col mb-5" key={index}>
                  <div className="card h-100">
                    {/* Sale badge */}
                    {index % 2 === 0 && (
                      <div
                        className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}
                      >
                        Sale
                      </div>
                    )}
                    {/* Product image */}
                    <img className="card-img-top" src={logo2} alt="" />
                    {/* Product details */}
                    <div className="card-body p-4">
                      <div className="text-center">
                        {/* Product name */}
                        <h5 className="fw-bolder">Camiseta Basica</h5>
                        <h9 className="diseñador">ShirtsDomik</h9>
                        {/* Product price */}
                        <div>
                          <br />
                          {index % 2 === 0 ? (
                            <span className="text-muted text-decoration-line-through">
                              $50.00
                            </span>
                          ) : null}
                          {index % 2 === 0 ? (
                            <span>$25.00</span>
                          ) : (
                            <span>$40.00</span>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <a className="btn btn-outline-dark mt-auto" href="/Details12">
                          View options
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; The Elements 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default ShopHomepage;
