import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    Growmetic
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-600 font-medium">
                    Campus to Corporate
                </p>
            </motion.div>

            <motion.p
                className="max-w-2xl text-gray-500 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Connect with top corporates for internships and jobs.
                Select your program above to get started.
            </motion.p>
        </div>
    );
}
