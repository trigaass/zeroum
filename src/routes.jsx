import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./screens/home/home"
import { Sobre } from "./screens/about/about"

export const Approutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sobre" element={<Sobre />}/>
            </Routes>
        </BrowserRouter>

    )
}