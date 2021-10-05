import * as Yup from "yup";

const url =
  /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;

const facebookUrl =
/(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/ig;

const commentReg = /^[a-zA-Z ]+$/

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

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

export const AccountSchema = Yup.object().shape({
  fname: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
  lname: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
  work: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  bio: Yup.string().required("Required"),
  linkedin: Yup.string().matches(url, "Enter linkedin correct url!"),
  twitter: Yup.string().matches(url, "Enter twitter correct url!"),
  reddit: Yup.string().matches(url, "Enter reddit correct url!"),
  facebook: Yup.string().matches(facebookUrl, "Enter facebook correct url!"),
});


export const PostSchema = Yup.object().shape({
  url: Yup.string().matches(url, "Enter only url!").required("Required"),
  topic: Yup.string().required("Please Select Topic"),
});

export const CommentSchema = Yup.object().shape({
  topic: Yup.string().required("Required"),
});


//profession: Yup.string().required('Choose one'),
//confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
//address:Yup.string().required('Required'),
//terms: Yup.boolean().oneOf([true])
//mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
