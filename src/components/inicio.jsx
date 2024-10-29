import React from "react";

const LoginForm = () => {
  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#0a0606" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <h4 className="mt-1 mb-5 pb-1 text-center">
                      The Elements Shop
                    </h4>

                    <form>
                      <p></p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Correo electronico"
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          Gmail
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Contraseña
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1 d-flex flex-column align-items-center">
                    <a href="/Shophomepage">
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 center"
                        type="button"
                      >
                        Iniciar sesión
                      </button>
                    </a>
                  </div>
                        <a className="text-muted" href="/password">
                          Recuperar contraseña?
                        </a>


                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <
                            p className="mb-0 me-2">No tienes cuenta?</p>
                          <a href="/registro">
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-outline-danger"
                            >
                              Crear una
                            </button>
                          </a>
                        </div>

                      
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
