import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

export default function CourseModal({ course, isOpen, onClose }) {
    if (!course) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm text-brand-primary">
                                        <course.icon size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-brand-dark">{course.title}</h2>
                                        <p className="text-sm text-gray-500">{course.category}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 overflow-y-auto">
                                <p className="text-gray-600 mb-8 text-lg">
                                    {course.shortDesc} This specialized track is broken down into 3 core modules designed for undergraduates.
                                </p>

                                <div className="space-y-8 relative">
                                    {/* Vertical Line */}
                                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100" />

                                    {course.modules.map((mod, idx) => (
                                        <div key={idx} className="relative pl-12">
                                            {/* Timeline Dot */}
                                            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-50 border-2 border-brand-secondary flex items-center justify-center text-brand-secondary font-bold text-sm z-10">
                                                {idx + 1}
                                            </div>

                                            <div className="bg-white rounded-xl border border-gray-100 p-5 hover:border-brand-secondary/30 transition-colors shadow-sm">
                                                <h3 className="text-lg font-bold text-brand-dark mb-2">{mod.title}</h3>
                                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                                    {mod.description}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {mod.topics.map((topic, tIdx) => (
                                                        <span key={tIdx} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-100">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2.5 bg-brand-dark text-white rounded-xl font-medium shadow-md hover:bg-gray-800 transition-colors"
                                >
                                    Close Roadmap
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
