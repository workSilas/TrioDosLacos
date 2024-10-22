import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaginaCadastro from "./pages/Cadastro";
import PaginaEntrar from "./pages/Entrar";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/cadastro" element={<PaginaCadastro/>} /> 
                <Route path="/entrar" element={<PaginaEntrar/>} /> 
            </Routes>
        </BrowserRouter>
    )
}
