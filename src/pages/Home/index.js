import React from "react";

// PARA IMPORTAR OS LINKS
import {Link} from "react-router-dom";

                        // PAGINA HOME //

function Home(){
    return(
        <div className={"div1"}>

            <h2>Bem-Vindo a Home Programador</h2>
            <br/> <br/>

            {/*<a className={"link"} href={"./sobre"}>Ir para a Página Sobre</a>*/}
            
            <Link to={"/sobre"}    className="link"     >Sobre a Empresa     </Link><br/><br/>
            <Link to={"/contato"}  className="link"     >Contatos da Empresa </Link><br/><br/>
            <Link to={"/produtos"} className="link"     >Página de Produtos  </Link><br/><br/>
            <Link to={"/amor"}     className="linkAmor" >JUJU e RAFINHA      </Link><br/><br/>

        </div>
    )
}

export default Home;