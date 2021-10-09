    import { conteiner } from './styled'

    import produto from '../produto'
    import { useState } from 'react'

 

export default function home() {
    const [produtos, setprodutos] = useState([]);

    function listar(){ 
    const r = [
        {

        },
        {

        },
        {

        }
    ]
    setprodutos(r);
   }
       
       
        return(
            <conteiner>
    
                <h1> Sejam bem-vindos! </h1>
                <br />
    
                <button onclick={listar}> Listar </button>
                <br />
    
                <div className="lista-produtos">
    
                    {produto.map (item =>
                        <produto info={item}/>
                    )}
                </div>
            </conteiner>
        )
    
    
}

    