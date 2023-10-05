import { AuthProvider } from '@hooks/useAuth';
import Layout from '@layout/Layout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
