import React from "react";
import "../styles/styles.css"; // Adjust the import path as needed

const App = () => {
  return (
    <div id="page-top">
      {/* Navigation */}
      {/* <nav
        className="navbar navbar-expand- navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            The Elements Shop
          </a>

          <div
            className="collapse navbar-collapse"
            id="navbarResponsive"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Iniciar Sesion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Registrarse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav class="navbar navbar-expand-lg fixed-top bg-gradient">
        <a class="navbar-brand" href="#">
              The Elements Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                --Iniciar Sesion
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/registro">
                --Registrarse
              </a>
            </li>
            <li class="nav-item">
              
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/registrotrabajador">
                --Registrarse como vendedor
              </a>
            </li>
            <li class="nav-item">
              
              
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
            >
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Tu tienda favorita para encontrar prendas innovadoras
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                En The Elements Shop nos caracterizamos por la calidad de
                nuestras prendas, provenientes de diseñadores emeregentes pero
                con un talento inimaginable
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Mas informacion
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Tenemos lo que buscas!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Aqui encontraras lo que buscas ya que manejamos variedad de
                productos nuevos que no estan en ningun otro lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">Lo Que Ofrecemos</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Diseñadores Emergentes</h3>
                <p className="text-muted mb-0">
                  Nos caracterizamos por impulsar a Diseñadores
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Prendas Nuevas</h3>
                <p className="text-muted mb-0">
                  El estilo más nuevo y fresco que encontraras
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Calidad Garantizada</h3>
                <p className="text-muted mb-0">
                  The Elements Shop revisa de manera minuciosa la calidad de
                  cada prenda{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Entrega Segura</h3>
                <p className="text-muted mb-0">
                  Nos aseguramos de que cada pedido llegue en perfectas
                  condiciones a cada comprador.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
