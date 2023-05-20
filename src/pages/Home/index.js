import React from "react";

// PARA IMPORTAR OS LINKS
import {Link} from "react-router-dom";

                        // PAGINA HOME //

function Home(){
    return(
        <div className={"div1"}>

            <h1>Bem-Vindo a Home</h1>
            <span>Sou programador</span><br/> <br/>

            {/*<a className={"link"} href={"./sobre"}>Ir para a Página Sobre</a>*/}
            
            <Link to={"/sobre"}   className="link" >Sobre a Empresa     </Link><br/><br/>
            <Link to={"/contato"} className="link" >Contatos da Empresa </Link><br/><br/>
            <Link to={"/amor"}    className="linkAmor" >Clica ( Aqui ) JUJU e RAFINHA    </Link><br/><br/>

        </div>
    )
}

export default Home;