import React from "react";

interface GaugeChartProps {
  organicGrowth: number;
  keywordRanking: number;
  color?: string;
}

const Gauge: React.FC<{ value: number; label: string; color: string }> = ({
  value,
  label,
  color,
}) => {
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
    <div
      className="flex flex-col items-center"
      style={{ maxWidth: "200px", width: "100%" }}
    >
      <div
        style={{
          position: "relative",
          width: radius * 2 + stroke,
          height: radius + stroke,
          maxWidth: "100%",
        }}
      >
        <svg
          width={radius * 2 + stroke}
          height={radius + stroke}
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
        >
          {/* Track */}
          <path
            d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${
              center + normalizedRadius
            },${center}`}
            fill="none"
            stroke="#393939"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Progress */}
          <path
            d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${
              center + normalizedRadius
            },${center}`}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={`${dash},${circumference - dash}`}
            strokeLinecap="round"
          />
          {/* Over 100% arc */}
          {over > 0 && (
            <path
              d={`M ${startX},${startY} A ${normalizedRadius},${normalizedRadius} 0 0 1 ${
                center + normalizedRadius
              },${center}`}
              fill="none"
              stroke="#444"
              strokeWidth={stroke}
              strokeDasharray={`${Math.min(over, 1) * circumference},${circumference}`}
              strokeDashoffset={-dash}
              strokeLinecap="round"
              style={{ opacity: 0.7 }}
            />
          )}
          {/* Left start circle fill */}
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
            fontSize: "clamp(18px, 5vw, 32px)", // responsive font size
            fontFamily: "Inter, sans-serif",
            lineHeight: 1,
          }}
        >
          {value}%
        </div>
      </div>
      <div
        style={{
          marginTop: 12,
          color: "#fff",
          fontSize: "clamp(14px, 3vw, 20px)",
          fontWeight: 400,
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const GaugeChart: React.FC<GaugeChartProps> = ({
  organicGrowth,
  keywordRanking,
  color = "#8ee0ff",
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8  md:gap-12 lg:gap-16"
      // style={{ maxWidth: "100%", flexWrap: "wrap" }}
    >
      <Gauge value={organicGrowth} label="Organic Growth" color={color} />
      <Gauge value={keywordRanking} label="Keyword Ranking" color={color} />
    </div>
  );
};

export default GaugeChart;
