import React from 'react';
import { Link } from 'react-router-dom';

const Grocery = ({ grocery }) => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 fixed">
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/grocery/filter=Foodgrains" class="dropdown-item">Foodgrains</Link>
            <Link to="/grocery/filter=Snacks_&_Beverages" class="dropdown-item">Snacks & Beverages</Link>
            <Link to="/grocery/filter=Packaged_Food" class="dropdown-item">Packaged Food</Link>
            <Link to="/grocery/filter=Personal_&_Baby_Care" class="dropdown-item">Personal Care</Link>
            <Link to="/grocery/filter=Household_Care" class="dropdown-item">Household Care</Link>
            <Link to="/grocery/filter=Dairy_Products" class="dropdown-item">Dairy Products</Link>
            <Link to="/grocery/filter=Home_&_Kitchen" class="dropdown-item">Home & Kitchen</Link>
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/grocery/filter=low_to_high" class="dropdown-item">Price:Low to High</Link>
            <Link to="/grocery/filter=high_to_low" class="dropdown-item">Price:High to Low</Link>
            <Link to="/grocery/filter=below_50" class="dropdown-item">Below 50</Link>
            <Link to="/grocery/filter=below_100" class="dropdown-item">Below 100</Link>
            <Link to="/grocery/filter=below_200" class="dropdown-item">Below 200</Link>
            <Link to="/grocery/filter=below_300" class="dropdown-item">Below 300</Link>
            <Link to="/grocery/filter=below_500" class="dropdown-item">Below 500</Link>
            <Link to="/grocery/filter=above_500" class="dropdown-item">Above 500</Link>
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Feedback
            </button>
            <ul class="dropdown-menu dropdown-menu-center-light">
            <Link to="/grocery/filter=customer_rating" class="dropdown-item">Customer Rating</Link>
    <Link to="/grocery/filter=customer_review" class="dropdown-item">Customer Reviews</Link>
          </ul>
          </div>
        </div>

        <div className="col-md-10">
          {/* <div className="row">
            {grocery.map((m) => (
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

export default Grocery;
