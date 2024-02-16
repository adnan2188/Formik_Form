import './Login.css';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const loginSchema = Yup.object({
    email: Yup.string().required('enter your email').email('invalid email address'),
    password: Yup.string().required('enter your password'),
});
const initialValuesLogin = {
    email: "",
    password: ""
}
const handleFormSubmit = async (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();

}

const Login = () => {
    return (
        <div className='container'>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValuesLogin}
                validationSchema={loginSchema}
            >
                {({ values, errors, touched, handleChange, handleSubmit, handleBlur }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='go_back-dvi'><Link to="/"><IoClose style={{ color: "black", fontSize: "25px" }} /></Link></div>
                        <h1>Login</h1>
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
                        <button type='submit'>Login</button>
                    </form>
                )}

            </Formik>
        </div>
    )
}

export default Login

