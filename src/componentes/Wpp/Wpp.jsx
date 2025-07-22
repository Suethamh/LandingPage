import { FloatingWhatsApp } from "react-floating-whatsapp";
import joao from "../../assets/Contato/fotoTeste.jpeg"

function Wpp() {
    return (
        <>
            <FloatingWhatsApp
                        phoneNumber="+5531992397353"
                        accountName="João Vítor Scofield"
                        chatMessage="Comece sua jornada de bem-estar. Converse comigo no WhatsApp!"
                        statusMessage="disponível"
                        placeholder="Digite a sua mensagem"
                        avatar={joao}
                        allowClickAway={true}
                        allowEsc={true}
                        />
        </>
    );
}

export default Wpp;