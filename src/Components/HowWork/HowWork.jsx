import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="Control de asistencia"
                            Title="¿Cómo funciona Qontact?"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src="/assets/images/shape/workProcessShape1_1.png" alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">PASO 1</div>
                                    <div className="title">Escanea el QR</div>
                                    <div className="text">El colaborador escanea el QR e inicia una conversación en WhatsApp</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">PASO 2</div>
                                    <div className="title">Envia ubicación</div>
                                    <div className="text">El bot pide la ubicación para confirmar que está en el lugar correcto</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">PASO 3</div>
                                    <div className="title">¡Fichada finalizada!</div>
                                    <div className="text">Si todo coincide, se registra al instante!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWork;