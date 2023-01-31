import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function primerPost() {
  return (
    <div>               
        <h1>Mi primer post</h1>
        <Image
            src='/img/1.jpg'
            width={600}
            height={600}
            alt="Mi imagen con Image"
        ></Image>
        <Link href='/' legacyBehavior>
            <a>Volver al Inicio</a>
        </Link>
        <br />       
    </div>
  )
}

PrimerPost.defaultProps ={
  title:'Página | Mi primer post',
  description:"Este es mi primer post"
}
