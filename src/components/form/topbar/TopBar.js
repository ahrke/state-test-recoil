import React, { useState } from 'react';

import { SliderPicker } from 'react-color';

const TopBar = () => {
  const [background, setBackground] = useState('#a3f');
  
  const handleBackChange = (color) => {
    setBackground(color.hex)
  }

  return (
    <div className="topbar">
      {/* TopBar */}
      <SliderPicker color={background} onChange={handleBackChange} className="slider" />
    </div>
  )
}

export default TopBar;