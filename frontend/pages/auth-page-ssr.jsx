import Link from "next/link";
import { withSession } from "../src/services/auth/session";

function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth Page Server Side Render</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <Link href="/logout">Logout</Link>
    </div>
  );
}

// Decorator pattern
export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

export default AuthPageSSR;
