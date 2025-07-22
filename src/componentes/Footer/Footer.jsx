import style from "./Footer.module.css"

function Footer() {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <h3>Meios de contato:</h3>
                    <p>Email: jvscofield.psi@gmail.com</p>
                    <p>WhatsApp: (31) 99239-7353</p>
                    <p>Todos os direitos reservados © 2025</p>

                </div>
            </footer>
        </>
    );
}

export default Footer;