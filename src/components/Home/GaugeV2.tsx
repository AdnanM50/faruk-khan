import React from 'react';

export interface GaugeV2Props {
  value: number;
  max?: number;
  label: string;
  color?: string;
  isPercent?: boolean;
  size?: number;
  strokeWidth?: number;
}

const GaugeV2: React.FC<GaugeV2Props> = ({
  value,
  max = 100,
  label,
  color = '#232323',
  isPercent = true,
  size = 100,
  strokeWidth = 12,
}) => {
  // Clamp value
  const percent = Math.max(0, Math.min(100, isPercent ? value : (value / max) * 100));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const halfCirc = circumference / 2;
  const progressLength = halfCirc * (percent / 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-135deg)' }}>
        {/* Background arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#BDBDBD"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${halfCirc} ${circumference}`}
          strokeDashoffset={halfCirc}
          strokeLinecap="round"
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${progressLength} ${circumference}`}
          strokeDashoffset={halfCirc}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s' }}
        />
        {/* Value text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="-.2em"
          fontSize={size * 0.28}
          fontWeight="bold"
          fill="#232323"
        >
          {isPercent ? `${Math.round(percent)}%` : value}
        </text>
      </svg>
      <div style={{ fontSize: size * 0.13, color: '#232323', marginTop: 2 }}>{label}</div>
    </div>
  );
};

export default GaugeV2;
