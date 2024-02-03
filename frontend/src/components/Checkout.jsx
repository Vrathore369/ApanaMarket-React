import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, add, productCountInCart, totalPrice, shippingPrice, finalPrice, finalSavingPrice }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    // You can use state or a form library like Formik to manage form data
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <h4>Order Summary</h4>
          <hr />
          {/* {cart.map((p, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">
                <div className="row">
                  <Link to={`/product-detail/${p.product.title}`} className="col-md-4 text-center align-self-center">
                    <div style={{ height: '180px', width: 'auto', position: 'relative', margin: '0 auto' }}>
                      <img src={p.product.productImage.url} alt="" className="img-fluid p-img" />
                    </div>
                  </Link>
                  <div className="col-md-8 my-3">
                    <div>
                      <Link className="heading" to={`/product-detail/${p.product.title}`}>
                        <h5>{p.product.title.length > 40 ? `${p.product.title.slice(0, 40)}...` : p.product.title}</h5>
                      </Link>
                      <div className="fs-6">
                        <label className="text-primary">Delivery Time: </label>
                        <span className="my-2 mx-2">7 Days</span>
                        <br />
                        <label className="text-primary">Ratings & Reviews: </label>
                        <span className="badge bg-success small my-2"> {p.product.rating} &#9733;</span>
                        <span className="small">{p.product.review} Reviews</span>
                        <br />
                        <div className="mb-2">
                          <label htmlFor="quantity">Quantity:</label>
                          <form action={`/minus-cart/${p.product.id}`} className="d-inline">
                            <input type="hidden" name="prod_id" value={p.product.id} id={`prod_id_${index}`} />
                            <button type="submit" className="btn text-dark"><i className="fas fa-minus-square fa-lg"></i></button>
                          </form>
                          <span id="quantity">{p.quantity}</span>
                          <form action={`/plus-cart/${p.product.id}`} className="d-inline">
                            <input type="hidden" name="prod_id" value={p.product.id} id={`prod_id_${index}`} />
                            <button type="submit" className="btn text-dark"><i className="fas fa-plus-square fa-lg"></i></button>
                          </form>
                        </div>
                        <label className="text-primary">Product Price: </label>
                        <span className="my-2 mx-2">₹{p.total_cost}</span>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          <small className="mb-5">Terms and Condition: ApnaMarket Foundation is a Section 8 company registered under the Companies Act 2013. ApnaMarket Internet Pvt. Ltd may not share your Personal Identifiable Information which may include your name, phone number, etc with ApnaMarket Foundation.</small>
        </div>
        <div className="col-md-4 offset-md-1">
          <h4>Select Shipping Address</h4>
          <hr />
          {/* {add.length === 0 ? ( */}
            <>
              <h5 className="text-primary">No Address found, to add your Address</h5>
              <div className="text-primary text-center mb-4"><Link to="/profile">visit here</Link></div>
            </>
          {/* ) : ( */}
            {/* <form action="/payment/" onSubmit={handleSubmit}>
              {add.map((p, index) => (
                <div key={index} className="card">
                  <div className="card-body">
                    <h5 className="text-primary"><Link to="/address">{p.name}</Link></h5>
                    <p>{`${p.locality}, ${p.city}, ${p.state} - ${p.zipcode}`}</p>
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="custid"
                        id={`custadd_${index}`}
                        value={p.id}
                        required
                      />
                      <label className="form-check-label" htmlFor={`custadd_${index}`}>
                        Select Address: {index + 1}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
              <div className="card">
                <div className="card-body">
                  <h3>Price Details</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 fs-5">
                      Price ({productCountInCart === 1 ? `${productCountInCart} item` : `${productCountInCart} items`})
                      <span>₹{totalPrice}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 fs-5">
                      Delivery Charges {shippingPrice === 0 ? <span className="text-success2">Free</span> : <span>₹{shippingPrice}</span>}
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3 fs-5">
                      <div>
                        <strong>Total Payable</strong> <small>(including GST)</small>
                      </div>
                      <span><strong className="cart-price">₹{finalPrice}</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-warning mt-3 px-5 fw-bold">Continue</button>
              </div>
            </form> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
