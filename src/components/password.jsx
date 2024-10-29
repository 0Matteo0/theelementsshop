import React from 'react';


const PasswordResetCard = () => {
  return (
    <div className="card text-center" style={{ width: '490px' }}>
      <div className="card-header h5 text-white bg-primary">Restablecer contraseña</div>
      <div className="card-body px-5">
        <p className="card-text py-2">
        Ingrese su dirección de correo electrónico y le enviaremos un correo electrónico con instrucciones para restablecer su contraseña.
        </p>
        <div data-mdb-input-init className="form-outline">
          <input type="email" id="typeEmail" className="form-control my-3" />
          <label className="form-label" htmlFor="typeEmail">Correo Electronico</label>
        </div>
        <a href="#" data-mdb-ripple-init className="btn btn-primary w-100">Enviar Correo</a>
        <div className="d-flex justify-content-between mt-4">
        </div>
      </div>
    </div>
  );
};

export default PasswordResetCard;
