import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion.jsx"

const Header = () => {

    return (
        <>
            <header className="header">
                <div className="contenedor barra">
                    <Link to="index">
                        <img className="logo" src={logo} alt="img logo" />
                    </Link>
                    <Navegacion />
                </div>
            </header >
        </>

    )
}

export default Header