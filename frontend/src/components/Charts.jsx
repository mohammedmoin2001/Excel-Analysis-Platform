import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Charts = () => {
  const [chartData, setChartData] = useState([]);
  const [xKey, setXKey] = useState('');
  const [yKeys, setYKeys] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/excel-data')
      .then((res) => {
        const data = res.data;
        if (data.length > 0) {
          const keys = Object.keys(data[0]);

          // Detect x-axis key (first string-type column)
          const sample = data[0];
          const stringKeys = keys.filter(k => typeof sample[k] === 'string');
          const numberKeys = keys.filter(k => typeof sample[k] === 'number');

          setXKey(stringKeys[0] || keys[0]);  // fallback
          setYKeys(numberKeys);
          setChartData(data);
        }
      })
      .catch((err) => {
        console.error('Error loading Excel data:', err);
      });
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className="text-xl font-bold mb-4 text-center">Dynamic Excel Chart</h2>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yKeys.map((key, index) => (
              <Bar
                key={key}
                dataKey={key}
                fill={['#8884d8', '#82ca9d', '#ffc658', '#d84f4f'][index % 4]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-center text-gray-500">No data available</p>
      )}
    </div>
  );
};

export default Charts;