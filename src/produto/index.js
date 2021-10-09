    
    import { Link } from 'react-router-dom'
    import { conteiner } from './styled'

    export default function produto(props){

        return (
            

            <conteiner>
                <img className="capa" src={props.info.imagem} alt =""/>
                <div className="titulo"> {props.info.titulo} </div>
                <div className="preco">  {props.info.preco}  </div>
            
              <link to={{
                pathname: '/detalhe',
                state: props.info
              }}>
                <button> ver detalhes </button>
             </link>
            </conteiner>
    )   
}
