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
    Clock,
    CheckCircle2,
    Rocket,
    Waypoints,
    ChevronRight
} from 'lucide-react';
import RoadmapItem from '../components/RoadmapItem';
import CourseDetail from '../components/CourseDetail';
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
        title: "Programming DSA using Python",
        description: "Build strong logic and problem-solving skills using Python. Learn data structures and algorithms in a way that is directly applicable to industry scenarios.",
        icon: Code2
    },
    {
        title: "SQL",
        description: "Master database management and querying. Learn how to store, manipulate, and retrieve data efficiently.",
        icon: Database
    },
    {
        title: "Web Basics using Flask",
        description: "An entry point to backend and frontend development. Create simple web applications using Python's Flask framework.",
        icon: Globe
    },
    {
        title: "Data Processing",
        description: "Process real-world data from your web applications. Learn to clean, transform, and move data from files to SQL tables using Python.",
        icon: FileJson
    },
    {
        title: "Data Analysis & Visualization",
        description: "Derive insights from data using Python libraries and create meaningful visualizations to represent trends.",
        icon: LineChart
    },
    {
        title: "AI & ML Concepts",
        description: "Introduction to Artificial Intelligence and Machine Learning foundations. Understand the core concepts starting the journey.",
        icon: BrainCircuit
    },
    {
        title: "Gen AI Concepts",
        description: "Explore the cutting-edge world of Generative AI and how it's transforming industries.",
        icon: Sparkles
    },
    {
        title: "IoT with Controllers",
        description: "Hands-on internet of things using small controllers like ESP32. Connect the physical world to the digital.",
        icon: Cpu
    },
    {
        title: "Networking Fundamentals",
        description: "Understand how the internet works, protocols (HTTP/TCP/IP), and how devices communicate in a networked environment.",
        icon: Network
    },
    {
        title: "Cybersecurity Basics",
        description: "Learn the importance of security, basic threats, and best practices to secure applications and data.",
        icon: ShieldCheck
    },
    {
        title: "DevOps Fundamentals",
        description: "Learn the basics of deployment and operations. Understand how software is delivered and maintained in production.",
        icon: Server
    }
];

const takeaways = [
    "Solid foundation in Logic Building & Programming",
    "End-to-end understanding of Data Flow (App -> DB -> Analysis)",
    "Exposure to emerging tech (AI/ML/IoT/GenAI)",
    "Understanding of Infrastructure (Networking, Security, DevOps)",
    "Industry-ready mindset for selecting a specialization"
];

export default function UGPath() {
    const [selectedCourseId, setSelectedCourseId] = useState(specializations[0].id);
    const selectedCourse = specializations.find(s => s.id === selectedCourseId);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto space-y-0"
        >
            {/* Step 1: Jump Start */}
            <MainSection
                title="Jump Start Module"
                subtitle="&quot;Hello World&quot; to Industry"
                icon={Rocket}
                isLast={false}
            >
                <div className="space-y-4 mb-8">
                    <p className="max-w-3xl text-gray-500">
                        A comprehensive foundation module designed to give you a 360° view of the industry.
                        From logic building to deployment, get a taste of everything before choosing your specialization.
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark text-white rounded-full text-sm font-medium shadow-md">
                            <Clock size={16} className="text-brand-primary" />
                            <span>Estimated Duration: 120 Hours</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column: Roadmap */}
                    <div className="lg:col-span-2 space-y-2">
                        {jumpStartModule.map((item, index) => (
                            <RoadmapItem
                                key={index}
                                {...item}
                                index={index}
                                isLast={index === jumpStartModule.length - 1}
                            />
                        ))}
                    </div>

                    {/* Right Column: Key Takeaways */}
                    <div className="lg:col-span-1 sticky top-24">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                            <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-brand-primary" size={20} />
                                Key Takeaways
                            </h3>

                            <div className="space-y-4">
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
