
import "./style.css";
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className={"divErro"}>
            <h5>Ops, Parece que essa página não existe</h5>

            <hr/>
            <br/>

            <Link to={"./"} className={"link"}>VOLTAR PARA HOME</Link>

        </div>
    )
}

export default Erro;