import * as Yup from 'yup';
import { Formik } from 'formik';
import './Register.css';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

// alert 
import toast, { Toaster } from 'react-hot-toast';

// Schema
const registerSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name !"),
    email: Yup.string().email("Invalid email address").required("Please enter your eimail !"),
    password: Yup.string().min(6).required("Please enter your password !"),
    confirm_password: Yup.string().required("Please confirm your password !").oneOf([Yup.ref('password'), null], "Password must match"),
})


// Define the initial values for the form fields
const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
}
const notify = () => toast('registration successfully 😊');
// Create a functional component named Form
const Register = () => {
    const handleFormSubmit = async (values, onSubmitProps) => {
        console.log(values)
        onSubmitProps.resetForm();
        // Show a toast notification for alert
        notify();
    };
    // Return the JSX representing the form
    return (
        <>
            <Toaster />

            <div className='container'>

                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValuesRegister}
                    validationSchema={registerSchema}
                >

                    {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (

                        <form onSubmit={handleSubmit} >
                            <div className='go_back-dvi'><Link to="/"><IoClose style={{ color: "black", fontSize: "25px" }} /></Link></div>
                            <h1>Register</h1>
                            <div className="contact_form-div">
                                <label htmlFor="">Name</label>
                                <input
                                    type="name"
                                    autoComplete="off"
                                    name="name"
                                    id="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='enter you name'
                                />
                            </div>
                            {errors.name && touched.name ? (<p>{errors.name}</p>) : null}
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
                                    placeholder='example@gmail.com'
                                />
                            </div>
                            {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
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
                                    placeholder='enter your password'
                                />
                            </div>
                            {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                            <div className="contact_form-div">
                                <label htmlFor="">Confirm Password </label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="confirm_password"
                                    id='conirm_password'
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='confirm your password'
                                />
                            </div>
                            {errors.confirm_password && touched.confirm_password ? (<p>{errors.confirm_password}</p>) : null}

                            <div>
                                <button type='submit'>Submit</button>
                                <h5 style={{ textAlign: "center", margin: "0px", marginTop: "30px" }}>if you have allready an account <Link style={{ color: "blue" }} to="/login">Login</Link></h5>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Register;