import React from "react";
import { useFormik } from "formik";
function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });


  return (
    <div className="container">
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <h4>Sign-Up</h4>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter Your Name..."
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter Your Email..."
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter Your Password..."
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
