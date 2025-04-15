const STORAGE_KEY = 'gameData'; /* КЛЮЧ */

const DEFAULT_DATA = {
  clicks: 0,
  upgradeValue: 1,
  upgradePrice: 10, // Начальная цена улучшения
};

export const getGameData = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : DEFAULT_DATA;
};

export const saveGameData = (data: any) => { 
  const current = getGameData();
  const updated = { ...current, ...data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const incrementClick = () => {
  const gameData = getGameData();
  const newClicks = gameData.clicks + gameData.upgradeValue;
  saveGameData({ clicks: newClicks });
};

export const buyUpgrade = (setclick: number, sell: number) => {
  const gameData = getGameData();
  
  if (gameData.clicks >= gameData.upgradePrice) {
    const newData = {
      clicks: gameData.clicks - gameData.upgradePrice,
      upgradeValue: gameData.upgradeValue + setclick,
      upgradePrice: gameData.upgradePrice * 2, // Удваиваем цену
    };
    return saveGameData(newData);
  }
  return null;
};
