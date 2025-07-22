import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import styles from "./ParaMim.module.css"
import ferramenta from "../../assets/paraMim/screwdriver-wrench-solid.svg"
import sorriso from "../../assets/paraMim/face-laugh-beam-solid.svg"
import bussola from "../../assets/paraMim/compass-solid.svg"
import pombo from "../../assets/paraMim/dove-solid.svg"
import estrela from "../../assets/paraMim/star-solid.svg"
import CallToAction from "../CallToAction/CallToAction";
import balao from "../../assets/paraMim/comment-solid.svg"
import puzzle from "../../assets/paraMim/puzzle-piece-solid.svg"

function ParaMim() {

    const boxesParaMim = [
            { imagem: ferramenta, texto: "É um investimento no bem-estar e na construção de uma vida alinhada com seus valores." },
            { imagem: sorriso, texto: "Atende também ao desejo de viver com mais plenitude e significado." },
            { imagem: bussola, texto: "Apoia na tomada de decisões e no enfrentamento de desafios emocionais." },
            { imagem: pombo, texto: "Ajuda em questões como ansiedade, depressão, estresse, luto e conflitos afetivos." },
            { imagem: estrela, texto: "Transforma a forma de viver e de se relacionar com o mundo." }
        ];

    const fazerBem = [
        { imagem: puzzle, texto: "Nem sempre é claro o que nos afeta. O processo terapêutico ajuda a trazer luz ao que está implícito." },
        { imagem: pombo, texto: "Um espaço seguro para organizar pensamentos, se escutar com clareza e cuidar de si." },
        { imagem: estrela, texto: "Torna mais leve lidar com desafios, relações e decisões do dia a dia." },
    ]


    return (
        <>
            <section className={styles.paraMim}>
                <h1>Um momento para refletir...</h1>
                <div className={styles.container}>
                    <div>
                        <details>
                            <summary>
                                <Titulosubtitulo titulo="A psicoterapia é pra mim?" subtitulo="Indicada para quem busca compreender melhor sua trajetória e emoções."/>
                                <span>➜</span>
                            </summary>
                            {boxesParaMim.map((box, i) => 
                                <div key={i}>
                                    <div>
                                        <img src={box.imagem} alt="" />
                                    </div>
                                    <span>{box.texto}</span>
                                </div>
                            )}
                        </details>
                    </div>
                    <div>
                        <h3>Para descobrir basta...</h3>
                        <CallToAction text="Conversar!" image={balao}/>
                    </div>
                    <div>
                        <details>
                            <summary>
                                <Titulosubtitulo titulo="Por que a psicoterapia pode me fazer tão bem?" subtitulo=" Indicada para quem busca compreender melhor sua trajetória e emoções."/>
                                <span>➜</span>
                            </summary>
                            {fazerBem.map((box, i) => 
                                <div key={i}>
                                    <div>
                                        <img src={box.imagem} alt="" />
                                    </div>
                                    <span>{box.texto}</span>
                                </div>
                            )}
                            <a href="#clientes">"Outras pessoas já deram esse passo, conheça a experiência delas"</a>
                        </details>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ParaMim;