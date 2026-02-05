import { motion } from 'framer-motion';

export default function CourseDetail({ course }) {
    if (!course) return null;
    const Icon = course.icon;


    return (
        <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-8 shadow-sm"
        >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary">
                    <Icon size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-brand-dark">{course.title}</h3>
                    <p className="text-gray-600">{course.shortDesc}</p>
                </div>
            </div>

            <div className="space-y-8">
                {course.modules.map((mod, idx) => (
                    <div key={idx} className="relative pl-0 sm:pl-8">
                        {/* Connecting Line (Desktop Only) */}
                        {idx !== course.modules.length - 1 && (
                            <div className="hidden sm:block absolute left-[15px] top-8 bottom-[-32px] w-0.5 bg-gray-100" />
                        )}

                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            {/* Icon Container */}
                            <div className="w-20 sm:w-24 shrink-0">
                                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center relative group">
                                    {/* Timeline Dot for Desktop */}
                                    <div className="hidden sm:block absolute -left-[45px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white bg-brand-primary shadow-sm z-10" />

                                    {mod.icon ? (
                                        <mod.icon size={32} className="text-brand-primary group-hover:scale-110 transition-transform duration-300" />
                                    ) : (
                                        <Icon size={32} className="text-gray-300" />
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3 pt-2">
                                <h4 className="text-lg font-bold text-brand-dark">{mod.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{mod.description}</p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {mod.topics?.map((topic, i) => (
                                        <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded border border-gray-100 flex items-center gap-1.5">
                                            <div className="w-1 h-1 rounded-full bg-brand-secondary" />
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
