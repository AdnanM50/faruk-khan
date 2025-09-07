import React from 'react';

export interface GaugeProps {
    value: number;
    max: number;
    label: string;
    isPercent?: boolean;
}

const Gauge: React.FC<GaugeProps> = ({ value, max, label, isPercent }) => {
    const percent = Math.min(100, Math.round((value / max) * 100));
    const radius = 32;
    const stroke = 6;
    const circ = 2 * Math.PI * radius;
    const offset = circ - (percent / 100) * circ;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width={72} height={72}>
                <circle
                    cx={36}
                    cy={36}
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth={stroke}
                    fill="none"
                />
                <circle
                    cx={36}
                    cy={36}
                    r={radius}
                    stroke="#111"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={circ}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s' }}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#111"
                >
                    {isPercent ? `${value}%` : value}
                </text>
            </svg>
            <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>{label}</div>
        </div>
    );
};

export default Gauge;
