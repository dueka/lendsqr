import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LendSqrLogo from "../../assets/vectors/logo.svg";
import LendSqrImg from "../../assets/vectors/login-img.svg";
import { InputField } from "../../components";

const Login = () => {
  const handleSubmit = (values: any) => {
    console.log(values); //eslint-disable-line
  };
  const validate = Yup.object({
    email: Yup.string().email().required("Email Address is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  return (
    <div className="register-container">
      <div className="register-container-image">
        <img
          src={LendSqrLogo}
          alt="cloud-wallet"
          className="register-container-logo"
        />
        <img src={LendSqrImg} alt="register" className="register-hide" />
      </div>
      <div className="register-container-form">
        <h4>Welcome!</h4>
        <p>Enter details to login.</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <>
              <Form>
                <div className="register-form-margin">
                  <InputField
                    name="email"
                    placeholder="Email"
                    className="register-form-width"
                  />
                </div>

                <div className="register-form-margin">
                  <InputField
                    name="password"
                    placeholder="Password"
                    password
                    className="register-form-width"
                  />
                </div>
                <a href="/">Forgot password?</a>
                <div className="register-form-text">
                  <button
                    className="form-started-btn"
                    type="submit"
                    // disabled={loading}
                  >
                    {/* {loading && <ButtonSpinner />} */}
                    {/* {!loading && <>Login</>} */}
                    Log in
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
