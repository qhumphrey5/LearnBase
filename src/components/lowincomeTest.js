import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
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


return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="LEA" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Percent Low Income Families" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default LowIncomeTest;
