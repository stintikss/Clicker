import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Succcess } from '../../icons/Image';

interface SuccessNotificationProps {
  message?: string;
  duration?: number;
  size?: number
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({ 
  message = "Подключено", 
  duration = 3000,
  size = 40
}) => {
  const [visible, setVisible] = useState(true);

  const squareSize = (size: number) => ({
    width: `${size}px`,
    height: `${size}px`
  })


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#000] text-[#fff] px-6 py-3 rounded-[2.375rem] shadow-lg flex items-center gap-[10px]">
            <div 
                className={`bg-[#142304] rounded-full flex justify-center items-center`}
                style={squareSize(size)}
            >
                <div 
                    className='bg-[#7ce72b] rounded-full w-[30px] h-[30px] flex justify-center items-center'
                    style={squareSize(size - 15)}
                >
                    <Succcess />
                </div>
            </div>
            <span className="font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessNotification;