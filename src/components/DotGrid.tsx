import React, { useMemo, useState } from 'react';
import { getDaysLeftFromDate, getDateFromDayIndex, formatDate } from '../utils/dateUtils';
import { Tooltip } from './Tooltip';

interface DotProps {
  index: number;
  isActive: boolean;
  onHover: (index: number, event: React.MouseEvent) => void;
  onLeave: () => void;
}

const Dot: React.FC<DotProps> = ({ index, isActive, onHover, onLeave }) => {
  return (
    <div 
      className="dot-container relative"
      onMouseEnter={(e) => onHover(index, e)}
      onMouseLeave={onLeave}
    >
      <div 
        className="dot rounded-full transition-opacity duration-300"
        style={{
          backgroundColor: 'white',
          opacity: isActive ? 1 : 0.25
        }}
      />
      <div className="touch-area absolute inset-0 cursor-pointer" />
    </div>
  );
};

export const DotGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const dots = useMemo(() => {
    return Array.from({ length: 365 }, (_, i) => ({
      id: i,
      date: getDateFromDayIndex(i)
    }));
  }, []);

  const handleDotHover = (index: number, event: React.MouseEvent) => {
    setHoveredIndex(index);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top
    });
  };

  const handleDotLeave = () => {
    setHoveredIndex(null);
  };

  const daysLeft = hoveredIndex !== null 
    ? getDaysLeftFromDate(dots[hoveredIndex].date)
    : getDaysLeftFromDate(new Date());

  return (
    <div className="absolute inset-[10%] flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center relative" style={{ width: '642px' }}>
          <div 
            className="inline-flex flex-wrap justify-start items-start"
            style={{ gap: '25px', width: '642px' }}
          >
            {dots.map((dot, index) => (
              <Dot
                key={dot.id}
                index={index}
                isActive={hoveredIndex !== null ? index <= hoveredIndex : index === 0}
                onHover={handleDotHover}
                onLeave={handleDotLeave}
              />
            ))}
          </div>
          
          {hoveredIndex !== null && (
            <Tooltip
              date={formatDate(dots[hoveredIndex].date)}
              position={tooltipPosition}
            />
          )}
          
          <div className="flex justify-between items-center w-full text-[14px] mt-7 pb-2">
            <div className="-mt-1">2025</div>
            <div className="flex items-baseline">
              <div className="flex">
                {String(daysLeft).split('').map((digit, i) => (
                  <div key={i} className="w-[1ch] h-[1em] inline-block overflow-hidden relative">
                    <span 
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
                    >
                      {digit}
                    </span>
                  </div>
                ))}
              </div>
              <span className="opacity-25 ml-[6px] relative bottom-[2px]">days left</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};