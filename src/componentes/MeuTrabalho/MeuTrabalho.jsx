import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import style from "./MeuTrabalho.module.css"
import CaixaComRisco from "../caixas/CaixaComRisco/CaixaComRisco"
import Boxes from "../caixas/Boxes"

import brain from "../../assets/meuTrabalho/brain-solid.svg";
import seedling from "../../assets/meuTrabalho/seedling-solid.svg";
import scale from "../../assets/meuTrabalho/scale-balanced-solid.svg";
import heart from "../../assets/meuTrabalho/heart-solid.svg";
import check from "../../assets/meuTrabalho/check-solid.svg";
import star from "../../assets/meuTrabalho/star-solid.svg";

function MeuTrabalho() {

    const boxesPsicoterapia = [
        { imagem: brain, texto: "Favorece os sentimentos, comportamentos e relações." },
        { imagem: seedling, texto: "Vai além das crises, incentivando o crescimento pessoal." },
        { imagem: scale, texto: "Ajuda a resgatar o equilíbrio emocional em um mundo acelerado." },
        { imagem: heart, texto: "Buscar terapia é um ato de coragem e cuidado consigo mesmo." },
        { imagem: check, texto: "Fortalece a autonomia e melhora a qualidade das relações." },
        { imagem: star, texto: "Reflete o desejo de viver  com mais autenticidade e bem-estar." }
    ];

    const definicaoPsicoterapia = {
        subtitulo: "O que é a Psicoterapia?",
        texto: "A psicoterapia é um espaço de escuta acolhedora que promove autoconhecimento, equilíbrio emocional e fortalecimento da autonomia, ajudando a lidar com desafios e a viver com mais autenticidade.",
    }
    
    return (
        <section className={style.meuTrabalho} id="trabalho">
            <Titulosubtitulo titulo="Meu trabalho" subtitulo="A psicoterapia"/>
            <div>
                <div>
                    <CaixaComRisco subtitulo={definicaoPsicoterapia.subtitulo} 
                            texto={definicaoPsicoterapia.texto} />

                    <Boxes items={boxesPsicoterapia} />
                </div>
            </div>
        </section>
    );
}

export default MeuTrabalho;