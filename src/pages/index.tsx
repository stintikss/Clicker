import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loader from '../components/utils/ui/Load';
import { AnimatePresence } from 'framer-motion';
import Main from '../components/main';
import Footer from '../components/Footer'; 

const Index: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
    //ХУКИ:

    //
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSuccess(true);
      }, 0); //4000
  
      return () => clearTimeout(timer);
    }, []);

    const GRADIENT_STYLE = {
      background: "bg-gradient-to-r from-blue-900 to-indigo-900 via-purple-900",
    };

    return (
      <>
        <div
          className={`${GRADIENT_STYLE.background} fixed inset-0 overflow-hidden`}
        >
          <Loader />
          <AnimatePresence>
            <div className='w-full h-screen flex flex-col items-center'>
              <Header showSuccess={showSuccess}/>  
            </div>
          </AnimatePresence>
          <Main />
          <Footer />
        </div>
      </>
    );
};

export default Index;