import { Link, Outlet } from "react-router-dom";
import './Home.css'
import logo from '../../assets/316462458_920441378990363_7707020598263785227_n.jpg'

export default function Home() {
    return (
        <>
            <header className="header-home">
                <nav className="nav-home">
                    <img src={logo} alt="" className="logo-home"/>
                    <u className="ul-home">
                        <Link to={"/elenco"}>
                            <li className="li-home">Elenco</li>
                        </Link>
                        <Link to={"/comissaoT"}>
                            <li className="li-home">Comissão Técnica</li>
                        </Link>
                    </u>
                </nav>
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
            </header>
            <Outlet/>
        </>
    )
}