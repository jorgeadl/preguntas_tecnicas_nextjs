import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
//import MainJs from 'public/js/main.js'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <link
          href="https://use.fontawesome.com/ca5c0ac78a.css"
          media="all"
          rel="stylesheet"
        ></link>
      <body>
        <Main />
        <NextScript /> 
        
      </body>
    </Html>
  )
}
