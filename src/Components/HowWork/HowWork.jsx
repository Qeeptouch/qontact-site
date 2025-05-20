import SectionTitle from "../Common/SectionTitle";

const HowWork = () => {
    return (
        <section className="work-process-section section-padding fix">
            <div className="work-process-container-wrapper style1">
                <div className="container">
                    <div className="section-title text-center mxw-565 mx-auto">
                        <SectionTitle
                            SubTitle="Control de asistencia"
                            Title="Implementá Qontact<br/>en 24hs"
                        ></SectionTitle>
                    </div>
                    <div className="work-process-wrapper style1">
                        <div className="shape"><img src="/assets/images/shape/workProcessShape1_1.png" alt="shape" /></div>
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="step">PASO 1</div>
                                    <div className="title">Carga la nómina</div>
                                    <div className="text">Da de alta a los colaboradores de la empresa</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 child2 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="step">PASO 2</div>
                                    <div className="title">Habilita lugares</div>
                                    <div className="text">Definí los lugares para registrar entradas y salidas</div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="work-process-box style1 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="step">PASO 3</div>
                                    <div className="title">Controla asistencia</div>
                                    <div className="text">Inicia el uso de Qontact con tu nómina y comenzá el control</div>
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