import { Banner } from "../../contents/banner"
import { Header } from "../../contents/header"
import { Cardrel } from "../../contents/relatos"
import { Cardport } from "../../contents/servicos/prev"
import "./home.css"

export const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <div className="servsh">
                <Cardport
                    imgpot="/capas/GREENPARK.png"
                    tport="GREENPARK"
                    descport="Book digital do empreendimento Green Park em Porto de Galinhas, Pernambuco."
                />
                <Cardport
                    imgpot="/capas/TAMANDARE II.png"
                    tport="TAMANDARE II"
                    descport="Book digital do empreendimento Rooftop Orla Tamandaré II em Tamandaré, Pernambuco."
                />
                <Cardport
                    imgpot="/capas/MIRANTTE.png"
                    tport="MIRANTTE"
                    descport="Identidade visual e book digital do empreendimento Mirantte em Salvador, Bahia"
                />
                <Cardport
                    imgpot="/capas/MAUNA.png"
                    tport="MAUNA"
                    descport="Identidade visual e book digital do empreendimento Mauna em Porto de Galinhas, Pernambuco."
                />
                <Cardport
                    imgpot="/capas/MAKALOA.png"
                    tport="MAKALOA"
                    descport="Identidade visual e site do empreendimento Makaloa Premium em Porto de Galinhas, Pernambuco."
                />
                <Cardport
                    imgpot="/capas/KOA.png"
                    tport="Koa"
                    descport="Identidade visual e book digital do empreendimento Koa em Porto de Galinhas, Pernambuco."
                />
            </div>
            <Cardrel />
        </div>
    )
}