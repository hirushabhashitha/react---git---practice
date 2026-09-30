import React, { useState } from 'react';

function Counter() {
  // count = වර්තමාන අගය, setCount = අගය වෙනස් කරන Function එක
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ marginTop: '20px', padding: '15px', border: '2px dashed #1a73e8' }}>
      <h3>Completed Tasks Counter: {count}</h3>
      <button onClick={handleIncrement} style={{ marginRight: '10px' }}>
        Complete One Task (+1)
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;