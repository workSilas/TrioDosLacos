import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Entrar from "./pages/Entrar";
import Encomendas from "./pages/user/Encomendas";
import CatalogoLacosDecorados from "./pages/user/CatalogoLacosDecorados";
import Produto from "./pages/user/Produto";
import Ferramentas from "./pages/adm/Ferramentas";
import CadastrarVendas from "./pages/adm/CadastrarVendas";
import GerenciarProdutos from "./pages/adm/GerenciarProdutos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/Entrar" element={<Entrar/>} /> 
                <Route path="/Encomendas" element={<Encomendas/>} /> 
                <Route path="/CatalogoLacosDecorados" element={<CatalogoLacosDecorados/>} /> 
                <Route path="/Produto" element={<Produto/>} /> 
                <Route path="/Ferramentas" element={<Ferramentas/>} /> 
                <Route path="/CadastrarVendas" element={<CadastrarVendas/>} /> 
                <Route path="/GerenciarProdutos" element={<GerenciarProdutos/>} /> 
            </Routes>
        </BrowserRouter>
    )
}

// Falta fazere a 404