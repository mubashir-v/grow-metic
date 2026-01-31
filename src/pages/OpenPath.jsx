import { motion } from 'framer-motion';

export default function OpenPath() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Open Programs</h2>
                <p className="text-gray-600 mb-8">
                    Flexible learning paths open to everyone looking to upskill or switch careers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder Cards */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="h-40 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400">
                            Open Module {item}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
