// ToggleComponent.js
import React from 'react';
import { useToggle } from './ToggleContext';

const ToggleComponent = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <p>The toggle is {isToggled ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default ToggleComponent;
