import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/cadastro" element={<Cadastro/>} /> 
                <Route path="/entrar" element={<Entrar/>} /> 
            </Routes>
        </BrowserRouter>
    )
}
