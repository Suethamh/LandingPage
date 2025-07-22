import Clientes from "./Clientes/Clientes";
import Contato from "./Contato/Contato";
import FAQ from "./FAQ/FAQ";
import Header from "./Header/Header";
import MeuTrabalho from "./MeuTrabalho/MeuTrabalho";
import SobreMim from "./SobreMim/SobreMim";
import Wpp from "./Wpp/Wpp";
// import ParaMim from "./ParaMim/ParaMim";
import Footer from "./Footer/Footer";
import ParaMim from "./ParaMim/ParaMim";

function Main() {
    return (
        <main>
            <Header/>
            <SobreMim/>
            <MeuTrabalho/>
            <ParaMim/>
            <Clientes/>
            <FAQ/>
            <Contato/>
            <Wpp/>
            <Footer/>
        </main>
    );
}

export default Main;