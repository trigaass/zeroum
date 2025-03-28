import { Link } from "react-router-dom";
import "./header.css"

export const Header = () => {
    const currentPath = location.pathname;
    
    return (
        <div className="header">
            <div className="logoh">
                <img src="/logo&icon/zeroumlogo.png" />
            </div>
            <div className="linksh">
                <Link className={currentPath === "/" ? "active" : ""} to="/">Home</Link>
                <Link className={currentPath === "/sobre" ? "active" : ""} to="/sobre">sobre</Link>
                <Link className={currentPath === "/servicos" ? "active" : ""} to="/servicos">Serviços</Link>
            </div>
            <div className="orcamento">
                <a href="#">Faça um orçamento</a>
            </div>
        </div>
    )
}