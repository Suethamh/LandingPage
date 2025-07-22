import { Link } from "react-router"
import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <nav className={styles.teste}>
            <a href="#header">Home</a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#trabalho">Meu Trabalho</a>
            <a href="#clientes">Clientes</a>
            <a href="#faq">FAQ</a>
            <a href="#contato">Contato</a>
        </nav>
    );
}

export default NavBar;