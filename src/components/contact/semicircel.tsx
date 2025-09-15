type SemiCircularProgressProps = {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
};

export const SemiCircularProgress = ({
  percentage,
  size = 160,
  strokeWidth = 14,
  color = "#222",
  backgroundColor = "#E5E7EB",
}: SemiCircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Half circle
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      width={size}
      height={size / 2}
      viewBox={`0 0 ${size} ${size / 2}`}
      className="overflow-visible"
    >
      {/* Background */}
      <path
        d={`
          M ${strokeWidth / 2} ${size / 2}
          A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
        `}
        fill="none"
        stroke={backgroundColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Progress */}
      <path
        d={`
          M ${strokeWidth / 2} ${size / 2}
          A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}
        `}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};