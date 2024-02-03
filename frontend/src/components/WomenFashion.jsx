import React from 'react';
import { Link } from 'react-router-dom';

const WomenFashion = ({ womens }) => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 fixed">
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Top Wears
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/fashion/womens/filter=T-Shirts" class="dropdown-item">T-Shirts</Link>
    <Link to="/fashion/womens/filter=Sarees" class="dropdown-item">Sarees</Link>
    <Link to="/fashion/womens/filter=Winter_Wears" class="dropdown-item">Winter Wears</Link>
    <Link to="/fashion/womens/filter=Tops" class="dropdown-item">Tops</Link>
    <Link to="/fashion/womens/filter=Kurtas" class="dropdown-item">Kurtas</Link>  
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bottom Wears
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/fashion/womens/filter=Jeans" class="dropdown-item">Jeans</Link>
    <Link to="/fashion/womens/filter=Trousers" class="dropdown-item">Trousers</Link>
    <Link to="/fashion/womens/filter=Trackpants" class="dropdown-item">Trackpants</Link>
    <Link to="/fashion/womens/filter=Shoes" class="dropdown-item">Shoes</Link>
    <Link to="/fashion/womens/filter=Slippers" class="dropdown-item">Slippers</Link>
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Accessories
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/fashion/womens/filter=Purse" class="dropdown-item">Purse</Link>
    <Link to="/fashion/womens/filter=Watches" class="dropdown-item">Watches</Link>
    <Link to="/fashion/womens/filter=Sunglasses" class="dropdown-item">Sunglasses</Link>
    <Link to="/fashion/womens/filter=Belts" class="dropdown-item">Belts</Link>
    <Link to="/fashion/womens/filter=Jewellery" class="dropdown-item">Jewellery</Link>
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul class="dropdown-menu dropdown-menu-light">
            <Link to="/fashion/womens/filter=low_to_high" class="dropdown-item">Price:Low to High</Link>
    <Link to="/fashion/womens/filter=high_to_low" class="dropdown-item">Price:High to Low</Link>
    <Link to="/fashion/womens/filter=below_100" class="dropdown-item">Below 100</Link>
    <Link to="/fashion/womens/filter=below_200" class="dropdown-item">Below 200</Link>
    <Link to="/fashion/womens/filter=below_500" class="dropdown-item">Below 500</Link>
    <Link to="/fashion/womens/filter=below_1000" class="dropdown-item">Below 1000</Link>
    <Link to="/fashion/womens/filter=below_2000" class="dropdown-item">Below 2000</Link>
    <Link to="/fashion/womens/filter=above_2000" class="dropdown-item">Above 2000</Link>
        </ul>
          </div>

          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Feedback
            </button>
            <ul class="dropdown-menu dropdown-menu-center-light">
            <Link to="/fashion/womens/filter=customer_rating" class="dropdown-item">Customer Rating</Link>
    <Link to="/fashion/womens/filter=customer_review" class="dropdown-item">Customer Reviews</Link>
          </ul>
          </div>
        </div>

        {/* Product Listing */}
        <div className="col-md-10">
          {/* <div className="row">
            {mens.map((m) => (
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

export default WomenFashion;
