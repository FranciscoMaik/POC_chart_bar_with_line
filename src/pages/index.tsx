import React from 'react';
import { Chart } from '../components';

const Home: React.FC = function () {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#808080',
      }}
    >
      <Chart />
    </div>
  );
};

export default Home;
