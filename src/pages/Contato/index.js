
import React from "react";
import { Link } from "react-router-dom";

                        // PAGINA DE CONTATOS //

function Contato(){
    return(
        <div className={"div1"}>

            <h1>Pagina de Contatos </h1>
            <span>Contatos da empresa (dd) xxxxx-xxxx</span>
            <br/>
            <br/>
            {/*<a className="link" href={"./"}>Voltar para a Home</a>*/}

            <Link className="link" to={"/"}>Ir para Home</Link>
            <br/>
            <br/>
            <Link className="link" to={"/sobre"}>Sobre a Empresa</Link><br/><br/>

        </div>
    )
}

export default Contato;