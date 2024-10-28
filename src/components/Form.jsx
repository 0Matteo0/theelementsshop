import React, { useState } from "react";
import { alignPropType } from "react-bootstrap/esm/types";
import { Link } from "react-router-dom";
import axios from "axios";

function Form() {
  const [formRegister, setFormRegister] = useState({});

  const peticionPost = async () => {
    console.log(formRegister)
    await axios
      .post("http://localhost:4001/api/clientes", formRegister)
      .then((response) => {
        alert(`Bienvenido`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleChange = async (e) => {
    await setFormRegister({
        ...formRegister,
        [e.target.name]: e.target.value,
      });
  };

  return (
    <div className="Form">
      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        The Elements Shop Registrate Ahora
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            class="form-outline flex-fill mb-0"
                          >
                            Nombre
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              name="nombre"
                              onChange={handleChange}
                            />
                            <label
                              class="form-label"
                              for="form3Example1c"
                            ></label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            class="form-outline flex-fill mb-0"
                          >
                            Apellido
                            <input
                              type="text"
                              id="form3Example4c"
                              class="form-control"
                              name="apellido"
                              onChange={handleChange}
                            />
                            <label
                              class="form-label"
                              for="form3Example4c"
                            ></label>
                          </div>
                        </div>


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            class="form-outline flex-fill mb-0"
                          >
                            Correo Electronico
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              name="correo_electronico"
                              onChange={handleChange}
                            />
                            <label
                              class="form-label"
                              for="form3Example3c"
                            ></label>
                          </div>
                        </div>


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            class="form-outline flex-fill mb-0"
                          >
                            Contraseña
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              name="contraseña"
                              onChange={handleChange}
                            />
                            <label
                              class="form-label"
                              for="form3Example4c"
                            ></label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            class="form-outline flex-fill mb-0"
                          >
                            Telefono
                            <input
                              type="text"
                              id="form3Example4cd"
                              class="form-control"
                              name="telefono"
                              onChange={handleChange}
                            />
                            <label class="form-label" for="form3Example4cd">
                              ¿Ya Tienes Cuenta?
                              <a href="#¡">Inicia Sesion</a>
                            </label>
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label class="form-check-label" for="form2Example3">
                            Yo Acepto Todos los{" "}
                            <a href="#!">Terminos Y Servicios</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to="/Shophomepage">
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              class="btn btn-primary btn-lg"
                              onClick={peticionPost}
                            >
                              Registrarse
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Form;
