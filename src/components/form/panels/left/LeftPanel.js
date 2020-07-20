import React, { useState } from 'react';

const LeftPanel = () => {
  const [isGoing, setIsGoing] = useState(false)

  const handleOnCheckChange = () => {
    setIsGoing(!isGoing)
  }

  return (
    <div className="left-panel">
      Left Panel
      <input placeholder="name" />
      <input placeholder="address" />
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={isGoing}
          onChange={handleOnCheckChange} />
      </label>
      <textarea placeholder="description" />
    </div>
  )
}

export default LeftPanel;
