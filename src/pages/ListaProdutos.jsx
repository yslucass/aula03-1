import React from 'react';
import Loading from './Loading.jsx'
export default function ListaProdutos({lista, ordenarAZ, ordenarZA, preco}) {
    if(lista.length === 0){
        return(<Loading/>)
    }
    return(
        <>
                <h1>Lista Produtos</h1>
                <button onClick={()=> ordenarAZ()}>Az</button>
                <button onClick={()=> ordenarZA()}>Za</button>
                <button onClick={()=> preco()}>Preço</button>
                <ul>
                    {lista.map(produto => (
                        <li key={produto.id}>
                            <h2>{produto.tilte}</h2>
                            <p>{produto.description}</p>
                            <p>Preço: R${produto.price}</p>
                            <img src={produto.image} alt={produto.title} width={100} />
                        </li>
                    ))}
                </ul>
            </>
    )
}