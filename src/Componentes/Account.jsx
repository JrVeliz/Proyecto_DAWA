import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Header from "./Header";
import "../styles/Account.css";
import { inputsSignupValidation } from "./DashboardComponents/InputsValidations.js";
import { actualizarUsuario } from "../utils/db_functions";

function Account({ currentUser, logout,setUser }) {
  const initialDataProfile = {
    id:currentUser.id,
    name: currentUser.name,
    username: currentUser.username,
    email: currentUser.email,
    password: currentUser.password,
    gender: currentUser.gender,
    urlImgPerfil:currentUser.urlImgPerfil
  };
  //hook para controlar el error de credenciales ingresadas
  const [error, setError] = useState("");
  const [userData, setUserData] = useState(initialDataProfile);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditProfile = () => {
    setIsEditing(true);
  };
  const handleSaveProfile = async(values) => {
    try {
      const userUpdated = await actualizarUsuario(values);
      if (userUpdated.success) {
        console.log("Desde if de userUpdate:",userUpdated);
        setUser(userUpdated.data);
        setUserData(values);
      } else {
        setError("Credenciales incorrectas");
        console.log(userUpdated.message);
      }
      setIsEditing(false);
    } catch (error) {
      console.log("Error de try de nelson xd:"+error);
    }
  };

  return (
    <section className="Account">
      <Header userLogged={currentUser.username} buttonLogout={logout} />
      <div className="account-info">
        <div className="container-principal-account">
          <h1>Mi Perfil</h1>
          {isEditing ? (
            <div className="container-inputs-cuenta">
              <h2>Estas en modo edición</h2>
              <div>
                <Formik
                  initialValues={{
                    ...userData,
                    urlmgPerfil: "https://media.tenor.com/o_2VGtQWIo8AAAAC/kurumi-love.gif",
                  }}
                  validationSchema={inputsSignupValidation}
                  onSubmit={(values) => {
                    handleSaveProfile(values);
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="container-inputs-edit-account">
                      <label htmlFor="email">Correo electrónico nuevo:</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="input-edit-perfil"
                      ></Field>
                      {errors.email && touched.email ? <div>{errors.email}</div> : null}

                      <label htmlFor="username">Nombre de usuario nuevo:</label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        className="input-edit-perfil"
                      ></Field>
                      {errors.username && touched.username ? (
                      <div>{errors.username}</div>
                    ) : null}

                      <label htmlFor="password">Contraseña nueva:</label>
                      <Field
                        type="text"
                        name="password"
                        id="password_acccount"
                        className="input-edit-perfil"
                      ></Field>
                      {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}

                      <label htmlFor="gender">Género:</label>
                      <Field
                        as="select"
                        name="gender"
                        id="gender"
                        className="input-edit-perfil"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="H">Hombre</option>
                        <option value="M">Mujer</option>
                      </Field>
                      {errors.gender && touched.gender ? (
                      <div>{errors.gender}</div>
                    ) : null}
                      <button type="submit">Guardar Cambios</button>
                      {error && <div>{error}</div>}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : (
            <div className="container-data-perfil">
              <div className="container-data-perfil-principal">
                <img
                  src={initialDataProfile.urlImgPerfil}
                  alt="icon perfil"
                />
                <p>
                  <strong>{initialDataProfile.username}</strong>
                </p>
              </div>
              <div className="container-data-perfil-secundaria">
                <p>
                  <strong>Nombre de usuario:</strong> {initialDataProfile.name}
                </p>
                <p>
                  <strong>Correo electrónico:</strong> {initialDataProfile.email}
                </p>
                <p>
                  <strong>Sexo:</strong> {initialDataProfile.gender}
                </p>
              </div>
              <button onClick={handleEditProfile}>Editar perfil</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Account;
