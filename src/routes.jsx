import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Home from "./pages/user/Home";
import PaginaEntrar from "./pages/Entrar";
=======
import Home from "./pages/Home";
import Cadastrar from "./pages/Cadastrar";
import Entrar from "./pages/Entrar";
>>>>>>> 00088981646511d55d151e0575b060ffc4d3cb2c

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
<<<<<<< HEAD
                <Route path="/" element={<Home/>} />   
                <Route path="/entrar" element={<PaginaEntrar/>} /> 
=======
                <Route path="/" element={<Home/>} /> 
                <Route path="/cadastro" element={<Cadastrar/>} /> 
                <Route path="/entrar" element={<Entrar/>} /> 
>>>>>>> 00088981646511d55d151e0575b060ffc4d3cb2c
            </Routes>
        </BrowserRouter>
    )
}
