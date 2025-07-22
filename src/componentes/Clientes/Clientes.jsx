import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImagemTexto from "../caixas/ImagemTexto/ImagemTexto";
import Titulosubtitulo from "../caixas/TituloSubtitulo/TituloSubtitulo";
import homem1 from "../../assets/Clientes/man-technologist-dark-skin-tone_1f468-1f3ff-200d-1f4bb.png"
import homem2 from "../../assets/Clientes/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png"
import homem3 from "../../assets/Clientes/man-technologist-medium-skin-tone_1f468-1f3fd-200d-1f4bb.png"
import mulher1 from "../../assets/Clientes/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png"
import mulher2 from "../../assets/Clientes/technologist-medium-dark-skin-tone_1f9d1-1f3fe-200d-1f4bb.png"
import mulher3 from "../../assets/Clientes/woman-technologist-dark-skin-tone_1f469-1f3ff-200d-1f4bb.png"
import pin from "../../assets/Clientes/dots.svg"
import aspas from "../../assets/Clientes/aspas.svg"
import style from "./Clientes.module.css"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CallToAction from "../CallToAction/CallToAction";

function Clientes() {
    
    const clientes = [
        {
            id: 1,
            nome: 'Felipe, 22 anos',
            localizacao: 'Maringá - PR',
            depoimento: 'Nunca tive preconceito com terapia, mas mesmo sabendo que precisava fui empurrando com a barriga. Que arrependimento. As coisas já poderiam ter melhorado muito antes se eu não tivesse enrolado tanto. A coisa que mais me ajudou foi aprender a levar a minha mente a buscar sempre por soluções e controlar o pessimismo. Obrigado de coração!',
            imagem: homem1
        },
        {
            id: 2,
            nome: 'Simone, 24 anos',
            localizacao: 'São Paulo - SP',
            depoimento: 'João, você é um profissional maravilhoso e em meses me ajudou a transformar coisas, que eu já estava falhando há anos em conseguir. Me faltam palavras pra descrever o quanto você é atencioso, esforçado e me impressiona com a sua inteligência. Recomendo muito fazer terapia, especialmente com você!',
            imagem: mulher1
        },
        {
            id: 3,
            nome: 'Luísa, 41 anos',
            localizacao: 'Ilhéus - BA',
            depoimento: 'Durante muitos anos lutei contra a depressão e o burnout no trabalho da última vez, depois de anos com psiquiatra e remédio, com a terapia com o João Vitor eu finalmente consegui encontrar força dentro de mim, me sentir empoderada e reconhecer que mesmo com tanto sofrimento tenho vitórias e muitas coisas em mim pra eu mesma gostar e valorizar.',
            imagem: mulher2
        },
        {
            id: 4,
            nome: 'Carlos, 27 anos',
            localizacao: 'São Paulo - SP',
            depoimento: 'Excelente psicólogo! Me ajudou muito a organizar minha vida, me entender melhor, perdoar pessoas e a mim mesmo. Nunca imaginei a diferença que fazer psicoterapia podia fazer, apesar de todo mundo falar. Recomendo!',
            imagem: homem2
        },
        {
            id: 5,
            nome: 'Matheus, 37 anos',
            localizacao: 'Sorocaba - SP',
            depoimento: 'João, muito obrigado por seu tempo, pela sua paciência e gentileza! Quando cheguei até você sentia o mundo embaralhado dentro de mim, refém de péssimos hábitos e tudo parecia estar saindo do controle. Hoje me conheço melhor, enxergo as coisas com mais clareza, lido melhor com as minhas emoções e finalmente sei o que é disciplina',
            imagem: homem3
        },
        {
            id: 6,
            nome: 'Rosana, 35 anos',
            localizacao: 'Belo Horizonte - MG',
            depoimento: 'A terapia representou pra mim muita cura e mudança na minha vida. Depois da terapia consegui me tornar mais produtiva, controlar mais a ansiedade, a insonia e perceber o que tinha de errado na minha vida. Agradeço muito seu cuidado e dedicação João. Valeu muito a pena.',
            imagem: mulher3
        }
    ]

    const ClienteCard = ({cliente}) => {
        return (
            <div className={style.card}>
                <div className={style.clienteInfo}>
                    <ImagemTexto imagem={cliente.imagem} texto={cliente.nome}/>
                    <ImagemTexto imagem={pin} texto={cliente.localizacao}/>
                </div>
                <div className={style.clienteCitacao}>
                    <ImagemTexto imagem={aspas} texto={cliente.depoimento}/>
                </div>
            </div>
        )
    }
    
    return (
        <section  id="clientes">
            <Titulosubtitulo titulo="Meus Clientes" subtitulo=""/>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            breakpoints={{
                0: {
                slidesPerView: 1,
                },
                600: {
                slidesPerView: 1.2,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 3,
                },
            }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className={style.swiper}
            >
                {clientes.map((cliente, i) => (
                    <SwiperSlide key={i}>
                    <ClienteCard cliente={cliente} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CallToAction/>
        </section>
    );
}

export default Clientes;