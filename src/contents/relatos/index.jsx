import { useState, useEffect } from "react";
import "./relatos.css";

export const Cardrel = () => {
    const relatos = [
        { text: "Trabalhar com essa agência foi um divisor de águas para o nosso negócio. Nosso alcance nas redes sociais triplicou e as estratégias de marketing digital implementadas trouxeram resultados incríveis. Profissionalismo e criatividade definem essa equipe!", author: "João Silva" },
        { text: "Desde que começamos a parceria, vimos um aumento significativo no engajamento e nas vendas. A equipe nos ajudou a construir uma identidade de marca forte e autêntica. Hoje, somos referência no nosso nicho, graças a eles!", author: "Maria Oliveira" },
        { text: "No início, estávamos inseguros sobre investir em marketing digital, mas essa agência nos mostrou o poder das estratégias bem planejadas. O retorno foi muito maior do que imaginávamos! Atendimento impecável e soluções personalizadas.", author: "Carlos Souza" }
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const nextItem = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % relatos.length);
            setFade(true);
        }, 500);
    };

    const prevItem = () => {
        setFade(false);
        setTimeout(() => {
            setIndex((prevIndex) =>
                prevIndex === 0 ? relatos.length - 1 : prevIndex - 1
            );
            setFade(true);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(nextItem, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="opnioes">
            <h1>O que dizem<br /> os nossos clientes</h1>
            <div className="carousel">
                <button onClick={prevItem} className="arrow-button">❮</button>
                <div className={`testimonial ${fade ? 'active' : ''}`}>
                    <p>"{relatos[index].text}"</p>
                    <span>- {relatos[index].author}</span>
                </div>
                <button onClick={nextItem} className="arrow-button">❯</button>
            </div>
        </div>
    );
};
