import { Cardctt } from "../../contents/contato/card"
import { Header } from "../../contents/header"
import { Servlist } from "../../contents/servicos/list"
import "./about.css"

export const Sobre = () => {
    return (
        <div className="sobre">
            <Header />
            <div className="sobre-container">
                <h1 className="titulo">INTEGRAMOS ESTRATÉGIA, DESIGN E STORYTELLING <br /> PARA CRIAR PROJETOS IMPACTANTES. </h1>

                <div className="conteudo">
                    <img src="/imagem.png" alt="Foto de perfil" className="imagem" />
                    <p className="texto">
                        A publicidade não precisa ser complicada e nós somos a prova disso. Somos uma agência criativa, conectada com as tendências e focada em resultados. Nosso propósito é transformar empreendimentos imobiliários em marcas fortes e reconhecidas, criando estratégias que elevam sua identidade e presença no mercado.
                    </p>
                </div>
            </div>
            <Servlist />
            <Cardctt />
        </div>
    )
}