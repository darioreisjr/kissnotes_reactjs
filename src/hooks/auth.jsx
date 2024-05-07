import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@kissnotes:user", JSON.stringify(user));
      localStorage.setItem("@kissnotes:token", token);

      // api.defaults.headers.authorization = `Bearer ${token}`;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@kissnotes:token");
    localStorage.removeItem("@kissnotes:user");

    setData({});
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users",  user );
      localStorage.setItem("@kissnotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@kissnotes:token");
    const user = localStorage.getItem("@kissnotes:user");

    if (token && user) {
      //api.defaults.headers.authorization = `Bearer ${token}`;
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
