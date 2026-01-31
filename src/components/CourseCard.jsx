import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CourseCard({ course, onClick, index }) {
    const Icon = course.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all cursor-pointer group flex flex-col h-full"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Icon size={24} />
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-2 py-1 bg-gray-50 rounded-md">
                    {course.category}
                </span>
            </div>

            <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                {course.title}
            </h3>

            <p className="text-gray-500 text-sm mb-6 flex-1">
                {course.shortDesc}
            </p>

            <div className="flex items-center text-brand-secondary font-medium text-sm group-hover:translate-x-1 transition-transform">
                View Roadmap <ArrowRight size={16} className="ml-1" />
            </div>
        </motion.div>
    );
}
