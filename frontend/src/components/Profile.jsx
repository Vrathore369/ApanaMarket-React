import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <h3>Welcome User</h3>
        <div className="col-md-2 border-end">
          <ul className="list-unstyled">
            <li className="d-grid">
              <Link to="/profile" className="btn btn-primary">
                My Profile
              </Link>
            </li>
            <li className="d-grid">
              <Link to="/address" className="btn">
                My Address
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8 offset-md-1">
          <form
            action=""
            method="post"
            className="row my_form2 shadow py-4 px-4 m-2"
          >
            {/* CSRF Token */}
            <input type="hidden" name="csrfmiddlewaretoken" value="CSRF_TOKEN" />
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label mt-2">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="inputName"
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="inputEmail" className="form-label mt-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="inputEmail"
                placeholder="name@example.com"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label mt-2">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="inputAddress"
                placeholder="Address (Area & Street)"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label mt-2">
                Landmark (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                name="inputAddress2"
                placeholder="Eg. Near Green Park"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputCity" className="form-label mt-2">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                name="inputCity"
                placeholder="City/District/Town"
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="inputState" className="form-label mt-2">
                State
              </label>
              <select id="inputState" className="form-select" name="inputState">
                <option selected disabled>
                  Choose...
                </option>
                <option>Andaman and Nicobar Islands</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Chandigarh</option>
                <option>Dadra and Nagar Haveli</option>
                <option>Daman and Diu</option>
                <option>Delhi</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Pondicherry</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label mt-2">
                Pincode
              </label>
              <input
                type="number"
                className="form-control"
                id="inputZip"
                name="inputZip"
                placeholder="6 Digits [0-9]"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputGender" className="form-label mt-2">
                Gender
              </label>
              <select id="inputGender" className="form-select" name="inputGender">
                <option selected disabled>
                  Choose...
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Not Specified</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPhone" className="form-label mt-2">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputPhone"
                name="inputPhone"
                placeholder="10-digit Mobile Number"
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputAge" className="form-label mt-2">
                Age (Optional)
              </label>
              <input
                type="number"
                className="form-control"
                id="inputAge"
                name="inputAge"
                placeholder="Eg. 24"
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputType" className="form-label mt-2">
                Address Type
              </label>
              <select id="inputType" className="form-select" name="inputType">
                <option selected disabled>
                  Choose...
                </option>
                <option>Home</option>
                <option>Work</option>
              </select>
            </div>
            <div className="col-md-12 mt-3">
              <button type="submit" className="btn btn-danger">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
