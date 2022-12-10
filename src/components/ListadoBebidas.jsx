import { Row } from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas"
import Bebida from './Bebida'
const ListadoBebidas = () => {
    
    const { bebidas } = useBebidas()
    return (
       <>
        <h3>Listado de bebidas</h3>

        <Row>
            {bebidas.map(bebida => (
                <Bebida 
                    key={bebida.idDrink}
                    bebida = {bebida}
                />
            ))}
        </Row>
       </>
        
    )
}
export default ListadoBebidas