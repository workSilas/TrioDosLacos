import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/user/Home";
import Entrar from "./pages/Entrar";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/entrar" element={<Entrar/>} /> 
            </Routes>
        </BrowserRouter>
    )
}
