import React from 'react';

import { useRecoilValue } from 'recoil';
import { currPage } from '../../../../atoms/formAtoms';
import currentPage from '../../../../selectors/formSelectors';

const RightPanel = () => {
  const formData = useRecoilValue(currentPage);
  // const [formBackground, setFormBackground] = useRecoilState(formBack);
  const cPage = useRecoilValue(currPage);
  
  if (cPage === 0) {
    return (
      <div className="right-panel" style={{ backgroundColor: formData.pageBack }}>
        <h1>Page: {formData.page}</h1>
        <h1>Name: {formData.name}</h1>
        <p>Address: {formData.address}</p>
        <h4>fruit of choice: {formData.selected}</h4>
        <h4>is going? {formData.checked ? 'true' : 'false'}</h4>
        <p>description: {formData.description}</p>
      </div>
    )
  } else if (cPage === 1) {
    return (
      <div className="right-panel" style={{ backgroundColor: formData.pageBack }}>
        <h1>Page: {formData.page}</h1>
        <h1>Spirit Animal: {formData.spiritAnimal}</h1>
        <img src={formData.imgUrl} style={{ maxHeight: "200px" }} />
        <h4>awesome? {formData.checked ? 'true' : 'false'}</h4>
        <p>Spirit Description: {formData.description}</p>
      </div>
    )
  }

  return (
    <div className="right-panel" style={{ backgroundColor: formData.pageBack }}>
      <h1>Page: {formData.page}</h1>
      <h1>Alias: {formData.name}</h1>
      <p>Form Type: {formData.address}</p>
      <h4>Can do the cha cha? {formData.checked ? 'true' : 'false'}</h4>
      <p>Superpower: {formData.description}</p>
    </div>
  )
}

export default RightPanel;
