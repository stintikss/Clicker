import React from 'react'
import { motion } from 'framer-motion';
import { ELEMENTS_MODAL_ANIMATION } from '../utils/FrameMotion';

interface IconsProps {
  size?: number,
  color?: string,
  onMouseEnter?: () => void,
  onClick?: () => void
}

interface IconWrapperProps {
  size?: number,
  bgColor?: string,
  className?: string,
  icon: React.ReactNode,
  title: string,
  key: number,
  onClick: () => void
}

export const StarHeader: React.FC<IconsProps> = ({ size = 40, color = '#ff9191' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/>
      <path d="M5 18H3"/>
    </svg>
  );
};

export const MenuHeader: React.FC<IconsProps> = ({size = 40, color = '#fff', onMouseEnter, onClick}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  >
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
)

export const Settings: React.FC<IconsProps> = ({color = '#fff'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings-icon lucide-settings">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

export const Achievement: React.FC<IconsProps> = ({color = '#fff'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award-icon lucide-award">
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
    <circle cx="12" cy="8" r="6"/>
  </svg>
)

export const Info: React.FC<IconsProps> = ({color = '#fff'}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-info-icon lucide-info">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4"/>
    <path d="M12 8h.01"/>
  </svg>
)

export const IconWrapper: React.FC<IconWrapperProps> = ({
  size = 200, 
  bgColor = '#00000052',
  icon,
  title,
  key,
  onClick
}) => ( 
  <div style={{
     width: `${size}px`, height: `${size - 150}px`
  }}
    className='flex items-center'
  >
    <motion.div className='flex items-center gap-[10px] cursor-pointer' key={key} {...ELEMENTS_MODAL_ANIMATION} onClick={onClick}>
      <div 
        className={`rounded-full w-[35px] h-[35px] flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
      
      <h1>{title}</h1>
    </motion.div>
    
  </div>
)

export const Succcess: React.FC<IconsProps> = ({ color = '#000', size = 20 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    stroke-width="3" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    className="lucide lucide-check-icon lucide-check"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
)