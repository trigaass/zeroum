import "./contato.css";

export const Cardctt = () => {
    return (
        <div className="contato-card">
            <h1>Vamos conversar?</h1>
            <div className="contato">
                <div className="contato-info">
                    <p><strong>Entre em contato:</strong></p>
                    <p>(32) 3025-5176</p>
                    <p>hello@studiobrunner.com</p>
                </div>
                <div className="contato-trabalho">
                    <p><strong>Deseja se juntar ao time?</strong></p>
                    <p>Envie seu portfólio e CV para:</p>
                    <p>careers@studiobrunner.com</p>
                </div>
            </div>
        </div>
    )
}