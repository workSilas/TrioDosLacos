import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Entrar from "./pages/Entrar";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/cadastro" element={<Cadastrar/>} /> 
                <Route path="/entrar" element={<Entrar/>} /> 
            </Routes>
        </BrowserRouter>
    )
}
