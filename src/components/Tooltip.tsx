import React from 'react';

interface TooltipProps {
  date: string;
  position: { x: number; y: number };
}

export const Tooltip: React.FC<TooltipProps> = ({ date, position }) => {
  return (
    <div
      className="absolute bg-white text-black px-3 py-1 rounded text-sm pointer-events-none"
      style={{
        left: position.x,
        top: position.y - 30,
        transform: 'translateX(-50%)',
      }}
    >
      {date}
    </div>
  );
};