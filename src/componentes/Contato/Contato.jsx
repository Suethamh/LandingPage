import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import wpp from "../../assets/Contato/WhatsApp.svg"
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Contato.module.css"

function Contato() {

    const url = "https://api.whatsapp.com/send/?phone=%2B5531992397353&text=Olá%2C+João.+Gostaria+de+agendar+minha+primeira+consulta.+Como+podemos+prosseguir%3F&type=phone_number&app_absent=0"
    
    const [msgEnvio, setMsgEnvio] = useState("")
    const [usuarioIn, setUsuarioIn] = useState({
        nome: "",
        email: "",
        mensagem: "",
    })

    const templateParams = {
        from_name: usuarioIn.nome,
        from_email: usuarioIn.email,
        mensagem: usuarioIn.mensagem,
    }

    function handleChange(e){
        setUsuarioIn({...usuarioIn, [e.target.name]: e.target.value})
    }

    function mostrarValor(e){
        e.preventDefault();
        if(!usuarioIn.nome.trim()) alert("Nome inválido. Tente Novamente");
        else if (!usuarioIn.email.trim()) alert("Email inválido. Tente Novamente");
        else if (!usuarioIn.mensagem.trim()) alert("Mensagem inválida. Tente Novamente");
        else {
            emailjs
                .send("service_igaz4zg","template_hunr9bf", templateParams, "91xO1vm0nRKod-b5t")
                .then(
                    function(response) {
                        setUsuarioIn({...usuarioIn, nome:"",email:"", mensagem:""})
                        setMsgEnvio("Email enviado com sucesso!")
                    },
                    function(erro) {
                        setMsgEnvio("Erro ao enviar o email.")
                    }
                )
            setMsgEnvio("Aguarde um momento...")
        }
    }

    return (
        <>
            <section id="contato" className={style.contato}>
                <Titulosubtitulo titulo="Agende comigo!"/>
                <div>
                    <div>
                        <Titulosubtitulo subtitulo="Marque uma consulta comigo no meu WhatsApp!"/>
                        <Link className={style.wpp} to={url} target="_blank"><img src={wpp} alt="" /></Link>
                    </div>
                    <div>
                        <span>
                            OU
                        </span>
                    </div>
                    <div>
                        <Titulosubtitulo subtitulo="Vamos nos tornar melhor, juntos!"/>
                        <form action="">
                            <label htmlFor="nome">Nome Completo:</label>
                            <input type="text" name="nome" id="nome" onChange={(e) => handleChange(e)} value={usuarioIn.nome}/>

                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange={(e) => handleChange(e)} value={usuarioIn.email}/>

                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea type="text" name="mensagem" id="mensagem" onChange={(e) => handleChange(e)} value={usuarioIn.mensagem}/>

                            <input className={style.botao} type="submit" value="Enviar email" onClick={(e) => mostrarValor(e)}/>
                            <p>{msgEnvio}</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contato;