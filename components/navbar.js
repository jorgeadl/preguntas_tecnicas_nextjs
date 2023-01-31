import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="encabezado">

<div className="row m-0 main-menu">
    <div className="col-12 p-0">
      <nav className="navbar navbar-expand-lg navbar-dark py-4">
        <a href="/" className="px-5"> <Image  width={200} height={200}  src="/images/logo-academia-ne.png" className="img-fluid" style="height:55px;" alt="Academia Desafío Latam" title="Academia Desafío Latam" /> </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarSupportedContent" >

          <ul className="navbar-nav w-100">

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle parent-menu-mobile" href="#" id="navbarDropdownCareer" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Carreras</a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdownCareer">
                <a className="nav-link" href="/Desarrollo-Full-Stack-JavaScript/">Desarrollo Full Stack JavaScript</a>
                <div className="dropdown-divider"></div>

                <a className="nav-link" href="/Desarrollo-Front-End/">Desarrollo Front End</a>
                <div className="dropdown-divider"></div>

                <a className="nav-link" href="/Data-Science/">Data Science</a>
                <div className="dropdown-divider"></div>

                <a className="nav-link" href="/Diseno-UX-UI/">Diseño UX/UI</a>
                <div className="dropdown-divider"></div>

                <a className="nav-link" href="/Data-Analytics/">Data Analytics</a>

              </div>
            </li>
          </ul>
        </div>

        <div className="col-auto d-none d-lg-block top-redes px-5">
          <ul>
            <li><a href="https://www.facebook.com/DesafioLatam/" target="_blank"><i className="fa fa-facebook bla" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/desafiolatam/" target="_blank"><i className="fa fa-instagram bla" aria-hidden="true"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCz0ekVt3TQ65voddo9xVOQw/" target="_blank"><i className="fa fa-youtube-play bla" aria-hidden="true"></i></a></li>
          </ul>
        </div>

        
      </nav>
    </div>
  </div>
    


    </header>
    )
}
