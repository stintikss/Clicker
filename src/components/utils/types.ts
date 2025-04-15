export type ModalType = 'settings' | 'achievements' | 'info' | null;

export interface CardItem {
    modalType: ModalType,
    icon: React.ReactNode;
    title: string;
}

export interface ModalContentProps {
    onClose: () => void;
  }