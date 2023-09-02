import React, { useState } from 'react';

function ClickCounter({ initialCount, onUpdate }) {
  const [count, setCount] = useState(initialCount);

  const handleButtonClick = (operation) => {
    if (operation === 'increment') {
      const newCount = count + 1;
      setCount(newCount);
      onUpdate(newCount);
    } else if (operation === 'decrement' && count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onUpdate(newCount);
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('decrement')}>-</button>
      <span>{count}</span>
      <button onClick={() => handleButtonClick('increment')}>+</button>
    </div>
  );
}

export default ClickCounter;