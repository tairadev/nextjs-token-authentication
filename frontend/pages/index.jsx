import React from "react";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { authService } from "../src/services/auth/authService";
import styles from "./Home.module.scss";
import Head from "next/head";

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: "",
    senha: "",
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  function submit(event) {
    // onSubmit -> Controller (pega dados do usuário e passa pra um serviço)
    // authService -> Serviço
    event.preventDefault();
    authService
      .login({
        username: values.usuario,
        password: values.senha,
      })
      .then(() => {
        router.push("/auth-page-static");
        // router.push("/auth-page-ssr");
      })
      .catch(() => {
        toast.error("Usuário e/ou senha inválido(s).");
      });
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login}>
        <Toaster position="top-right" />
        <img src="/logo.png" alt="Logo" />
        <form autocomplete="off" className={styles.form} onSubmit={submit}>
          <input
            placeholder="Usuário"
            name="usuario"
            value={values.usuario}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            placeholder="Senha"
            name="senha"
            type="password"
            value={values.senha}
            onChange={handleChange}
            className={styles.input}
          />
          <button className="primary-button">login</button>
        </form>
      </div>
    </>
  );
}
