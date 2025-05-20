
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
                title="Controlá la asistencia con WhatsApp"
                content="Gestioná la asistencia de tu equipo de la manera más simple posible!"
                btnname="Escribinos"
                btnurl="https://wa.me/+5491155930422"
                btntwo="Pedi una demo"
                btn2url="https://calendly.com/d/yp5-w2r-8pc/30min?month=2025-05"
                cusimg="/assets/images/intro/introProfileThumb1_1.png"
                cusnumber="+12.500"
                cuscontent="Colaboradores felices"
                rating="4.8/5"
                ratingcon="Rating"
                img="/assets/images/intro/introThumb1_1.png"
            ></HeroBanner1>
            <Brand1></Brand1>
            <About1
                img1="/assets/images/about/aboutThumb1_1.png"
                img2="/assets/images/about/aboutThumb1_2.png"
                subtitle="Sobre Qontact"
                title="Reportes simples con fichaje ágil"
                content="Nuestro sistema de control ayuda al área de recursos humanos a gestionar de la manera más eficiente la asistencia de los colaboradores."
                FeatureList={[
                    "Integrado 100% a WhatsApp.",
                    "Reportes en tiempo real.",
                    "Control de asistencia 24/7.",
                ]}                
                btnname="Pedí una demo"
                btnurl="https://calendly.com/d/yp5-w2r-8pc/30min?month=2025-05"
            ></About1>
            <HowWork></HowWork>
            <Choose1
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
                btnurl="https://calendly.com/d/yp5-w2r-8pc/30min?month=2025-05"
            ></Choose1>
            {/* <section className="arcade">
                
                <ArcadeEmbed />
                
            </section> */}
            <Feature1></Feature1>
            <Faq1></Faq1>
            <Testimonial></Testimonial>
            <br /><br /><br /><br /> 
            {/* <Feature2></Feature2> */}
            <Pricing1></Pricing1>
        </div>
    );
};

export default Home;