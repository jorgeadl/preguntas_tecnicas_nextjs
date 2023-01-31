//import  "bootstrap/dist/css/bootstrap.css";
import '@ericadl/styles/globals.css'
import Layout from '@ericadl/components/Layout'



export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}