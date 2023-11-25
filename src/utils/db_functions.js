export const buscarUsuario = async (accountToVerified) => {
  try {
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToVerified,
      }),
    });
    const data = await res.json();
    const user = data;
    return user;
  } catch (error) {
    console.log("error al traer los datos de la bd" + error);
  }
};

export const crearUsuario = async (accountToRegister) => {
  try {
    const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToRegister,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al traer los datos de la bd" + error);
  }
};

export const actualizarUsuario = async (accountToUpdate) => {
  try {
    const res = await fetch("http://localhost:3001/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...accountToUpdate,
      }),
    });
    const data = await res.json();
    const state = data;
    return state;
  } catch (error) {
    console.log("error al traer los datos de la bd" + error);
  }
};
