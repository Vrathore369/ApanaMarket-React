import React from 'react';

const SearchResults = ({ searchProd, query }) => {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          {/* {searchProd.length === 0 ? ( */}
            <h1 className="text-center mb-12">No Search results found for "{query}"</h1>
          {/* ) : ( */}
            {/* <><h1 className="text-center mb-3">Here are your search results</h1><div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h3>{`Showing ${searchProd.length} results found for "${query}"`}</h3>
                    {searchProd.map((p) => (
                      <div className="row" key={p.id}>
                        <hr />
                        <a href={`/product-detail/${p.title}`} className="col-md-3 text-center align-self-center">
                          <div style={{ height: '180px', width: 'auto', position: 'relative', margin: '0 auto' }}>
                            <img src={p.product_image.url} alt="" className="img-fluid p-img" />
                          </div>
                        </a>
                        <div className="col-md-9">
                          <div>
                            <a className="heading" href={`/product-detail/${p.title}`}>
                              <h5>{p.title}</h5>
                            </a>
                            <div className="my-2">
                              <label className="text-primary">Description: </label>
                              <span className="mb-2 small">{p.description.length > 250 ? `${p.description.slice(0, 250)}...` : p.description}</span>
                              <br />
                              <label className="text-primary">Brand: </label>
                              <span className="small mb-2"> {p.brand}</span>
                              <br />
                              <label className="text-primary">Ratings & Reviews: </label>
                              <span className="badge bg-success small my-2"> {`${p.rating} \u2605`}</span>
                              <span className="small">{`${p.review} Reviews`}</span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <form action={`/add-to-cart/${p.id}`} className="d-inline">
                                <input type="hidden" name="prod_id" value={p.id} id="prod_id" />
                                <button type="submit" className="btn btn-md btn-primary mr-">
                                  Add to Cart
                                </button>
                              </form>
                              <p className="mb-0">
                                <span className="cart-price">{`₹${p.discounted_price}`}</span>
                                <span className="cart-price2">{p.selling_price}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      ,
                      <br />
                    ))}
                  </div>
                </div>
              </div></> */}
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
