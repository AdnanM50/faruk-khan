import React from "react";

interface GaugeChartProps {
  organicGrowth: number;
  keywordRanking: number;
  color?: string;
}

const Gauge: React.FC<{ value: number; label: string; color: string }> = ({ value, label, color }) => {
  const radius = 80;
  const stroke = 14;
  const center = radius + stroke / 2;
  const normalizedRadius = radius;
  const circumference = Math.PI * normalizedRadius;
  const percent = Math.min(value, 100);
  const dash = (percent / 100) * circumference;
  const over = value > 100 ? (value - 100) / 100 : 0;

  // Left start point coords
  const startX = center - normalizedRadius;
  const startY = center;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
      <div style={{ position: "relative", width: radius * 2 + stroke, height: radius + stroke }}>
        <svg
          width={radius * 2 + stroke}
          height={radius + stroke}
          style={{ display: "block" }}
        >
          {/* Track */}
          <path
            d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${center + normalizedRadius},${center}`}
            fill="none"
            stroke="#393939"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Progress */}
          <path
            d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${center + normalizedRadius},${center}`}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={`${dash},${circumference - dash}`}
            strokeLinecap="round"
          />
          {/* Over 100% arc */}
          {over > 0 && (
            <path
              d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${center + normalizedRadius},${center}`}
              fill="none"
              stroke="#444"
              strokeWidth={stroke}
              strokeDasharray={`${Math.min(over, 1) * circumference},${circumference}`}
              strokeDashoffset={-dash}
              strokeLinecap="round"
              style={{ opacity: 0.7 }}
            />
          )}
          {/* Left start circle fill (fix gap only) */}
          <circle cx={startX} cy={startY} r={stroke / 2} fill={color} />
        </svg>
        <div
          style={{
            position: "absolute",
            top: "38%",
            left: 0,
            width: "100%",
            textAlign: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 40,
            fontFamily: "Inter, sans-serif",
            letterSpacing: 1,
            lineHeight: 1,
          }}
        >
          {value}%
        </div>
      </div>
      <div
        style={{
          marginTop: 18,
          color: "#fff",
          fontSize: 24,
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        {label}
      </div>
    </div>
  );
};

const GaugeChart: React.FC<GaugeChartProps> = ({ organicGrowth, keywordRanking, color = "#8ee0ff" }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 bg-transparent p-0 rounded-none
                 sm:flex-row sm:items-start sm:gap-8
                 md:gap-12
                 lg:gap-16"
    >
      <Gauge value={organicGrowth} label="Organic Growth" color={color} />
      <Gauge value={keywordRanking} label="Keyword Ranking" color={color} />
    </div>
  );
};

export default GaugeChart;
