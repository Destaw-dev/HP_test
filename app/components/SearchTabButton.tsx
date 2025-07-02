import { FC, CSSProperties } from 'react';

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  gradient: string;
}

export const SearchTabButton: FC<TabButtonProps> = ({ label, isActive, onClick, gradient }) => {
  const borderStyle: CSSProperties = isActive
    ? {
        borderBottom: '4px solid',
        borderImage: `linear-gradient(${gradient}) 1`,
        borderStyle: 'solid',
      }
    : {};

  return (
    <button
      onClick={onClick}
      className={`px-3 pb-2 lg:text-2xl text-[#16254F] ${isActive ? 'font-bold' : ''}`}
      style={borderStyle}
    >
      {label}
    </button>
  );
};
