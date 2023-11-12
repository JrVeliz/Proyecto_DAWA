import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { inputsLoginValidation } from "./Validations";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ifDataUsed } from "./Validations";

const initialValues = {
  username: "",
  password: "",
};

export default function Login({setUser}) {
  //hook para navegar a otras pag
  const navigate = useNavigate();

  //hook para controlar el error de credenciales ingresadas
  const [error, setError] = useState("");

  //funcion validacion credenciales
  const handleLogin = ({ username, password }) => {
    setUser(username);
    if (ifDataUsed(username, "username") && ifDataUsed(password, "password")) {
      
      console.log("Exito XD");
      navigate("/home");
    } else {
      setError("Credenciales Incorrectas");
    }
  };
  return (
    <div>
      <button onClick={() => navigate("/")}>Volver</button>
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
          <Form>
            <label htmlFor="username">Usuario:</label>
            <Field type="text" name="username" id="username"></Field>
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}

            <label>Contraseña:</label>
            <Field type="password" name="password" id="passoword"></Field>
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
  );
}
