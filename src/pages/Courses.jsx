import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    FileJson,
    LineChart,
    BrainCircuit,
    Sparkles,
    Cpu,
    Server,
    Network,
    ShieldCheck,

    CheckCircle2,
    Rocket,
    Waypoints,
    ChevronRight,
    Cloud,
    Layout
} from 'lucide-react';
import RoadmapItem from '../components/RoadmapItem';
import CourseDetail from '../components/CourseDetail';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import { specializations } from '../data/specializations';

const MainSection = ({ title, subtitle, icon: Icon, children, isLast }) => (
    <div className="relative pb-16 sm:pb-24">
        {/* Line - Aligned to center of icon */}
        {/* Mobile: Icon w-12 (48px) -> Center 24px. Line w-1 (4px) -> left-[22px] */}
        {/* Mobile Gap: gap-6 (24px). Icon 48. Content starts at 48+24 = 72px */}
        {!isLast && <div className="absolute left-[22px] sm:left-8 top-12 sm:top-16 bottom-0 w-1 bg-gray-200" />}

        {/* Mobile Layout Switch */}
        <div className={`sm:flex sm:gap-8 ${isLast ? 'block' : 'flex gap-4'}`}>

            {/* Icon & Header Wrapper */}
            <div className={`
                relative z-10 flex-shrink-0 
                ${isLast ? 'flex items-center gap-4 mb-6 sm:mb-0 sm:block' : ''}
            `}>
                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-brand-dark flex items-center justify-center text-white shadow-lg border-4 border-white ring-4 ring-gray-50 flex-shrink-0">
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={32} className="hidden sm:block" />
                </div>

                {/* Mobile Title (Only for Full Width Mode) */}
                {isLast && (
                    <div className="sm:hidden min-w-0">
                        <h2 className="text-xl font-bold text-brand-dark mb-0.5">{title}</h2>
                        <p className="text-base text-brand-primary font-medium leading-tight">{subtitle}</p>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={`flex-1 min-w-0 ${isLast ? 'w-full pt-0 sm:pt-2' : 'pt-1 sm:pt-2'}`}>
                {/* Desktop Title (Hidden on Mobile for Full Width Mode) */}
                <div className={isLast ? 'hidden sm:block' : ''}>
                    <h2 className="text-xl sm:text-3xl font-bold text-brand-dark mb-1 sm:mb-2">{title}</h2>
                    <p className="text-base sm:text-xl text-brand-primary font-medium mb-6 sm:mb-8">{subtitle}</p>
                </div>

                <div className="relative">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

const jumpStartModule = [
    {
        title: "Customer Solution (Web & App)",
        description: "The customer-facing solution. A digital storefront to reach users globally and generate the raw data that powers the business.",
        icon: Globe
    },
    {
        title: "Data Engineering (The Source)",
        description: "The data processing solution. A reliable pipeline system to collect scattered raw data and transform it into a clean, usable asset.",
        icon: Database
    },
    {
        title: "Data Analytics (The Insight)",
        description: "The decision-making solution. A reporting layer that analyzes past performance to track KPIs and guide executive strategy.",
        icon: LineChart
    },
    {
        title: "Machine Learning (The Brain)",
        description: "The prediction solution. An intelligence engine that learns from history to forecast demand and automate complex decisions.",
        icon: BrainCircuit
    },
    {
        title: "Generative AI (The Creator)",
        description: "The automation solution. A creative engine that scales support and content generation to handle tasks at zero marginal cost.",
        icon: Sparkles
    },
    {
        title: "IoT (The Connected World)",
        description: "The physical tracking solution. A sensor network that captures real-world data from warehouses and machinery for total visibility.",
        icon: Cpu
    },
    {
        title: "Cloud & DevOps (The Infrastructure)",
        description: "The scaling solution. A robust backbone ensuring the business stays online, agile, and ready to serve millions of users.",
        icon: Cloud
    },
    {
        title: "Cyber Security (The Shield)",
        description: "The protection solution. A defense system ensuring brand trust and operational continuity against modern digital threats.",
        icon: ShieldCheck
    }
];

const takeaways = [
    "Solid foundation in Logic Building & Programming",
    "End-to-end understanding of Data Flow (App -> DB -> Analysis)",
    "Exposure to emerging tech (AI/ML/IoT/GenAI)",
    "Understanding of Infrastructure (Networking, Security, DevOps)",
    "Industry-ready mindset for selecting a specialization"
];

export default function Courses() {
    const [selectedCourseId, setSelectedCourseId] = useState(specializations[0].id);
    const selectedCourse = specializations.find(s => s.id === selectedCourseId);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto space-y-0"
        >
            {/* Step 1: Industry Mindset */}
            <MainSection
                title="Industry Mindset Module"
                subtitle="&quot;Hello World&quot; to Industry"
                icon={Rocket}
                isLast={false}
            >
                <div className="space-y-4 mb-8">
                    <p className="max-w-3xl text-gray-500">
                        A comprehensive foundation module designed to give you a 360° view of the industry.
                        From logic building to deployment, get a taste of everything before choosing your specialization.
                    </p>


                </div>

                <div className="flex flex-col gap-12">
                    {/* Full Width Diagram */}
                    <div className="w-full">
                        <ArchitectureDiagram modules={jumpStartModule} />
                    </div>

                    {/* Key Takeaways - Centered/Grid */}
                    <div className="max-w-4xl mx-auto w-full">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                                <CheckCircle2 className="text-brand-primary" size={24} />
                                Key Takeaways
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {takeaways.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                                        <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </MainSection>

            {/* Step 2: Specialization */}
            <MainSection
                title="Choose Your Specialization"
                subtitle="Select ONE track to view your journey"
                icon={Waypoints}
                isLast={true}
            >
                <p className="text-gray-500 mb-8 max-w-2xl">
                    After the jump start, you need to pick <strong>one</strong> path to become an expert. Click below to explore the roadmap for each option.
                </p>

                {/* Selection Tabs */}
                <div className="flex overflow-x-auto pb-4 gap-3 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {specializations.map((course) => {
                        const isSelected = selectedCourseId === course.id;
                        const Icon = course.icon;
                        return (
                            <button
                                key={course.id}
                                onClick={() => setSelectedCourseId(course.id)}
                                className={`
                                    relative flex items-center gap-2 px-4 py-3 rounded-xl border font-medium whitespace-nowrap transition-all
                                    ${isSelected
                                        ? 'bg-brand-dark text-white border-brand-dark shadow-md'
                                        : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary/50 hover:bg-gray-50'}
                                `}
                            >
                                {course.recommended && (
                                    <span className="absolute -top-2 -right-1 flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-primary border-2 border-white"></span>
                                    </span>
                                )}
                                <Icon size={18} className={isSelected ? 'text-brand-primary' : 'text-gray-400'} />
                                <span>{course.shortTitle}</span>
                                {course.recommended && (
                                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ml-1 ${isSelected ? 'bg-brand-primary text-brand-dark' : 'bg-green-100 text-green-700'}`}>
                                        Hot
                                    </span>
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Active Course Detail */}
                <AnimatePresence mode='wait'>
                    <CourseDetail course={selectedCourse} />
                </AnimatePresence>

            </MainSection>
        </motion.div>
    );
}
