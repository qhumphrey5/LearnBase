import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
} from 'recharts';

const LowIncomeTest = () => {
  const data = [
    {
      "LEA": "21st Century Cyber CS",
      "Percent Low Income Families": 12.0
    },
    {
      "LEA": "A W Beattie Career Center",
      "Percent Low Income Families": 37.7
    },
    {
      "LEA": "ARIN IU 28",
      "Percent Low Income Families": 67.6
    },
    {
      "LEA": "ASPIRA Bilingual Cyber CS",
      "Percent Low Income Families": 59.1
    },
    {
      "LEA": "Abington Heights SD",
      "Percent Low Income Families": 16.5
    }
  ];

  // Define an array of colors
  const colors = ["#82ca9d", "#8884d8", "#ffc658", "#ff7f50", "#1f77b4"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={730} height={250}>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={18}>
          Only One Label
        </text>
        <Pie
          dataKey="Percent Low Income Families"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#82ca9d"
          name="Percent Low Income Families"
          label={({ LEA }) => `${LEA}: ${data[0]["Percent Low Income Families"]}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default LowIncomeTest;
