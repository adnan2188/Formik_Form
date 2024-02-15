import * as Yup from 'yup';
export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please enter your name !"),
    email: Yup.string().email("Invalid email address").required("Please enter your eimail !"),
    password: Yup.string().min(6).required("Please enter your password !"),
    confirm_password: Yup.string().required("Please confirm your password !").oneOf([Yup.ref('password'), null], "Password must match"),
})
// import * as Yup from 'yup';
// export const signUpSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string(),
//     fatherName: Yup.string().required("Father Name is required"),
//     dateOfBirth: Yup.date().required("Date of Birth is required"),
//     gender: Yup.string().required("Gender is required"),
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     contact: Yup.string().required("Contact is required"),
//     address: Yup.string().required("Address is required"),
//     password: Yup.string().required("Password is required"),
//     confirm_password: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Confirm Password is required'),
// })