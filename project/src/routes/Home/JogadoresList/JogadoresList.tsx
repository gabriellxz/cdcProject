import { Link, Outlet, useSearchParams } from "react-router-dom"
import { getJogadores } from "../../../services/data"
import './JogadorList.css'

export default function JogadoresList() {

    const jogadoresList = getJogadores()
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <>
            <main className="main-list">
                <div className="container-list">
                    <input
                        value={searchParams.get("name") || ""}
                        type="search"
                        onChange={(e) => {
                            const name = e.target.value;
                            if (name) {
                                setSearchParams({ name })
                            } else {
                                setSearchParams({})
                            }
                        }}
                        placeholder="Pesquisar"
                    />
                    <nav className="nav-list">
                        <ul className="ul-list">
                            {jogadoresList
                                .filter((invoice) => {
                                    let name = searchParams.get("name")
                                    if (!name) return true
                                    let invoiceName = invoice.nome.toLowerCase()
                                    return invoiceName.startsWith(name.toLowerCase())
                                })
                                .map((j: any) => (
                                    <Link
                                        to={`/elenco/${j.numero}`}
                                        key={j.id}
                                    >
                                        <li className="li-list">{j.nome}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
                <Outlet />
            </main>
        </>
    )
}