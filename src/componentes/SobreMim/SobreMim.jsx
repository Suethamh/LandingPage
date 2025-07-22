import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import style from "./SobreMim.module.css"
import fotoJoao from '../../assets/sobreMim/fotoJoao.jpg';
import Boxes from "../caixas/Boxes";

import laptop from "../../assets/sobreMim/laptop-solid.svg";
import graduado from "../../assets/sobreMim/user-graduate-solid.svg";
import comentario from "../../assets/sobreMim/comment-solid.svg";
import folha from "../../assets/sobreMim/folhaLoura.png"


function SobreMim() {
    const dadosCaixas = [
        { imagem: laptop, texto: "Graduado na PUC Minas" },
        { imagem: graduado, texto: "+5 anos de formação" },
        { imagem: comentario, texto: "Consultas presenciais e virtuais" }
    ];


    return (
        <>
            <section className={style.sobreMim} id="sobre">
                    <Titulosubtitulo titulo="Um pouco Sobre Mim"/>
                <div>
                    <div>
                        {/* <img src={folha} alt="Essa imagem ainda é um teste talvez a gente não use." /> */} 
                        <img src={fotoJoao} alt="" className={style.fotoJoao} />
                        <p>João Vítor Oliveira Scofield Souza <br/>CRP: 04/62.100</p>
                    </div>
                    
                    <div>
                        <h3>Olá, é um prazer te conhecer, meu nome é </h3>
                        <span>João Vítor</span>
                        <p><span>Graduado pela PUC Minas</span>, <span>há 5 anos atuo na transformação vidas através da psicologia.</span> Meu trabalho prioriza o <span>paciente como o protagonista do processo terapêutico</span>, buscando reflexões e soluções que façam sentido com suas próprias capacidades, história, experiências de vida e visão de mundo.</p>

                        <p>Tenho como compromisso estabelecer <span>um ambiente seguro e acolhedor</span>, bem como, o desenvolver de uma <span>prática clínica de excelência</span> que ofereça <span>real transformação</span>.</p>
                        
                        <p><span>A psicoterapia pode ser uma poderosa aliada</span> para a superação situações de dificuldade e angústia, correção de rumos e busca por crescimento pessoal. Para tal, <span>será um prazer estar junto de ti! Seja bem-vindo(a)!</span></p>
                    </div>
                </div>

                <Boxes items={dadosCaixas} />
            </section>
        </>
    );
}

export default SobreMim;