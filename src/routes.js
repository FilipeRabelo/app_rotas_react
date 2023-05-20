
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from     "./pages/Home";
import Sobre from    "./pages/Sobre";
import Contato from  "./pages/Contato";
import Erro from     "./pages/Erro";
import Amor from     "./pages/Amor";
import Produtos from "./pages/Produtos";

import Header from   "./components/Header";

// CONFIGURAR O ROTEAMENTE
// CRIAR O COMPONENTE DE ROTEAMENTO

function RoutesApp(){
    return(
        <BrowserRouter>

            <Header/>

            <Routes>  {/* CHAMANDO AS ROTAS */}

                <Route path="/"         element={ <Home/>       } />
                <Route path="/sobre"    element={ <Sobre/>      } />
                <Route path="/contato"  element={ <Contato/>    } />
                <Route path="/amor"     element={ <Amor/>       } />

                <Route path="/produtos/:id" element={ <Produtos/>   } />

                {/*ERRO SEMPRE POR UlLTIMO*/}
                <Route path="*"         element={ <Erro/>       } />

            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp