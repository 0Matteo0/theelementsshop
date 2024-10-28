import React from "react";

function Cart() {
  return (
    <div className="Cart">
      <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Carrito De Compra - 2 objetos</h5>
          </div>
          <div class="card-body">
            
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: 'rgba 251, 251, 251, 0.2' }} ></div>
                  </a>
                </div>
                
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                
                <p><strong>Camisa De Cuello Azul</strong></p>
                <p>Color: Azul</p>
                <p>Talla: M</p>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              
                <div class="d-flex mb-4" style={{maxWidth: '300px' }}>
                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div data-mdb-input-init class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Cantidad</label>
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                
                <p class="text-start text-md-center">
                  <strong>$74.000</strong>
                </p>
                
              </div>
            </div>
            

            <hr class="my-4" />

            
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <div class="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}></div>
                </div>
                
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                
                <p><strong>Camiseta Roja</strong></p>
                <p>Color: rojo</p>
                <p>Talla: M</p>

                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
                
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                
                <div class="d-flex mb-4" style={{maxWidth: '300px'}}>
                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                  </button>

                  <div data-mdb-input-init class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                    <label class="form-label" for="form1">Cantidad</label>
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                
                <p class="text-start text-md-center">
                  <strong>$74.000</strong>
                </p>
                
              </div>
            </div>
            
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body">
            <p><strong>Entrega de envío prevista</strong></p>
            <p class="mb-0">12.10.2024 - 14.10.2024</p>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>Nosotros Aceptamos</strong></p>
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Resumen</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Productos
                <span>$148.000</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Envio
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Monto Total</strong>
                  <strong>
                    <p class="mb-0">(Incluyendo el IVA)</p>
                  </strong>
                </div>
                <span><strong>$148.000</strong></span>
              </li>
            </ul>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block">
              Ir A Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
export default Cart;