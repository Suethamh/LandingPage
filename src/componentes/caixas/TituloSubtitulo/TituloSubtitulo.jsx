import "./TituloSubtitulo.module.css"

function Titulosubtitulo(props) {
    return (
        <>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
        </>
    );
}

export default Titulosubtitulo;