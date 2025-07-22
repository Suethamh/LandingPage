import React from "react";
import { Link } from "react-router";
import style from "./CallToAction.module.css";

function CallToAction(props) {

    function showText() {
        if (props.text === undefined || props.text === "") {
            return (
                <a href="#contato" className={style.texto}>
                    Precisa Falar?  
                    <span style={{ fontWeight: "bold" }}> Estou aqui!</span>
                </a>
            );
        } else {
            return (
                <a href="#contato" className={style.texto}>
                    {props.text}<img src={props.image}alt="" />
                </a>
            );
        }
    }

    return (
        <>
            {showText()}
        </>
    );
}

export default CallToAction;
