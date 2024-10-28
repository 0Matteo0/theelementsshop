import React from "react";
import "../styles/styles.css"; // Adjust the import path as needed

const Registrotrabajo = () => {
      return (
        <section className="vh-100" style={{ backgroundColor: '#3c2742' }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-9">
    
                <h5 className="text-white mb-4">Envia tu solicitud para trabajar con nosotros</h5>
    
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body">
    
                    <div className="row align-items-center pt-4 pb-3">
                      <div className="col-md-3 ps-5">
                        <h7 className="mb-0">Nombre Completo</h7>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="text" className="form-control form-control-lg" />
                      </div>
                    </div>
    
                    <hr className="mx-n3" />
    
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h7 className="mb-0">Correo Electronico</h7>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />
                      </div>
                    </div>
    
                    <hr className="mx-n3" />
    
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h7 className="mb-0">Contraseña</h7>
                      </div>
                      <div className="col-md-9 pe-5">
                        <textarea className="form-control" rows="3" placeholder="Contraseña"></textarea>
                      </div>
                    </div>
    
                    <hr className="mx-n3" />
    
                    <div className="row align-items-center py-3">
                      <div className="col-md-3 ps-5">
                        <h6 className="mb-0">Foto de su Documento de identidad</h6>
                      </div>
                      <div className="col-md-9 pe-5">
                        <input className="form-control form-control-lg" id="formFileLg" type="file" />
                        <div className="small text-muted mt-2">
                          Sube tu documento, MAX 50MB
                        </div>
                      </div>
                    </div>
    
                    <hr className="mx-n3" />
    
                    <div className="px-5 py-4">
                      <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">
                        Enviar Solicitud
                      </button>
                    </div>
    
                  </div>
                </div>
    
              </div>
            </div>
          </div>
        </section>
      );
    };
    
    
export default Registrotrabajo;
