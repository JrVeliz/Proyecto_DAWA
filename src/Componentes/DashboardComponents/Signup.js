import { inputsSignupValidation } from "./Validations";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { ifDataUsed, registerAccount } from "./Validations";
const initialValues = {
  name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
  cPassword: "",
  country: "",
  gender: "",
};

export default function Signup() {
  //hook para navegar a otras pag
  const navigate = useNavigate();
  //hook controla los errores
  const [errorEmail, setErrorEmail] = useState("");
  //hook controla los errores
  const [errorUsername, setErrorUsername] = useState("");

  const handleSignup = (values) => {
    console.log(values);
    const { email, username } = values;
    const emailExist = ifDataUsed(email, "email");
    const userNameExist = ifDataUsed(username, "username");
    if (!emailExist && !userNameExist) {
      registerAccount(values);
      navigate("/login");
    } else {
      setErrorEmail(
        emailExist
          ? "Este correo ya se encuentra registrado con otra cuenta"
          : null
      );
      setErrorUsername(
        userNameExist
          ? "Este nombre de usuario ya se encuentra registrado con otra cuenta"
          : null
      );
    }
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Volver</button>
      <h2>Registrate</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={inputsSignupValidation}
        onSubmit={(values) => {
          handleSignup(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Nombres:</label>
            <Field type="text" name="name" id="name"></Field>
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="last_name">Apellidos:</label>
            <Field type="text" name="last_name" id="last_name"></Field>
            {errors.last_name && touched.last_name ? (
              <div>{errors.last_name}</div>
            ) : null}

            <label htmlFor="email">Correo electrónico:</label>
            <Field type="email" name="email" id="email"></Field>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <label htmlFor="username">Nombre de Usuario:</label>
            <Field type="text" name="username" id="username"></Field>
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}

            <label htmlFor="password">Contraseña:</label>
            <Field type="password" name="password" id="password"></Field>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <label htmlFor="cPassword">Confirmar Contraseña:</label>
            <Field type="password" name="cPassword" id="cPassword"></Field>
            {errors.cPassword && touched.cPassword ? (
              <div>{errors.cPassword}</div>
            ) : null}

            <label htmlFor="country">País de residencia:</label>
            <Field type="text" name="country" id="country"></Field>
            {errors.country && touched.country ? (
              <div>{errors.country}</div>
            ) : null}

            <label htmlFor="gender"> Género :</label>
            <Field type="text" name="gender" id="gender"></Field>
            {errors.gender && touched.gender ? (
              <div>{errors.gender}</div>
            ) : null}

            <button type="submit">Registrar</button>
            <p>
              ¿Ya posees una cuenta?, <Link to="/login">Inicia Sesión!</Link>
            </p>
            {errorEmail && <div>{errorEmail}</div>}
            {errorUsername && <div>{errorUsername}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
