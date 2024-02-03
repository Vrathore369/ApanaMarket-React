import React, { useEffect, useState }  from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Mobile = () => {
  const [mobiles, setMobiles] = useState([]);
  const { filter } = useParams();
  
  useEffect(() => {
    fetchMobileData();
  }, [filter]);

  const fetchMobileData = async () => {
    try {
      let response;
      if (filter) {
        // Brand-specific request
        response = await axios.get(`http://127.0.0.1:8000/api/mobile`);
      } else {
        // Generic request for all mobiles
        response = await axios.get(`http://127.0.0.1:8000/api/mobile/`)
        console.log(response.Oneplus);
      }
      console.log('Response data:', response.data);
      setMobiles(response.data.mobiles);
      console.log(setMobiles);
    } catch (error) {
      console.error('Error fetching mobile data:', error);
    }
  };
  if (mobiles) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-2 ">
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
              <Link to="/mobile/filter=Oneplus" className="dropdown-item">
                Oneplus
              </Link>
              <Link to="/mobile/filter=Apple" className="dropdown-item">
                Apple
              </Link>
              <Link to="/mobile/filter=Samsung" className="dropdown-item">
                Samsung
              </Link>
              <Link to="/mobile/filter=Google" className="dropdown-item">
                Google
              </Link>
              <Link to="/mobile/filter=Redmi" className="dropdown-item">
                Redmi
              </Link>
              <Link to="/mobile/filter=Oppo" className="dropdown-item">
                Oppo
              </Link>
              <Link to="/mobile/filter=Realme" className="dropdown-item">
                Realme
              </Link>
              <Link to="/mobile/filter=Vivo" className="dropdown-item">
                Vivo
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
              <Link to="/mobile/filter=low_to_high" className="dropdown-item">
                Price: Low to High
              </Link>
              <Link to="/mobile/filter=high_to_low" className="dropdown-item">
                Price: High to Low
              </Link>
              <Link to="/mobile/filter=below_10000" className="dropdown-item">
                Below 10000
              </Link>
              <Link to="/mobile/filter=below_20000" className="dropdown-item">
                Below 20000
              </Link>
              <Link to="/mobile/filter=below_30000" className="dropdown-item">
                Below 30000
              </Link>
              <Link to="/mobile/filter=below_50000" className="dropdown-item">
                Below 50000
              </Link>
              <Link to="/mobile/filter=above_50000" className="dropdown-item">
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
              <Link to="/mobile/filter=customer_rating" className="dropdown-item">
                Customer Rating
              </Link>
              <Link to="/mobile/filter=customer_review" className="dropdown-item">
                Customer Reviews
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            {mobiles.map((m) => (
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
                      <img src={`http://127.0.0.1:8000${m.product_image}`} alt="" className="p-img" />
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
          </div>
        </div>
      </div>
    </div>
  );}
};

export default Mobile;
