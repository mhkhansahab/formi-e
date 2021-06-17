import React from "react";
import Input from "./../../Components/input/input";
import Button from "./../../Components/button/button";
import styles from "./form.style";
import { withStyles } from "@material-ui/core/styles";
import Select from "./../../Components/select/select";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .trim()
    .matches(/^[a-zA-Z]+$/, "Name can only contain alphabets")
    .min(4, "Name should be of minimum 4 charachters")
    .max(20, "Name shuld not be exceeded to 20 characters")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters")
    .required("Password is required"),
  age: yup
  .number("Enter you age")
  .positive()
  .min(18, "Candidate's age should be above 18")
  .max(60, "Candidate's age should not be above 60")
  .required("Age is required"),
  gender : yup
  .string("Select your gender")
  .required("Gender is required"),

});

function CustomForm({ classes }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    },
    validationSchema,
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      ></Input>

      <Input
        type="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      ></Input>

      <Input
        type="password"
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      ></Input>

      <Input
        type="number"
        name="age"
        label="Age"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      ></Input>

      <Select
        value={formik.values.gender}
        name="gender"
        onChange={formik.handleChange}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
      ></Select>

      <Button text="Save" type="submit"></Button>
    </form>
  );
}

export default withStyles(styles)(CustomForm);
