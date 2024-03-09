import 'bootstrap/dist/css/bootstrap.min.css';
import { SWRConfig } from 'swr';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher: (...args) => fetch(...args).then(res => res.json()) }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
