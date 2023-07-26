import React from "react";
import { Layout } from "../../components/Layout/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="register">
        <h1>Register</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phone" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="address" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
