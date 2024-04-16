import Brand from './brand/Brand.jsx'

const NavBar = () => {
    return(
        <header>
            <div className="container">
                <div className="row m-auto">
                <div className="col-9">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <button className="navbar-toggler icono-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon  "></span>
                            </button>
                            <div className="navbar-brand ms-lg-5 mx-auto mx-lg-0">
                                <Brand />
                            </div>
                            <div className="collapse navbar-collapse w-50 d-lg-flex justify-content-lg-center" id="navbarTogglerDemo03">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 text"  href="#">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 text" href="#">Consolas</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 text "  href="#">Juegos</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 text "  href="#">Coleccionables</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link fs-4 text" href="#">Contacto</a>
                                    </li>
                                </ul>                         
                            </div>
                    </div>

                </nav>

                </div>
                <div className="col-3">
                <p>aca va el carrito de compras</p>
                    

                </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar