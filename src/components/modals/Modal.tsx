import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MODAL_BACKGROUND_ANIMATION, MODAL_CONTENT_ANIMATION, ELEMENTS_MODAL_ANIMATION } from '../utils/FrameMotion';
import { Settings, Achievement, Info, IconWrapper } from '../icons/Image'
import { ModalType, CardItem } from '../utils/types';
import { SettingsModalContent, AchievementsModalContent, InfoModalContent } from './ModalContent';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [currentModal, setCurrentModal] = useState<ModalType>(null);

    const iconCards: CardItem[] = [
        {
            icon: <Settings />,
            title: "Настройки",
            modalType: 'settings'
        },
        {
            icon: <Achievement />,
            title: "Достижения",
            modalType: 'achievements'
        },
        {
            icon: <Info />,
            title: "Информация",
            modalType: 'info'
        }
    ];

    const handleCardClick = (modalType: ModalType) => {
        onClose();
        setCurrentModal(modalType);
    };

    const renderModalContent = () => {
        switch (currentModal) {
          case 'settings':
            return <SettingsModalContent onClose={() => setCurrentModal(null)} />;
          case 'achievements':
            return <AchievementsModalContent onClose={() => setCurrentModal(null)} />;
          case 'info':
            return <InfoModalContent onClose={() => setCurrentModal(null)} />;
          default:
            return null;
        }
    };

  return (
    <>
        <AnimatePresence>
        {isOpen && (
            <>
            {/* Затемненный фон */}
            <motion.div
                className="fixed inset-0 bg-[#00000069] z-40"
                {...MODAL_BACKGROUND_ANIMATION}
                onClick={onClose}
            />
            
            {/* Контент модалки */}
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                <motion.div
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl pointer-events-auto h-[250px] items-center"
                {...MODAL_CONTENT_ANIMATION}
                >
                    <div className="p-4 flex flex-col">
                        <div className='w-full flex justify-end'>
                            <button onClick={onClose}>
                                <span className='text-[30px]'>&times;</span>
                            </button>
                        </div>
                        <div className='flex flex-col justify-center h-[130px]'>
                            {iconCards.map((card, index) => (
                                <motion.div className='flex items-center' {...ELEMENTS_MODAL_ANIMATION(index)}>
                                    <IconWrapper 
                                        key={index}
                                        icon={card.icon}
                                        title={card.title}
                                        onClick={() => handleCardClick(card.modalType)}
                                    /> 
                                </motion.div>
                                
                            ))} 
                        </div>
                    </div>
                </motion.div>
            </div>
            </>
        )}
        </AnimatePresence>

        <AnimatePresence>
            {currentModal && (
            <>
                <motion.div
                className="fixed inset-0 bg-[#00000066] z-60"
                {...MODAL_BACKGROUND_ANIMATION}
                onClick={() => setCurrentModal(null)}
                />
                
                <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-none">
                <motion.div
                    className="bg-white rounded-lg max-w-2xl w-full mx-4 shadow-xl pointer-events-auto"
                    {...MODAL_CONTENT_ANIMATION}
                >
                    {renderModalContent()}
                </motion.div>
                </div>
            </>
            )}
      </AnimatePresence>
    </>
  );
};

export default Modal;