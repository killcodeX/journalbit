import * as Yup from "yup";

export const RegistrationSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

//profession: Yup.string().required('Choose one'),
//confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
//address:Yup.string().required('Required'),
//terms: Yup.boolean().oneOf([true])
//mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
