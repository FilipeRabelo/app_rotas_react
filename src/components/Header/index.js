import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

                        // CRIANDOS COMPONENTES //

export default function Header(){
    return(
        <header>

            {/*<h2>Sujeito Dev</h2><hr/>*/}
            <Link to={"./"} className={"linkHeader"}>Sujeito Dev</Link>

            <div className={"menu"}>

                <Link to={"./"} >Home </Link>
                <Link to={"./sobre"} > Sobre </Link>
                <Link to={"./contato"} > Contatos</Link>

            </div>
        </header>
    )
}

// export default Header;