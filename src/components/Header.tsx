// components/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HEADER_IN_ANIMATION } from './utils/FrameMotion';
import { StarHeader, MenuHeader } from './icons/Image';
import { Modal } from './modals/Modal'; 
import SuccessNotification from './utils/ui/SuccessNotification';
import { getGameData } from './utils/localstorage';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showSuccess?: boolean;
}

const GRADIENT_STYLE = {
  title: 'bg-gradient-to-br from-purple-600 via-red-500 to-pink-300',
  subtitle: 'bg-gradient-to-br from-pink-600 to-blue-500',
};

const Header: React.FC<HeaderProps> = ({ 
  title = 'TapStorm', 
  subtitle = 'Suvorov District',
  showSuccess = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameData, setGameData] = useState(getGameData());

  useEffect(() => {
    const interval = setInterval(() => {
      setGameData(getGameData());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showSuccess && <SuccessNotification />}

      <motion.header className="w-full py-6 px-8 relative">
        <div className="max-w-[1800px] mx-auto">
          <motion.div className="flex items-center justify-between w-full" {...HEADER_IN_ANIMATION(1)}>
            <div className="flex items-center">
              <div className="w-10 h-10 mr-4" aria-hidden='true'>
                <StarHeader />
              </div>
              <h1 className={`text-5xl font-bold ${GRADIENT_STYLE.title} bg-clip-text text-transparent`}>
                {title}
              </h1>
            </div>
            
            <div className="flex items-center">
              <button 
                className="p-2 w-8 h-8"
                onClick={() => setIsModalOpen(true)}
              >
                <MenuHeader />
              </button>
            </div>
          </motion.div>
          
          <motion.div className="mt-2 ml-14" {...HEADER_IN_ANIMATION(0)}>
            <span className={`text-2xl font-semibold ${GRADIENT_STYLE.subtitle} bg-clip-text text-transparent`}>
              {subtitle}
            </span>
          </motion.div>
        </div>
      </motion.header>

      <span className="mr-4 text-white text-xl">
        Clicks: {gameData.clicks}
      </span>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;