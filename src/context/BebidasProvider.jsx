import { useState, useEffect, createContext } from "react"
import axios from 'axios'

const BebidasContext = createContext()
const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleClickBebidaid = id => {
        setBebidaId(id)
    }

    useEffect(() => {
        const consultarReceta = async () => {
            if(!bebidaId)return
                
            
                try {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}` 
                    const { data } = await axios(url)
                    
                    console.log(data.drinks)
                    setReceta(data.drinks[0])
                } catch (error) {
                    console.log(error)
                }
            
           
        }
        consultarReceta()    
    }, [bebidaId])

    const consultarBebidas = async datos => {
        try{
           const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}` 
           const { data } = await axios(url)

           console.log(data.drinks)
           setBebidas(data.drinks)
         
        
        } catch(error){
            console.log(error)
        }
         
        
    }
    /*
        useEffect(() => {
        consultarBebidas()
        },[])
    */

  
    
   
    return(
        <BebidasContext.Provider
            value={{
                consultarBebidas,
                bebidas,
                handleClickModal,
                modal,
                handleClickBebidaid,
                receta
                
            }}

            
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
} 

export default BebidasContext