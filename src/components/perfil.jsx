import React from 'react';
import '../styles/main.css';

const UserProfileSection = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: '#161413' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div 
                  className="col-md-4 gradient-custom text-center text-red" 
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}
                >
                  <img 
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar" 
                    className="img-fluid my-5" 
                    style={{ width: '80px' }} 
                  />
                  <h5>Samuel andrade</h5>
                  <p>Perfil</p>
                  <i className="far fa-edit mb-5"></i>
                </div>
                <div className="col-md-8">
                    <h6></h6>
                  <div className="card-body p-4">
                    <h6>Informacion</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>gmail</h6>
                        <p className="text-muted">info@example.com</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Numero telefonico</h6>
                        <p className="text-muted">314 456 789</p>
                      </div>
                    </div>
                    <h6></h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6></h6>
                        <p className="text-muted"></p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6></h6>
                        <p className="text-mutedG"></p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                      <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                    </div>
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

export default UserProfileSection;
