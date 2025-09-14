import React from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = '#374151',
  backgroundColor = '#E5E7EB',
  children
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Only use segmented color for the main big circle (size=152, strokeWidth=14, percentage=80)
  const isMainBigCircle = size === 152 && strokeWidth === 14 && percentage === 80;

  // Add true half-circle (gauge) support for Organic Growth (size=100, strokeWidth=12)
  const isGauge = size === 100 && strokeWidth === 12;

  let progressCircle;
  let svgProps = {};
  if (isMainBigCircle) {
    // Segmented color version
    const segments = [
      { color: '#1A1A1A', percent: 0.35 },
      { color: '#6F6F6F', percent: 0.20 },
      { color: '#555555', percent: 0.15 },
      { color: '#1A1A1A', percent: 0.30 },
    ];
    let startPercent = 0;
    progressCircle = segments.map((seg, i) => {
      const segLength = circumference * seg.percent;
      const dasharray = `${segLength} ${circumference - segLength}`;
      const dashoffset = circumference * (1 - startPercent);
      const el = (
        <circle
          key={i}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={seg.color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={dasharray}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      );
      startPercent += seg.percent;
      return el;
    });
    svgProps = { className: 'transform rotate-180' };
  } else if (isGauge) {
    // True half-circle gauge: #232323 progress, #BDBDBD remainder
    const halfCirc = circumference / 2;
    const progressLength = halfCirc * (percentage / 100);
    // Progress arc (#232323)
    progressCircle = (
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#232323"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={`${progressLength} ${circumference}`}
        strokeDashoffset={halfCirc}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    );
    // Rotate so arc starts at bottom left and ends at bottom right
    svgProps = { style: { transform: 'rotate(-90deg)' } };
  } else {
    // Default single color version
    progressCircle = (
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000 ease-out"
      />
    );
    svgProps = { className: 'transform -rotate-90' };
  }

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        {...svgProps}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={isGauge ? '#BDBDBD' : backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={isGauge ? `${circumference / 2} ${circumference}` : circumference}
          strokeDashoffset={isGauge ? (circumference / 2) : 0}
        />
        {/* Progress circle */}
        {progressCircle}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};