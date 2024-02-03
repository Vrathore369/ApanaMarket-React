import React from 'react';
import { Link } from 'react-router-dom';

const ElectricalAppliances = ({ elect }) => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 fixed">
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <Link to="/electricappliances/filter=Television" className="dropdown-item">Television</Link>
              <Link to="/electricappliances/filter=Air_Conditioner" className="dropdown-item">Air Conditioner</Link>
              <Link to="/electricappliances/filter=Refrigerator" className="dropdown-item">Refrigerator</Link>
              <Link to="/electricappliances/filter=Washing_Machine" className="dropdown-item">Washing Machine</Link>
              <Link to="/electricappliances/filter=Audio" className="dropdown-item">Audio</Link>
              <Link to="/electricappliances/filter=Gaming" className="dropdown-item">Gaming</Link>
              <Link to="/electricappliances/filter=Laptop_Accessories" className="dropdown-item">Laptop Accessories</Link>
              <Link to="/electricappliances/filter=Camera_Accessories" className="dropdown-item">Camera Accessories</Link>
              <Link to="/electricappliances/filter=Others" className="dropdown-item">Others</Link>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/electricappliances/filter=low_to_high" class="dropdown-item">Price:Low to High</Link>
            <Link to="/electricappliances/filter=high_to_low" class="dropdown-item">Price:High to Low</Link>
            <Link to="/electricappliances/filter=below_100" class="dropdown-item">Below 100</Link>
            <Link to="/electricappliances/filter=below_200" class="dropdown-item">Below 200</Link>
            <Link to="/electricappliances/filter=below_500" class="dropdown-item">Below 500</Link>
            <Link to="/electricappliances/filter=below_1000" class="dropdown-item">Below 1000</Link>
            <Link to="/electricappliances/filter=below_2000" class="dropdown-item">Below 2000</Link>
            <Link to="/electricappliances/filter=below_5000" class="dropdown-item">Below 5000</Link>
            <Link to="/electricappliances/filter=below_10000" class="dropdown-item">Below 10000</Link>
            <Link to="/electricappliances/filter=below_25000" class="dropdown-item">Below 25000</Link>
            <Link to="/electricappliances/filter=above_25000" class="dropdown-item">Above 25000</Link>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Feedback
            </button>
            <ul class="dropdown-menu dropdown-menu-center-light">
              <Link to="/electricappliances/filter=customer_rating" class="dropdown-item">Customer Rating</Link>
              <Link to="/electricappliances/filter=customer_review" class="dropdown-item">Customer Reviews</Link>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          {/* <div className="row">
            {elect.map((m) => (
              <div className="col-md-4 text-center mb-4" key={m.id}>
                <Link to={`/product-detail/${m.title}`} className="btn">
                  <div className="item">
                    <div style={{ height: '180px', width: '180px', position: 'relative', margin: '0 auto' }}>
                      <img src={m.product_image.url} alt="" className="p-img" />
                    </div>
                    <div className="product-desc">
                      <span className="product-title">{m.title}</span>
                      <span className="badge bg-success">
                        {m.rating}
                        <i className="ri-star-fill"></i>
                      </span>
                      <span className="product-review">{m.review}</span>
                    </div>
                    <div className="fw-bold">
                      ₹{m.discounted_price} <small className="fw-light text-decoration-line-through">₹{m.selling_price}</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ElectricalAppliances;
