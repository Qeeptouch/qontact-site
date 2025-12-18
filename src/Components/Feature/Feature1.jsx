import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
    return (
        <section className="wcu-section section-padding fix">
            <div className="wcu-container-wrapper style1">
                <div className="container">      
                    <div className="section-title text-center mxw-1450 mx-auto wow fadeInUp feature-section-title" data-wow-delay=".2s">
                    <SectionTitle
                        Title="Todo lo que Qontact hace por tu gestión diaria"
                        SubTitle="¿Que más tiene Qontact?"
                    ></SectionTitle>                       
                    </div>
                    <div className="wcu-wrapper style1">
                        <div className="row gy-5 d-flex justify-content-center">
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_4.svg"
                                        title="100% WhatsApp"
                                        content="Los colaboradores utilizan la app más utilizada por ellos"
                                    ></FeatureCard>
                                    {/* <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Licencias"
                                        content="No tiene curva de aprendizaje"
                                    ></FeatureCard> */}
                                     <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_2.svg"
                                        title="Alertas"
                                        content="Entérate cuando falta personal en los turnos"
                                    ></FeatureCard>    
                                      <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_3.svg"
                                        title="Legajo digital"
                                        content="Carga info digitalizada de los colaboradores"
                                    ></FeatureCard> 
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center">
                                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                                    {/* <div className="main-thumb wow bounceInUp" data-wow-delay=".6s"><img
                                            src="/assets/images/wcu/wcuThumb1_1.png" alt="thumb" /></div> */}
                                    {/* <div className="shape"><img src="/assets/images/shape/wcuThumbShape1_1.png" alt="shape" />
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                                <div className="wcu-content">
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_1.svg"
                                        title="Licencias"
                                        content="Los colaboradores pueden solicitar licencias ágilmente"
                                    ></FeatureCard>
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_5.svg"
                                        title="Multiples lugares"
                                        content="Controla asistencia en todas las sucursales necesarias"
                                    ></FeatureCard>                                                                          
                                    <FeatureCard
                                        img="/assets/images/icon/wcuIcon1_6.svg"
                                        title="Reportes"
                                        content="Obtén reportes de asistencia, faltas y novedades"
                                    ></FeatureCard> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature1;