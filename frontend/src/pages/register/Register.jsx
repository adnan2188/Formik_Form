import * as Yup from "yup";
import { Formik } from "formik";
import "./Register.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

// Schema
const registerSchema = Yup.object({
  username: Yup.string().min(3).max(25).required("Please enter your name !"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your eimail !"),
  password: Yup.string().min(6).required("Please enter your password "),
  confirm_password: Yup.string()
    .required("Please confirm your password !")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

// Define the initial values for the form fields
const initialValuesRegister = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

// Create a functional component named Form
const Register = () => {
  const register = async (values, onSubmitProps) => {
    const promise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        resolve();
      } else {
        reject();
      }
    });
    await toast.promise(promise, {
        loading:"Registring user ...",
        success:"Register successfull",
        error:"error"
    })
    
    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
    // Show a toast notification for alert
  };
  // Return the JSX representing the form
  return (
    <>
      <div className="container">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValuesRegister}
          validationSchema={registerSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="go_back-dvi">
                <Link to="/">
                  <IoClose style={{ color: "black", fontSize: "25px" }} />
                </Link>
              </div>
              <h1>Register</h1>
              <div className="contact_form-div">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  autoComplete="off"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="enter you name"
                />
              </div>
              {errors.username && touched.username ? <p>{errors.username}</p> : null}
              <div className="contact_form-div">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="example@gmail.com"
                />
              </div>
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
              <div className="contact_form-div">
                <label htmlFor="">Password </label>
                <input
                  type="password"
                  autoComplete="off"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="enter your password"
                />
              </div>
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}
              <div className="contact_form-div">
                <label htmlFor="">Confirm Password </label>
                <input
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="conirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="confirm your password"
                />
              </div>
              {errors.confirm_password && touched.confirm_password ? (
                <p>{errors.confirm_password}</p>
              ) : null}

              <div>
                <button type="submit">Submit</button>
                <h5
                  style={{
                    textAlign: "center",
                    margin: "0px",
                    marginTop: "30px",
                  }}
                >
                  if you have allready an account{" "}
                  <Link style={{ color: "blue" }} to="/login">
                    Login
                  </Link>
                </h5>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
