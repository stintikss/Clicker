// components/main.tsx
import React, { useState, useEffect } from 'react';
import { getGameData, incrementClick, buyUpgrade } from './utils/localstorage';

const Main: React.FC = () => {
  const [gameData, setGameData] = useState(getGameData());

  useEffect(() => {
    const interval = setInterval(() => {
      setGameData(getGameData());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    incrementClick();
  };

  const clicks = [
    { id: 1, setclick: 1, sell: 10 },
  ];

  const upgrade = (setclick: number, sell: number) => {
    const newData = buyUpgrade(setclick, sell);
    if (newData) {
      setGameData(newData);
    }
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center pointer-events-none'>
      <div className='text-white text-2xl pointer-events-auto'>
        <button className='bg-[red] w-[100px] h-[100px]' onClick={handleClick}>
          Click (+{gameData.upgradeValue})
        </button>
      </div>
      <div className='w-[300px] flex justify-center'>
        <div className='cursor-pointer pointer-events-auto'>
          {clicks.map(item => (
            <p 
              key={item.id} 
              className='cursor-pointer' 
              onClick={() => upgrade(item.setclick, item.sell)}
            >
              Upgrade (+{item.setclick}) → Current: {gameData.upgradeValue} Price: {gameData.upgradePrice}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;