import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BootstrapScript from "./BootstrapScript";

export default function Layout({ children, title, description }) {
    return (
        <div>
            <Head>                
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>{title}</title>
                <meta name="description"content={description} />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
                <script src="https://use.fontawesome.com/ca5c0ac78a.js"></script>
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
                <link href="https://use.fontawesome.com/ca5c0ac78a.css" media="all" rel="stylesheet" />
            </Head>
            <Navbar />

            <main>{children}</main>
            
            <Footer />
            
            <BootstrapScript />
        </div>
    )
}

Layout.defaultProps = {
    title:"Preguntas Técnicas de Entrevista",
    description: "Página de entrevistas técnicas de programación con respuestas para perfiles Junior, Semi-Senior y Senior"
}
