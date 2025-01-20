import { useState } from "react";
import { useRouter } from "next/router";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = useState({
    user: "tairadev",
    password: "Teste123",
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

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          router.push("/auth-page-ssr");
          // router.push("/auth-page-static");
        }}
      >
        <input
          placeholder="Usuário"
          name="user"
          value={values.user}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
