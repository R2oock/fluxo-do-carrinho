import { useEffect, useState } from "react";
import styled from "styled-components";


const conteiner = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 400;

    & > * {
        margin: .5em;
        background-color: #f5f5f5;
        padding: 0.3em .8em;
        user-select: none;
    }

    .menos {
        border-radius: 100%;
        cursor: ponter
    }

    .quantidade {
        padding: 0.3em 1em;
    }
    
    .mais{
        boder-radius: 100%;
        cursor: poniter
    }
`


export default function contador(props) {
    const [qtd, setQtd] =useState(props.value);

    function aumentar() {
        if (qtd >= 10)
            return;
        setQtd(qtd+1)
    }
    function diminuir() {
        if (qtd === 0)
            return;
        setQtd(qtd-1)
    }

    useEffect(() => {
    
    props.onChange(qtd);

    }, [qtd])


    return (
        <conteiner>
            <div className="menos" onClick={diminuir}>
                -
            </div>

            <div className="quantidade" >
                {qtd}
            </div>

            <div className="mais" onClick={aumentar}>
                +
            </div>

        </conteiner>
    )
}