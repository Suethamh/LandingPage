import styles from "./NavBar.module.css"
import psicologia from "../../assets/abaNavegador/simboloPsicologia.png"

function NavBar() {
    return (
        <nav>
            <div>
                <img src={psicologia} alt="" className={styles.logoPsicologia} />
            </div>
            <div>
                <a href="#header">Home</a>
                <a href="#sobre">Sobre Mim</a>
                <a href="#trabalho">Meu Trabalho</a>
                <a href="#clientes">Clientes</a>
                <a href="#faq">FAQ</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    );
}

export default NavBar;