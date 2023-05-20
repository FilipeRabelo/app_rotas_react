
import "./style.css";
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className={"divErro"}>
            <h2>Ops, Parece que essa página não existe</h2>

            <hr/>
            <br/>

            <Link to={"./"} className={"link"}>VOLTAR PARA HOME</Link>

        </div>
    )
}

export default Erro;