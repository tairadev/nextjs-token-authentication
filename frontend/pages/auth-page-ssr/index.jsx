import Link from "next/link";
import { withSession } from "../../src/services/auth/session";
import Head from "next/head";

function AuthPageSSR() {
  return (
    <>
      <Head>
        <title>Auth Page SSR</title>
      </Head>
      <div>
        <h1>Página restrita - Auth Page Server Side Render</h1>
        <Link href="/logout">
          <a className="primary-button">Logout</a>
        </Link>
      </div>
    </>
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
