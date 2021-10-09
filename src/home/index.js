    import { conteiner } from './styled'

    import produto from '../produto'
    import { useState } from 'react'

 

export default function home() {
    const [produtos, setprodutos] = useState([]);

    function listar(){ 
    const r = [
        {
            id : 10001,
            imagem:"../../public/img/teclado-gamer.png" ,
            titulo: "notebook Gamer",
            preco: "10.500,00",
            descriçao:"blavlablabalbalblalbalblabllba" ,
            especificacoes:"blavlablabalbalblalbalblabllba" ,
        },
        {
            id : 10002,
            imagem:"../../public/img/teclado-gamer.png" ,
            titulo:"Cadeira Gamer" ,
            preco: "2.999,99",
            descriçao:"blavlablabalbalblalbalblabllba" ,
            especificacoes:"blavlablabalbalblalbalblabllba" ,
        },
        {
            id : 10003,
            imagem:"../../public/img/teclado-gamer.png" ,
            titulo: "Teclado Mecaico",
            preco: "1.500,00",
            descriçao:"blavlablabalbalblalbalblabllba" ,
            especificacoes:"blavlablabalbalblalbalblabllba" ,
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

    