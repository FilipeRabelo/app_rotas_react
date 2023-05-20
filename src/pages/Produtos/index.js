import {Link} from "react-router-dom";
import React from "react";

// HOOOKS useParams
import { useParams } from "react-router-dom"


function Produtos(){

    const { id } = useParams();

    return(
        <div className={"div1"}>

            <h2>DETALHES DO PRODUTO</h2><br/>

            <span>Meu produto é: {id} </span> <br/><br/> <hr/> <br/>

            <Link to={"/"}         className="link" >Ir para Home        </Link><br/><br/>
            <Link to={"/sobre"}    className="link" >Sobre a Empresa     </Link><br/><br/>
            <Link to={"/contato"}  className="link" >Contatos da Empresa </Link><br/><br/>

        </div>
    )
}

export default Produtos;