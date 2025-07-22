import { useEffect, useState } from "react";
import PerguntaResposta from "../caixas/PerguntaResposta/PerguntaResposta";
import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import style from "./FAQ.module.css"


function FAQ() {

    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        fetch('https://suethamh.github.io/Front-End/WEB-js/landingPage/dados/faq.json')
            .then(response => {
                if (!response.ok) throw new Error('Erro na resposta: ' + response.status);
                return response.json();
            })
            .then(data => setFaqs(data))
            .catch(error => console.error('Erro ao carregar FAQ:', error));
    }, []);
        
    
    return (
        <section className={style.secaoFaq} id="faq">
            <div className={style.screenContainer}>
                <Titulosubtitulo titulo="Perguntas Frequentes"/>
                <div className={style.conteudo}>
                    {faqs && faqs.map((faq, i) => (
                        <PerguntaResposta 
                            key={i} 
                            pergunta={faq.pergunta} 
                            resposta={faq.resposta}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;