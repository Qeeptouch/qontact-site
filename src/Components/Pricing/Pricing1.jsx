import { useState } from "react";
import PricingCard from "../Card/PricingCard";

const Pricing1 = () => {

    const [isActive, setIsActive] = useState('monthly');

    return (
        <section className="pricing-section section-padding pt-0 fix">
        <div className="container">
            <div className="section-title text-center mxw-685 mx-auto">
                {/* <div className="subtitle">
                    Planes <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
                </div> */}
                <h2 className=" ">Elegí el mejor plan que se adapte a tu empresa!</h2>
                <p className="text">Si te quedan dudas contactanos y te asesoramos para elegir el mejor plan para tu empresa
                </p>
            </div>
            <div className="pricing-wrapper style1">
                <div className="tab-section d-flex justify-content-center align-items-center">
                    {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className={`nav-item ${isActive === 'monthly' ? 'active' : ''}`} onClick={() => setIsActive('monthly')} role="presentation">
                            <button className="nav-link active" id="pills-monthly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-monthly" type="button" role="tab" aria-controls="pills-monthly"
                                aria-selected="true">Monthly</button>
                        </li>
                        <li className={`nav-item ${isActive === 'yearly' ? 'active' : ''}`} onClick={() => setIsActive('yearly')}  role="presentation">
                            <button className="nav-link" id="pills-yearly-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-yearly" type="button" role="tab" aria-controls="pills-yearly"
                                aria-selected="false" tabIndex="-1">Yearly</button>
                        </li>
                    </ul> */}
                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div className={`tab-pane ${isActive === 'monthly' ? 'active' : ''}`} id="pills-monthly" role="tabpanel"
                        aria-labelledby="pills-monthly-tab">
                        <div className="row gy-5 justify-content-center">

                            {/* <PricingCard
                                name="Basic Plan"
                                price="$14.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard> */}
                            <PricingCard
                                name="Lite"
                                //price="$1.00"
                                // monthly="Per Month"
                                content="Pensado para empresas que comienzan a digitalizar su control de asistencia"
                                FeatureList={[
                                    "15 días de prueba gratuita",
                                    "Control de entradas",
                                    "Control de salidas",
                                    "Máximo 5 puntos de control",
                                    "Backup de datos por 3 meses",                        
                                    "Soporte Web",
                                ]} 
                                btnname="Quiero más info!"
                                btnurl="https://wa.me/+5491155930422?text=Quiero%20más%20info%20sobre%20el%20plan%20Standard%20de%20Qontact"
                            ></PricingCard>
                            <PricingCard
                                name="Standard"
                                // price="$2.50"
                                // monthly="Per Month"
                                content="Pensado para empresas que aman digitalizar su control de asistencia"
                                FeatureList={[
                                    "Todo lo incluido en Lite más:",
                                    "Control de llegadas tarde",
                                    "Control de turnos",
                                    "Alarmas de falta de personal",                                    
                                    "Capacidad del legajo digital 1GB",
                                    "Soporte por Web y WhatsApp",
                                ]} 
                                btnname="Quiero más info!"
                                btnurl="https://wa.me/+5491155930422?text=Quiero%20más%20info%20sobre%20el%20plan%20Standard%20de%20Qontact"
                            ></PricingCard>

                            <PricingCard
                                name="Company"
                                // price="$24.99"
                                // monthly="Per Month"
                                content="Pensado para empresas que buscan más que un simple control de asistencia"
                                FeatureList={[
                                    "Toto lo incluido en Standard más:",
                                    "Sin límite de puntos de control",
                                    "Reporte de ausencias y novedades",
                                    "Solicitudes de licencias",                                                                    
                                    "Acceso prioritario a nuevas features",
                                    "Soporte por WhatsApp y teléfonico",
                                ]} 
                                btnname="Quiero más info!"
                                btnurl="https://wa.me/+5491155930422?text=Quiero%20más%20info%20sobre%20el%20plan%20Company%20de%20Qontact"
                            ></PricingCard>

                        </div>
                    </div>
                    <div className={`tab-pane ${isActive === 'yearly' ? 'active' : ''}`} id="pills-yearly" role="tabpanel" aria-labelledby="pills-yearly-tab">
                        <div className="row gy-5">

                        <PricingCard
                                name="Basic Plan"
                                price="$34.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>

                            <PricingCard
                                name="Standard Plan"
                                price="$64.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>

                            <PricingCard
                                name="Premium Plan Plan"
                                price="$84.99"
                                monthly="Per Month"
                                content="There are many variations of passages of Lorem Ipsum available, but the majority"
                                FeatureList={[
                                    "7 days free access",
                                    "Maximum of 5 collaborators",
                                    "Cloud backup 1GB",
                                    "Maximum 50 tasks per week",
                                    "Updates for 1 Year",
                                ]} 
                                btnname="Get You Free plan"
                                btnurl="/pricing"
                            ></PricingCard>                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Pricing1;