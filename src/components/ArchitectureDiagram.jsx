import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info, X } from 'lucide-react';

const Block = ({ title, icon: Icon, color, onClick, isSelected }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
            relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 w-full h-full
            ${isSelected
                ? 'bg-brand-dark text-white border-brand-dark shadow-lg ring-2 ring-brand-primary/50'
                : 'bg-white text-gray-700 border-gray-100 hover:border-brand-primary/30 hover:shadow-md'
            }
        `}
    >
        <div className={`p-1.5 sm:p-2 rounded-lg mb-1.5 sm:mb-2 ${isSelected ? 'bg-white/10' : 'bg-gray-50'}`}>
            <Icon size={20} className={`${isSelected ? 'text-brand-primary' : color} sm:w-6 sm:h-6`} />
        </div>
        <span className="text-[11px] sm:text-sm font-bold text-center leading-tight">{title}</span>

        {isSelected && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-dark rotate-45 border-r border-b border-brand-dark hidden sm:block"></div>
        )}
    </motion.div>
);

const Connector = () => (
    <div className="hidden sm:flex items-center justify-center w-8 text-gray-300">
        <ArrowRight size={20} />
    </div>
);

export default function ArchitectureDiagram({ modules }) {
    const [selectedModule, setSelectedModule] = useState(null);

    // Helper to find module by partial title match
    const getModule = (keyword) => modules.find(m => m.title.includes(keyword)) || modules[0];

    return (
        <div className="space-y-6 select-none">
            {/* Diagram Container */}
            <div className="relative p-4 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 pattern-grid-lg opacity-[0.03]"></div>

                <div className="relative z-10 flex flex-col gap-6 sm:gap-8">

                    {/* Application Flow Layer - Horizontal Scroll on Mobile */}
                    <div className="flex flex-row overflow-x-auto pb-4 -mb-4 sm:pb-0 sm:mb-0 gap-4 sm:gap-8 items-stretch sm:justify-center snap-x no-scrollbar px-1">

                        {/* Zone 1: Sources */}
                        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-[130px] sm:min-w-[140px] snap-center">
                            <div className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider text-center mb-1">Source</div>
                            <Block
                                title="Web & App"
                                icon={getModule('Web').icon}
                                color="text-blue-500"
                                onClick={() => setSelectedModule(getModule('Web'))}
                                isSelected={selectedModule?.title.includes('Web')}
                            />
                            <Block
                                title="IoT Devices"
                                icon={getModule('IoT').icon}
                                color="text-emerald-500"
                                onClick={() => setSelectedModule(getModule('IoT'))}
                                isSelected={selectedModule?.title.includes('IoT')}
                            />
                        </div>

                        {/* Connector Arrow */}
                        <div className="flex flex-col justify-center text-gray-300 min-w-[20px] items-center">
                            <div className="h-0.5 w-4 sm:w-8 bg-current"></div>
                            <div className="-mt-1.5 ml-auto -mr-1">
                                <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Zone 2: The Pipeline */}
                        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-[130px] sm:min-w-[140px] snap-center">
                            <div className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider text-center mb-1">Pipeline</div>
                            <div className="h-full">
                                <Block
                                    title="Data Engineering"
                                    icon={getModule('Database').icon}
                                    color="text-orange-500"
                                    onClick={() => setSelectedModule(getModule('Engineering'))}
                                    isSelected={selectedModule?.title.includes('Engineering')}
                                />
                            </div>
                        </div>

                        {/* Connector Arrow */}
                        <div className="flex flex-col justify-center text-gray-300 min-w-[20px] items-center">
                            <div className="h-0.5 w-4 sm:w-8 bg-current"></div>
                            <div className="-mt-1.5 ml-auto -mr-1">
                                <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Zone 3: Intelligence */}
                        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-[130px] sm:min-w-[140px] snap-center">
                            <div className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider text-center mb-1">Intelligence</div>
                            <Block
                                title="Data Analytics"
                                icon={getModule('Analytics').icon}
                                color="text-indigo-500"
                                onClick={() => setSelectedModule(getModule('Analytics'))}
                                isSelected={selectedModule?.title.includes('Analytics')}
                            />
                            <Block
                                title="Machine Learning"
                                icon={getModule('Machine').icon}
                                color="text-purple-500"
                                onClick={() => setSelectedModule(getModule('Machine'))}
                                isSelected={selectedModule?.title.includes('Machine')}
                            />
                        </div>

                        {/* Connector Arrow */}
                        <div className="flex flex-col justify-center text-gray-300 min-w-[20px] items-center">
                            <div className="h-0.5 w-4 sm:w-8 bg-current"></div>
                            <div className="-mt-1.5 ml-auto -mr-1">
                                <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Zone 4: Creation */}
                        <div className="flex flex-col gap-3 sm:gap-4 flex-1 min-w-[130px] sm:min-w-[140px] snap-center">
                            <div className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 tracking-wider text-center mb-1">Outcome</div>
                            <div className="h-full">
                                <Block
                                    title="Generative AI"
                                    icon={getModule('Generative').icon}
                                    color="text-pink-500"
                                    onClick={() => setSelectedModule(getModule('Generative'))}
                                    isSelected={selectedModule?.title.includes('Generative')}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure Foundation Layer */}
                    <div className="pt-6 sm:pt-8 border-t border-dashed border-gray-200">
                        <div className="relative p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-white border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                                Foundation Layer
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-1">
                                {(() => {
                                    const CloudMod = getModule('Cloud');
                                    const SecMod = getModule('Security');
                                    const CloudIcon = CloudMod.icon;
                                    const SecIcon = SecMod.icon;

                                    return (
                                        <>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => setSelectedModule(CloudMod)}
                                                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border flex items-center gap-2 transition-colors ${selectedModule?.title.includes('Cloud') ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-600 border-gray-200'}`}
                                            >
                                                <CloudIcon size={14} className="sm:w-4 sm:h-4" /> Cloud & DevOps
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => setSelectedModule(SecMod)}
                                                className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold border flex items-center gap-2 transition-colors ${selectedModule?.title.includes('Security') ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-600 border-gray-200'}`}
                                            >
                                                <SecIcon size={16} className="sm:w-4 sm:h-4" /> Cyber Security
                                            </motion.button>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Panel */}
            <div className="min-h-[140px] transition-all duration-500">
                {selectedModule ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={selectedModule.title}
                        className="bg-brand-dark rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden text-white"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <selectedModule.icon size={120} className="text-white" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <selectedModule.icon className="text-brand-primary" size={24} />
                                </div>
                                {selectedModule.title}
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-3xl">
                                {selectedModule.description}
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedModule(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 bg-gray-50/50">
                        <Info size={24} className="mb-3 opacity-50 sm:w-8 sm:h-8" />
                        <p className="text-sm sm:text-base font-medium">Click on any block to explore</p>
                    </div>
                )}
            </div>
        </div>
    );
}
