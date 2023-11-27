import { inputsSignupValidation } from "./InputsValidations";
import { validateSignup } from "../../utils/db_functions";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "../../styles/Signup.css";
import { crearUsuario } from "../../utils/db_functions";
const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  gender: "",
  //Les deje un gif por deafault ya que nose como poner pa que suban sus imagenes xd
  urlImgPerfil: "https://media.tenor.com/fS2VWhhKhU4AAAAC/rei-ayanami-rei.gif",
};

export default function Signup() {
  //hook para navegar a otras pag
  const navigate = useNavigate();
  //Error
  const [error, setError] = useState("");
  //hook controla los errores
  const [errorCredentials, seterrorCredentials] = useState("");

  const handleSignup = async (values) => {
    const userAccount = await validateSignup(values);
    if (userAccount.success) {
      seterrorCredentials("Los datos de email o usuario ya esta usados");
      setError("Error al registrar la cuenta");
    } else {
      const afterRegister = await crearUsuario(values);
      if (afterRegister.success) {
        navigate("/login");
      } else {
        setError("Error al registrar la cuenta");
        console.log(afterRegister.message);
      }
    }
  };

  return (
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
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <label htmlFor="email">Correo electrónico:</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="input-signup"
              ></Field>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
              <p>
                ¿Ya posees una cuenta?, <Link to="/login">Inicia Sesión!</Link>
              </p>
              {errorCredentials && <div>{errorCredentials}</div>}
              {error && <div>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
