import React from 'react';
import { Link } from 'react-router-dom';

const Address = ({ profile }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <h3>Welcome User</h3>
        <div className="col-lg-2 border-end">
          <ul className="list-unstyled">
            <li className="d-grid"><Link to="/profile" className="btn">My Profile</Link></li>
            <li className="d-grid"><Link to="/address" className="btn btn-primary">My Address</Link></li>
          </ul>
        </div>
        {/* {profile.length === 0 && ( */}
          <div className="col-lg-6 text-center">
            <h1 className="text-center">No Address Added</h1>
          </div>
        {/* )} */}
        <div className="col-lg-9 offset-lg-1">
          {/* <div className="row">
            {profile.map((p, index) => (
              <div key={index} className="col-md-6 my-2">
                <div className="card my_form">
                  <div className="card-body py-4">
                    <h3>Address {index + 1}</h3>
                    <p>Name: {p.name}</p>
                    <p>Address: {p.locality}</p>
                    <p>City: {p.city}</p>
                    <p>State: {p.state}</p>
                    <p>Pincode: {p.zipcode}</p>
                    <p>Email: {p.email}</p>
                    <p>Mobile Number: {p.phone}</p>
                    <p>Gender: {p.gender}</p>
                    <Link to={`/address/remove/${p.id}`} className="btn btn-danger mr-3 px-4">Delete</Link>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Address;
