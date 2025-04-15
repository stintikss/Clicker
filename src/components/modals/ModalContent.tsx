import { motion } from 'framer-motion';
import { ModalContentProps } from '../utils/types';

export const SettingsModalContent: React.FC<ModalContentProps> = ({ onClose }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Настройки</h2>
    <p className="mb-4">Здесь будут ваши настройки приложения</p>
    <button 
      onClick={onClose}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      Сохранить
    </button>
  </div>
);

export const AchievementsModalContent: React.FC<ModalContentProps> = ({ onClose }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Достижения</h2>
    <ul className="space-y-2">
      <li>✅ Первый вход в систему</li>
      <li>🏆 10 выполненных задач</li>
    </ul>
  </div>
);

export const InfoModalContent: React.FC<ModalContentProps> = ({ onClose }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Информация о системе</h2>
    <div className="prose">
      <p>Версия: 1.0.0</p>
      <p>Дата сборки: {new Date().toLocaleDateString()}</p>
    </div>
  </div>
);