import React from 'react';
import { Link } from 'react-router-dom';

const Laptop = ({ laptops }) => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 fixed">
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brands
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <Link to="/laptop/filter=Acer" className="dropdown-item">
                Acer
              </Link>
              <Link to="/laptop/filter=Apple" className="dropdown-item">
                Apple
              </Link>
              <Link to="/laptop/filter=Samsung" className="dropdown-item">
                Samsung
              </Link>
              <Link to="/laptop/filter=HP" className="dropdown-item">
                HP
              </Link>
              <Link to="/laptop/filter=Lenovo" className="dropdown-item">
                Lenovo
              </Link>
              <Link to="/laptop/filter=Dell" className="dropdown-item">
                Dell
              </Link>
              <Link to="/laptop/filter=Asus" className="dropdown-item">
                Asus
              </Link>
              <Link to="/laptop/filter=MSI" className="dropdown-item">
                MSI
              </Link>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button
              className="btn btn-info dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <Link to="/laptop/filter=low_to_high" className="dropdown-item">
                Price: Low to High
              </Link>
              <Link to="/laptop/filter=high_to_low" className="dropdown-item">
                Price: High to Low
              </Link>
              <Link to="/laptop/filter=below_20000" className="dropdown-item">
                Below 20000
              </Link>
              <Link to="/laptop/filter=below_30000" className="dropdown-item">
                Below 30000
              </Link>
              <Link to="/laptop/filter=below_40000" className="dropdown-item">
                Below 40000
              </Link>
              <Link to="/laptop/filter=below_50000" className="dropdown-item">
                Below 50000
              </Link>
              <Link to="/laptop/filter=above_50000" className="dropdown-item">
                Above 50000
              </Link>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Feedback
            </button>
            <ul className="dropdown-menu dropdown-menu-center-light">
              <Link to="/laptop/filter=customer_rating" className="dropdown-item">
                Customer Rating
              </Link>
              <Link to="/laptop/filter=customer_review" className="dropdown-item">
                Customer Reviews
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          {/* <div className="row">
            {laptops.map((m) => (
              <div key={m.id} className="col-md-4 text-center mb-4">
                <Link to={`/product-detail/${m.title}`} className="btn">
                  <div className="item">
                    <div
                      style={{
                        height: '180px',
                        width: '180px',
                        position: 'relative',
                        margin: '0 auto',
                      }}
                    >
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
                      ₹{m.discounted_price}{' '}
                      <small className="fw-light text-decoration-line-through">
                        ₹{m.selling_price}
                      </small>
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

export default Laptop;
