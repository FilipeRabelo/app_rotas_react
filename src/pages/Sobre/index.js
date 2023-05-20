import React from "react";

// PARA IMPORTAR OS LINKS
import { Link } from "react-router-dom";

                        // PAGINA SOBRE //

function Sobre(){
    return(
        <div className={"div1"}>

            <h1>Pagina sobre a empresa</h1>
            <br/>
            <span>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..."
                "Não há ninguém que ame a própria dor, que a busque e queira tê-la,
                simplesmente porque é dor..."
            </span>
            <br/>
            <br/>
            <br/>
            {/*<a className="link" href={"./"}>Voltar para a Home</a>*/}

            <Link className="link" to={"/"}>Ir para Home</Link><br/><br/>
            <Link className="link" to={"/contato"}>Contatos da empresa</Link><br/><br/>
            <Link to={"/amor"}    className="link" >PAgina de Amor      </Link><br/><br/>

        </div>
    )
}

export default Sobre;