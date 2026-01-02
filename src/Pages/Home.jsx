
import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import Feature2 from "../Components/Feature/Feature2";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork from "../Components/HowWork/HowWork";
import Pricing1 from "../Components/Pricing/Pricing1";
import Testimonial from "../Components/Testimonial/Testimonial";
import { ArcadeEmbed } from "./Arcade";

const Home = () => {
    return (
        <div>
            <HeroBanner1
                subtitle="<span>Control de asistencia!</span>"
                title={
                        <>
                            <span>Hacemos más fácil</span><br />
                            <span>el control de asistencia</span><br />
                            <span>con WhatsApp</span>
                        </>
                        }
                content={
                        <>
                            <span>Simplifica el control de presentismo con una solución que tu equipo</span><br />
                            <span>entiende, adopta y usa desde el primer día, <strong>sin descargar apps.</strong></span><br />
                        </>
                        }
                btnname="Escribinos"
                btnurl="https://wa.me/+5491155930422"
                // btntwo="Probá la demo"
                // btn2url="https://demo.qontact.com.ar"
                // // cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="+25.000"
                cuscontent={
                            <strong>Colaboradores fichan a diario</strong>
                            }
                rating="4.8/5"
                ratingcon={
                            <strong>Rating</strong>
                            }
                img="/assets/images/intro/introThumb1_1.png"
            ></HeroBanner1>
            <Brand1></Brand1>
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="Sobre Qontact"
                title={
                    <>
                        <span className="hero-title-custom">
                        <span>Si controlar asistencia</span>
                        <span>se volvió otra carga más,</span>
                        <span>es momento de simplificar</span>
                        </span>
                    </>
                        }
                FeatureList={[
                    "Reduce el ausentismo y llegadas tarde.",
                    "Asigna puntos de marcación con geolocalización.",
                    "Cacula horas extra con precisión.",
                    "Visualiza toda la operación en un solo lugar."
                ]}                
                btnname="Probar Qontact hoy"
                btnurl="https://calendly.com/d/cwdz-v6j-4t5/demo-qontact"
            ></About1>
            <HowWork></HowWork>
            {/* <Choose1
                subtitle="Beneficios"
                title="¿Por qué controlar asistencia con Qontact?"
                content="Controlar la asistencia con Qontact te permite ahorrar tiempo, eliminar el error humano y tener visibilidad en tiempo real de quién está presente, ausente o llegó tarde. Sin necesidad de instalar apps ni comprar hardware, Qontact simplifica la gestión diaria y te da datos claros para tomar mejores decisiones en tu equipo."
                FeatureList={[
                    "Múltiples sucursales",
                    "Implementación en 24hs",
                ]} 
                FeatureList2={[
                    "Ahorrá tiempo",
                    "100% en la nube",
                ]}                 
                btnname="Pedí una demo"
                btnurl="https://calendly.com/d/cwdz-v6j-4t5/demo-qontact"
            ></Choose1> */}
            {/* <section className="arcade">
                
                <ArcadeEmbed />
                
            </section> */}
            <Feature1></Feature1>
            <Faq1></Faq1>
            <Testimonial></Testimonial>
            <br /><br /><br /><br /> 
            
            <Pricing1></Pricing1>
            <Feature2></Feature2>
        </div>
    );
};

export default Home;