import React from 'react';
import { Link } from 'react-router-dom';

const ToysPage = ({ toys }) => {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 fixed">
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <li><Link to="/toys/filter=Soft_Toys" className="dropdown-item">Soft Toys</Link></li>
              <li><Link to="/toys/filter=Remote_Control_Toys" className="dropdown-item">Remote Control Toys</Link></li>
              <li><Link to="/toys/filter=Puzzles" className="dropdown-item">Puzzles</Link></li>
              <li><Link to="/toys/filter=Board_Games" className="dropdown-item">Board Games</Link></li>
              <li><Link to="/toys/filter=Learning_Toys" className="dropdown-item">Learning Toys</Link></li>
              <li><Link to="/toys/filter=Baby_Toys" className="dropdown-item">Baby Toys</Link></li>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Price
            </button>
            <ul className="dropdown-menu dropdown-menu-light">
              <li><Link to="/toys/filter=low_to_high" className="dropdown-item">Price: Low to High</Link></li>
              <li><Link to="/toys/filter=high_to_low" className="dropdown-item">Price: High to Low</Link></li>
              <li><Link to="/toys/filter=below_100" className="dropdown-item">Below 100</Link></li>
              <li><Link to="/toys/filter=below_200" className="dropdown-item">Below 200</Link></li>
              <li><Link to="/toys/filter=below_500" className="dropdown-item">Below 500</Link></li>
              <li><Link to="/toys/filter=below_1000" className="dropdown-item">Below 1000</Link></li>
              <li><Link to="/toys/filter=below_2000" className="dropdown-item">Below 2000</Link></li>
              <li><Link to="/toys/filter=above_2000" className="dropdown-item">Above 2000</Link></li>
            </ul>
          </div>
          <div className="dropdown d-flex flex-column justify-content-center m-3">
            <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Feedback
            </button>
            <ul className="dropdown-menu dropdown-menu-center-light">
              <li><Link to="/toys/filter=customer_rating" className="dropdown-item">Customer Rating</Link></li>
              <li><Link to="/toys/filter=customer_review" className="dropdown-item">Customer Reviews</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          {/* <div className="row">
            {toys.map((toy) => (
              <div key={toy.id} className="col-md-4 text-center mb-4">
                <Link to={`/product-detail/${toy.title}`} className="btn">
                  <div className="item">
                    <div style={{ height: '180px', width: '180px', position: 'relative', margin: '0 auto' }}>
                      <img src={toy.product_image.url} alt="" className="p-img" />
                    </div>
                    <div className="product-desc">
                      <span className="product-title">{toy.title}</span>
                      <span className="badge bg-success">{toy.rating}<i className="ri-star-fill"></i></span>
                      <span className="product-review">{toy.review}</span>
                    </div>
                    <div className="fw-bold">₹{toy.discounted_price} <small className="fw-light text-decoration-line-through">₹{toy.selling_price}</small></div>
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

export default ToysPage;
