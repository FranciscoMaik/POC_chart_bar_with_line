import React from 'react';
import { Chart, ChartLine, ChartBar } from '../components';

const Home: React.FC = function () {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#808080',
      }}
    >
      <Chart />
      <ChartLine />
      <ChartBar />
    </div>
  );
};

export default Home;
