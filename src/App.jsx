import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebidas from './components/ModalBebidas'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
function App() {
  

  return (
    <>
      <CategoriasProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>
          <Container className="mt-5">
            <Formulario />
            <ListadoBebidas />
            <ModalBebidas />
          </Container>
        </BebidasProvider>  
      </CategoriasProvider>
      
      
    </>
  )
}

export default App
