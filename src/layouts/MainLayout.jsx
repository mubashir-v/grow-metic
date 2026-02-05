import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'courses', label: 'Courses', path: '/courses' },
];

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = tabs.find((tab) => location.pathname.startsWith(tab.path)) || tabs[0];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-brand-dark">
      {/* Header / Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              {/* Logo placeholder - using text for now, assuming logo image will be added later */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                  {/* Abstract flower/star shape from logo */}
                  <svg viewBox="0 0 100 100" className="w-full h-full text-brand-primary fill-current">
                    <path d="M50 0 C60 30 70 30 100 50 C70 70 60 70 50 100 C40 70 30 70 0 50 C30 30 40 30 50 0 Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight">growmetic</span>
              </div>
            </div>

            <nav className="hidden sm:flex space-x-8">
              {tabs.map((tab) => {
                const isActive = location.pathname.startsWith(tab.path);
                return (
                  <button
                    key={tab.id}
                    onClick={() => navigate(tab.path)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex justify-around border-t border-gray-100 bg-white">
          {tabs.map((tab) => {
            const isActive = location.pathname.startsWith(tab.path);
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`flex-1 py-3 text-xs font-medium text-center ${isActive ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-500'
                  }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
