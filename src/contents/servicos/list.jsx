import { useState } from "react";
import "./servcos.css";

const items = [
    { title: "Naming", content: "Criamos estratégias que fortalecem a identidade e posicionamento da sua marca no mercado." },
    { title: "Branding", content: "Desenvolvemos a identidade visual completa, aplicando-a em logo, padrões, texturas e materiais gráficos." },
    { title: "Pitch", content: "Produzimos books digitais impactantes para potencializar suas vendas." },
    { title: "Site", content: "Criamos sites intuitivos e atrativos para comercializar o seu empreendimento." },
    { title: "Vídeo", content: "Desenvolvemos vídeos envolventes para divulgar seu projeto com força e autoridade." }
];

export const Servlist = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <h1>O que fazemos?</h1>
            {items.map((item, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleItem(index)}>
                        <span>{item.title}</span>
                        <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>{activeIndex === index ? "−" : "+"}</span>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                        {item.content}
                    </div>
                </div>
            ))}
        </div>
    )
}