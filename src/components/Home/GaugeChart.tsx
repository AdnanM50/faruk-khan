import React from 'react';

interface GaugeChartProps {
  value: number;
  label: string;
  color?: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ value, label, color = '#AEE6FA' }) => {
  // value: 0-100+ (can go above 100 for overflow)
  const angle = Math.min((value / 100) * 180, 180);
  const radians = (angle * Math.PI) / 180;
  const x = 70 + 60 * Math.cos(Math.PI - radians);
  const y = 70 + 60 * Math.sin(Math.PI - radians);
  const largeArcFlag = value > 50 ? 1 : 0;
  const path = `M10,70 A60,60 0 ${largeArcFlag} 1 ${x},${y}`;
  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="160" height="100" viewBox="0 0 160 100">
        {/* Background arc */}
        <path d="M10,70 A60,60 0 1 1 130,70" stroke="#3B2A2A" strokeWidth="12" fill="none" />
        {/* Value arc */}
        <path d={path} stroke={color} strokeWidth="12" fill="none" strokeLinecap="round" />
      </svg>
      <div className="-mt-10 flex flex-col items-center">
        <span className="text-4xl font-bold text-white">{value}%</span>
        <span className="text-lg text-white font-normal">{label}</span>
      </div>
    </div>
  );
};

export default GaugeChart;
