import { Link } from "react-router-dom";            
import {conteiner} from './styled'
import { useEffect, useState } from "react";

import Cookie from 'js-cookie'
import carrinhoItem from './carrinhoItem'



export default function Carrinho (){
    const [produtos, setProdutos] = useState([]);

    useEffect(carregarCarrinho, []);

    function carregarCarrinho (){

        let carrinho = Cookie.get('carrinho'); 
        carrinho = carrinho != null
                            ? JSON.parse(carrinho)
                            :[];
                            
        setProdutos(carrinho);
    }


    function removerProduto (id) {

        let carrinho = produtos.filter(item => item.id !== id);

        Cookie.set('carrinho', JSON.stringify(carrinho));

        setProdutos([...carrinho]); 
    }

    function alterarProduto (id , qtd) {

        let produtoAlterado = produtos.filter(item => item.id == id) [0]
        produtoAlterado.qtd =qtd;

        Cookie.set('carrinho', JSON.stringify(produtos));
    }


    return(
        <conteiner>
            <h1> Carrinho </h1>

            <link to="/"> Voltar </link>

            <div className="itens">
                {produtos.map(item =>
                    <carrinhoItem key={item.id}
                        info={item}
                        onUpdate={alterarProduto}
                        onRemover={removerProduto} /> 
                    )}
            </div>
        </conteiner>
    )
}