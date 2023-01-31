import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({children,title,description}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      
      <div className=''>
        <main>{children}</main>
      </div>

      <Footer />
    </div>
    )
}
Layout.defaultProps = {
    title: "Next.js | desafío Latam",
    description: "Descripción de Desafío Latam",
  };