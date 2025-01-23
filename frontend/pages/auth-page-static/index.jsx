import Link from "next/link";
import { withSessionHOC } from "../../src/services/auth/session";
import Head from "next/head";

function AuthPageStatic() {
  return (
    <>
      <Head>
        <title>Auth Page Static</title>
      </Head>
      <div>
        <h1>Página restrita - Auth Page Static</h1>
        <Link href="/logout">
          <a className="primary-button">Logout</a>
        </Link>
      </div>
    </>
  );
}

export default withSessionHOC(AuthPageStatic);
