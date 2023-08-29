import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home/Home'
import Welcome from './routes/Welcome/Welcome'
import ComissaoT from './routes/Home/CTec/ComissaoT'
import JogadoresList from './routes/Home/JogadoresList/JogadoresList'
import Jogador from './routes/Home/JogadoresList/Jogador/Jogador'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path='comissaoT' element={<ComissaoT />} />
            <Route path='elenco' element={<JogadoresList />}>
              <Route path=':jogadorId' element={<Jogador />} />
            </Route>
            <Route path='*' element={<h1>404: Not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
