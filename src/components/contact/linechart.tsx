import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2018', growth: 50 },
  { year: '2019', growth: 75 },
  { year: '2020', growth: 120 },
  { year: '2022', growth: 208 }, // Adjust this value to get 108% organic growth relative to 2018 base
];

const OrganicGrowthChart = () => {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '700px', height: '350px', background: '#282c34', borderRadius: '10px', padding: '20px' }}>
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: '#61dafb', fontSize: '2.5em', fontWeight: 'bold' }}>
        108%
        <div style={{ fontSize: '0.5em', fontWeight: 'normal', marginTop: '5px' }}>Organic Growth</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 60, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#999" tickLine={false} axisLine={false} />
          <YAxis stroke="#999" tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: '#333', border: '1px solid #555', color: '#fff' }} itemStyle={{ color: '#fff' }} />
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#61dafb" // Cyan-like color
            strokeWidth={3}
            dot={{ r: 6, fill: '#61dafb', stroke: '#fff', strokeWidth: 2 }} // Stylize data points
            activeDot={{ r: 8, fill: '#61dafb', stroke: '#fff', strokeWidth: 3 }} // Active dot on hover
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrganicGrowthChart;