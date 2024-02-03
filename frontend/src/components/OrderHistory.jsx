import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = ({ op }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <h3>Welcome User</h3>
        <div className="col-md-2 border-end">
          <ul className="list-unstyled">
            <li className="d-grid">
              <Link to="/orders" className="btn btn-primary">
                My Orders
              </Link>
            </li>
          </ul>
        </div>
        {/* {op.length === 0 && ( */}
          <div className="col-lg-6 text-center">
            <h1 className="text-center">No Order Placed</h1>
          </div>
        {/* )} */}
        {/* <div className="col-md-9">
          {op.map((p) => (
            <div key={p.id} className="row shadow-md mb-3">
              <Link
                to={`/product-detail/${p.product.title}`}
                className="col-md-4 text-center align-self-center"
              >
                <div
                  style={{
                    height: '180px',
                    width: 'auto',
                    position: 'relative',
                    margin: '0 auto',
                  }}
                >
                  <img src={p.product.product_image.url} alt="" className="img-fluid p-img" />
                </div>
              </Link>
              <div className="col-md-7">
                <div>
                  <div>
                    <Link className="heading" to={`/product-detail/${p.product.title}`}>
                      <h5 className="mt-2">{p.product.title}</h5>
                    </Link>
                    <div className="my-2 fs-6">
                      <label className="text-primary">Product Price: </label>
                      <span className="my-2 mx-2">₹{p.product.discounted_price}</span>
                      <label className="text-primary ms-2">Product Quantity: </label>
                      <span className="my-2 mx-2">{p.quantity}</span>
                      <br />
                      <label className="text-primary">Order ID: </label>
                      <span className="my-2 mx-2">{p.order_id}</span>
                      <br />
                      <label className="text-primary">Order Date & Time: </label>
                      <span className="my-2 mx-2">{p.ordered_date}</span>
                      <br />
                      <label className="text-primary">Customer Name: </label>
                      <span className="my-2 mx-2">{p.customer.name}</span>
                      <br />
                      <div>
                        <Link style={{ textDecoration: 'none' }} to={`download-invoice/${p.id}`}>
                          <button className="btn btn-warning btn-sm mt-2">Download Invoice</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {p.status === 'Accepted' && (
                    <div className="progress my-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: '25%' }}>{p.status}</div>
                    </div>
                  )}
                  <hr />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default OrderHistory;
