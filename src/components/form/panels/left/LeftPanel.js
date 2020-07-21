import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import currentPage from '../../../../selectors/formSelectors';
import { currPage } from '../../../../atoms/formAtoms';


const LeftPanel = () => {
  const [formData, updateData] = useRecoilState(currentPage);
  const cPage = useRecoilValue(currPage)
  // const [__, updateData] = useRecoilState(updatePage)

  const onCheckChange = (e) => {
    updateData({...formData, checked: e.target.checked})
  }

  if (cPage === 0) {
    return (
      <div className="left-panel">
        <input placeholder="name" onChange={e => updateData({...formData, name: e.target.value})} />
        <input placeholder="address" onChange={e => updateData({...formData, address: e.target.value})} />
        <select  onChange={e => updateData({...formData, selected: e.target.value})}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
          <input
            name="isGoing"
            type="checkbox"
            checked={formData.checked}
            onChange={onCheckChange} />
        <textarea placeholder="description" value={formData.description} onChange={e => updateData({...formData, description: e.target.value})} />
      </div>
    )
  } else if (cPage === 1) {
    return (
      <div className="left-panel">
        <input placeholder="spirit animal" onChange={e => updateData({...formData, spiritAnimal: e.target.value})} />
        <input placeholder="image URL" onChange={e => updateData({...formData, imgUrl: e.target.value})} />
        <input
          name="isGoing"
          type="checkbox"
          checked={formData.checked}
          onChange={onCheckChange} 
        />
        <textarea placeholder="description" value={formData.description} onChange={e => updateData({...formData, description: e.target.value})} />
      </div>
    )
  }

  return (
    <div className="left-panel">
      <input placeholder="name" onChange={e => updateData({...formData, name: e.target.value})} />
      <input placeholder="formType" onChange={e => updateData({...formData, formType: e.target.value})} />
      <input
        name="isGoing"
        type="checkbox"
        checked={formData.checked}
        onChange={onCheckChange} 
      />
      <textarea placeholder="description" value={formData.description} onChange={e => updateData({...formData, description: e.target.value})} />
    </div>
  )
}

export default LeftPanel;
