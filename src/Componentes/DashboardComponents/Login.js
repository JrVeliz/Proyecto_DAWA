import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { inputsLoginValidation } from "./InputsValidations.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Login.css";
import { validateLogin } from "../../utils/db_functions";

const initialValues = {
  username: "",
  password: "",
};

export default function Login({setUser}) {
  //hook para navegar a otras pag
  const navigate = useNavigate();
  //hook para controlar el error de credenciales ingresadas
  const [error, setError] = useState("");

  //LOGIN
  //funcion validacion credenciales
  const handleLogin = async(values) => { 
    // const userAccount = searchAccount(username, password);
    const userAccount = await validateLogin(values);
    if (userAccount.success) {
      setUser(userAccount.data[0]);
      console.log("userAccount: ",userAccount);
      console.log("userAccount.data[0]:",userAccount.data[0]);
      navigate("/home");
    } else {
      setError("Credenciales incorrectas");
      console.log(userAccount.message);
    }
  };
  
  return (
    <section  className="main-container-login">
      <button onClick={() => navigate("/")} className="backButtonLogin">Volver</button>
      <div className="container-login">
      <h1>LogIn</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={inputsLoginValidation}
        onSubmit={(values) => {
          handleLogin(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="container-inputs-login">
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" id="username" className="input-login" placeholder="Enter your username..."></Field>
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}

            <label>Password:</label>
            <Field type="password" name="password" id="password_login" placeholder="Enter your password..."></Field>
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <button type="submit">Entrar</button>
            <p>
              ¿Nuevo por aqui?, <Link to="/signup">Registrate!</Link>
            </p>
            {error && <div>{error}</div>}
          </Form>
        )}
      </Formik>
      </div>
      
    </section>
  );
}
