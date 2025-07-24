
import React from 'react';
import { DashboardIcon, CRMIcon, DataSmartIcon } from './IconComponents';

const servicesData = [
    {
        icon: DashboardIcon,
        title: 'Dashborads interactivos',
        description: 'Visualice sus métricas más importantes en tiempo real. Creamos paneles de control personalizados e intuitivos que facilitan la comprensión y la gestión de datos complejos.',
    },
    {
        icon: CRMIcon,
        title: 'CRM Predictivos',
        description: 'Optimice sus relaciones con los clientes. Nuestras soluciones CRM con IA prevén tendencias, identifican oportunidades y automatizan flujos de trabajo para una interacción más inteligente.',
    },
    {
        icon: DataSmartIcon,
        title: 'Soluciones Inteligentes de Datos',
        description: 'Aproveche al máximo el potencial de sus datos. Ofrecemos servicios de procesamiento, análisis y modelado de datos a medida para resolver los desafíos específicos de su negocio.',
    },
];

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
    <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/10 mb-6 border border-blue-500/30">
            <Icon className="h-8 w-8 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 sm:py-32 bg-slate-900">
            
            <div className="container mx-auto px-6">
                
                <div className="text-center mb-16">
                    <div>
                        <div className="text-[120px] font-bold text-white leading-tight">
                                QUANTUM<span className="text-blue-500">BI</span>
                        </div>
                        <div className="text-[45px] font-normal mt-0.5 tracking-widest text-slate-400">
                                S.A.S
                        </div>
                    </div>
                    <h2 className="mt-20 text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Lo que <span className="text-blue-500">Ofrecemos</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Nos especializamos en crear herramientas poderosas basadas en datos para impulsar su negocio.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
