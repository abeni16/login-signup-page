import * as yup from "yup";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const userRegExp = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

const validationsForm = {
  name: yup
    .string()
    .matches(userRegExp, "user name is not valid ")
    .required("Required"),
  surname: yup.string().required("Required"),

  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid ")
    .required("Phone No. is required"),
  course: yup.string().required("Select your course category"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm your password"),
  website: yup.string().url().required("Website is required"),
};

export default validationsForm;
