import React from 'react';
import Loading from './Loading.jsx'
import styles from '../styles/ListaProdutos.module.css';
export default function ListaProdutos({lista, ordenarAZ, ordenarZA, precodecrescente, precocrescente}) {
    if(lista.length === 0){
        return(<Loading/>)
    }
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Lista de Produtos</h1>
          <button className={styles.button} onClick={ordenarAZ}>Ordenar A-Z</button>
          <button className={styles.button} onClick={ordenarZA}>Ordenar Z-A</button>
          <button className={styles.button} onClick={precodecrescente}>Preço Decrescente</button>
          <button className={styles.button} onClick={precocrescente}>Preço Crescente</button>
          <ul className={styles.productList}>
            {lista.map(produto => (
              <li key={produto.id} className={styles.productItem}>
                <h2>{produto.title}</h2>
                <p>{produto.description}</p>
                <p>Preço: R${produto.price}</p>
                <img src={produto.image} alt={produto.title} />
              </li>
            ))}
          </ul>
        </div>
      );
}