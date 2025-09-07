import React from 'react';

interface SEOBadgeProps {
  label: string;
  abbreviation: string;
  score: number;
  bgColor?: string;
}

export const SEOBadge: React.FC<SEOBadgeProps> = ({
  label,
  abbreviation,
  score,
  bgColor = 'bg-gray-800'
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-6 h-6 ${bgColor} rounded text-white text-xs font-medium flex items-center justify-center`}>
        {abbreviation}
      </div>
      <span className="text-sm text-gray-700 flex-1">{label}</span>
      <span className="text-sm font-medium text-gray-900">{score}</span>
    </div>
  );
};