import { inputsSignupValidation } from "./Validations";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { inputsLoginValidation,searchAccount,ifDataUsed, registerAccount } from "./Validations";
import "../../styles/Signup.css";
import "../../styles/Login.css";

function Auth() {
  //hook para navegar a otras pag
  const navigate = useNavigate();
  //hook para controlar el error de credenciales ingresadas
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  //lOGIN
  //funcion validacion credenciales
  const handleLogin = (values) => {
    const { username, password } = values;
    const userAccount = searchAccount(username, password);
    if (userAccount) {
      setUser(userAccount);
      console.log("Exito XD");
      navigate("/home");
    } else {
      setError("Credenciales Incorrectas");
    }
  };

  //SIGNUP
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
      console.log("Registrado",values);
      setIsRegistering(false);
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
      {isEditing ? (
        <section className="main-container-login">
          <button onClick={() => navigate("/")} className="backButtonLogin">
            Volver
          </button>
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
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="input-login"
                    placeholder="Enter your username..."
                  ></Field>
                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}

                  <label>Password:</label>
                  <Field
                    type="password"
                    name="password"
                    id="password_login"
                    placeholder="Enter your password..."
                  ></Field>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <button type="submit">Entrar</button>
                  {error && <div>{error}</div>}
                </Form>
              )}
            </Formik>
          </div>
        </section>
      ) : (
        <section className="main-container-signup">
          <button onClick={() => navigate("/")} className="backButtonSignup">
            Volver
          </button>
          <div className="container-signup">
            <h1>Signup</h1>
            <Formik
              initialValues={initialValues}
              validationSchema={inputsSignupValidation}
              onSubmit={(values) => {
                handleSignup(values);
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="container-inputs-signup">
                  <label htmlFor="name">Nombres:</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="input-signup"
                  ></Field>
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}

                  <label htmlFor="email">Correo electrónico:</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="input-signup"
                  ></Field>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}

                  <label htmlFor="username">Nombre de Usuario:</label>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    className="input-signup"
                  ></Field>
                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}

                  <label htmlFor="password">Contraseña:</label>
                  <Field
                    type="password"
                    name="password"
                    id="password_signup"
                  ></Field>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}

                  <label htmlFor="gender">Género:</label>
                  <Field
                    as="select"
                    name="gender"
                    id="gender"
                    className="input-signup"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="H">Hombre</option>
                    <option value="M">Mujer</option>
                  </Field>
                  {errors.gender && touched.gender ? (
                    <div>{errors.gender}</div>
                  ) : null}

                  <button type="submit">Registrar</button>
                  {errorEmail && <div>{errorEmail}</div>}
                  {errorUsername && <div>{errorUsername}</div>}
                </Form>
              )}
            </Formik>
          </div>
        </section>
      )}
    </div>
  );
}
