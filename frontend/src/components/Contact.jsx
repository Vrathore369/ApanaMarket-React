import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    // You can use state or a form library like Formik to manage form data
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6 offset-md-3">
          <h3>Contact Us</h3>
          <hr />
          <form action="/contact/" method="post" noValidate className="row mx-0 my_form2 shadow p-5" onSubmit={handleSubmit}>
            {/* Add logic for handling form submission */}
            {/* Use state or a form library like Formik to manage form data */}
            {/* Note: Ensure that your form submission logic aligns with your React application's requirements */}

            <div className="mb-3 col-md-6">
              <h5 htmlFor="firstName" className="form-label">
                First Name
              </h5>
              <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" />
            </div>
            <div className="mb-3 col-md-6">
              <h5 htmlFor="lastName" className="form-label">
                Last Name
              </h5>
              <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" />
            </div>
            <div className="mb-3">
              <h5 htmlFor="email" className="form-label">
                Email
              </h5>
              <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <h5 htmlFor="message" className="form-label">
                Message
              </h5>
              <textarea
                className="form-control"
                id="message"
                name="message"
                cols="15"
                rows="5"
                placeholder="Enter your message here...."
              ></textarea>
            </div>
            <div className="text-end">
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

export default Contact;
