import * as Yup from "yup";
import accountsData from "./Cuentas.json";

export const inputsLoginValidation = Yup.object({
  username: Yup.string()
    .min(3, "¡Usuario muy corto!")
    .max(50, "¡Usuario muy largo!")
    .required("Por favor ingrese su usuario"),
  password: Yup.string().min(3).required("Por favor ingrese su contraseña"),
});

export const inputsSignupValidation = Yup.object({
  name: Yup.string()
    .min(3, "Nombre muy corto!")
    .max(50, "Nombre muy largo!")
    .required("Por favor ingrese su nombre"),
  username: Yup.string()
    .min(3, "¡Usuario muy corto!")
    .max(50, "¡Usuario muy largo!")
    .required("Por favor ingrese su usuario"),
  email: Yup.string()
    .email("Formato de correo electrónico inválido")
    .required("Ingrese un correo electrónico"),
  password: Yup.string()
    .min(3, "¡Contraseña muy corta!")
    .max(30, "Contraseña muy larga!")
    .required("Por favor ingrese una contraseña"),
  gender: Yup.string()
    .matches(
      /^(H|M)$/,
      "No me vengas con que te identificas como helicoptero apache de la guerra de USA contra panamá :v"
    )
    .optional(),
});

export const ifDataUsed = (data, whatData) => {
  const isUsed = accountsData.some((item) => item[whatData] === data);
  return isUsed;
};

export const searchAccount=(username,password)=>{
  const userAccount = accountsData.find(
    account => account.username === username && account.password === password
  );

  return userAccount;
}
export const registerAccount = (values) => {
  try {
    const cuentas = accountsData;
    cuentas.push(values);
    console.log("Cuenta Registrada");
    console.log(cuentas);
  } catch (error) {
    throw error;
  }
};
