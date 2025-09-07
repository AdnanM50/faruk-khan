import React from 'react';

interface SmallCircularChartProps {
  value: number;
  label: string;
  size?: number;
}

export const SmallCircularChart: React.FC<SmallCircularChartProps> = ({
  value,
  label,
  size = 60
}) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (60 / 100) * circumference; // Assuming ~60% fill

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#374151"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-900">{value}</span>
        </div>
      </div>
      <span className="text-xs text-gray-600 text-center">{label}</span>
    </div>
  );
};