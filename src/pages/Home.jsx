import { useEffect, useState } from "react";
import ListaProdutos from "../pages/ListaProdutos"
export default function Home() {

    const [lista, setLista] = useState ([]);
    
    useEffect(() =>{
        const receberListaProdutos = async () => {
            try{
                const resposta = await fetch('https://fakestoreapi.com/products');
                const dados = await resposta.json();
                setLista(dados);
            }catch{
                alert('Ocorreu um erro na comunicação com o servidor!')
            }
        }
        receberListaProdutos();
    }, []);

    const ordenarAZ = () =>{
        const listaAux = [...lista].sort((a,b) => a.title.localeCompare(b.title));
        setLista(listaAux);
    }

    const ordenarZA = () =>{
        const listaZA = [...lista].sort((a,b) => b.title.localeCompare(a.title))
        setLista(listaZA);
    }

    const precodecrescente = () =>{
        const listapreco = [...lista].sort((a,b)=> b.price - a.price)
        setLista(listapreco);
    }

    const precocrescente = () =>{
        const listacresc = [...lista].sort((a,b)=> a.price - b.price)
        setLista(listacresc)
    }

        return(
            <ListaProdutos lista={lista} ordenarAZ={ordenarAZ} ordenarZA={ordenarZA} precodecrescente={precodecrescente} precocrescente={precocrescente} />
        )
}