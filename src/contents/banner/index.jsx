import { Carrosel } from "../carrosel"
import "./banner.css"

export const Banner = () => {
    return (
        <div className="banner">
            <p>
                O futuro do seu<br />
                empreeendimento<br />
                <strong>começa aqui</strong>
            </p>
            <Carrosel />
        </div>
    )
}