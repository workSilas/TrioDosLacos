import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Entrar from "./pages/Entrar";
import Encomendas from "./pages/user/Encomendas";
import CatalogoLacosDecorados from "./pages/user/CatalogoLacosDecorados";
import CatalogoFaixasDeBebe from "./pages/user/CatalogoFaixasDeBebe";
import CatalogoLacosEstampados from "./pages/user/CatalogoLacosEstampados";
import CatalogoKitsDeLacos from "./pages/user/CatalogoKitsDeLacos";
import PaginaProduto from "./pages/user/PaginaProduto";
import Ferramentas from "./pages/adm/Ferramentas";
import CadastrarVendas from "./pages/adm/CadastrarVendas";
import GerenciarProdutos from "./pages/adm/GerenciarProdutos";
import PoliticasDevolucao from "./pages/user/PoliticasDevolucao";
import PoliticasPrivacidade from "./pages/user/PoliticasPrivacidade";
import TermosUso from "./pages/user/TermosUso";
import Cadastro from "./pages/user/Cadastro";
import Login from "./pages/user/Login";
import MeuPerfil from "./pages/user/MeuPerfil";
import Erro from "./pages/Erro";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Entrar" element={<Entrar />} />
                <Route path="/Encomendas" element={<Encomendas />} />
                <Route path="/CatalogoLacosDecorados" element={<CatalogoLacosDecorados />} />
                <Route path="/CatalogoFaixasDeBebe" element={<CatalogoFaixasDeBebe />} />
                <Route path="/CatalogoLacosEstampados" element={<CatalogoLacosEstampados />} />
                <Route path="/CatalogoKitsDeLacos" element={<CatalogoKitsDeLacos />} />
                <Route path="/PaginaProduto" element={<PaginaProduto />} />
                <Route path="/Ferramentas" element={<Ferramentas />} />
                <Route path="/CadastrarVendas" element={<CadastrarVendas />} />
                <Route path="/GerenciarProdutos" element={<GerenciarProdutos />} />
                <Route path="/PoliticasDevolucao" element={<PoliticasDevolucao />} />
                <Route path="/PoliticasPrivacidade" element={<PoliticasPrivacidade />} />
                <Route path="/TermosUso" element={<TermosUso />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/MeuPerfil" element={<MeuPerfil />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}
