import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function RoadmapItem({ title, description, icon: Icon, index, isLast }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex gap-3 sm:gap-4 relative">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
            )}

            {/* Icon Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-gray-50 shadow-sm flex items-center justify-center cursor-pointer mt-1"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`w-full h-full rounded-full flex items-center justify-center text-white transition-colors duration-300 ${isOpen ? 'bg-brand-dark' : 'bg-gradient-to-br from-brand-primary to-brand-secondary'}`}>
                    <Icon size={18} />
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="flex-1 pb-4"
            >
                <div
                    className={`bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'ring-2 ring-brand-primary/20 shadow-md' : 'hover:shadow-md'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="p-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <h3 className="text-base font-bold text-brand-dark">{title}</h3>
                        </div>
                        <div className="text-gray-400">
                            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="px-4 pb-4 pt-0 text-gray-600 leading-relaxed text-sm border-t border-gray-50 mt-1">
                                    <div className="pt-3">
                                        {description}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
