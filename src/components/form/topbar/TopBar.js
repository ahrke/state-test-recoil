import React from 'react';

import { useRecoilState } from 'recoil';
import { currPage } from '../../../atoms/formAtoms';
import currentPage from '../../../selectors/formSelectors';


import { SliderPicker } from 'react-color';

const TopBar = () => {
  const [page, updateData] = useRecoilState(currentPage)
  // const [__, updateData] = useRecoilState(updatePage)
  const [cPage, setCPage] = useRecoilState(currPage);
  
  const handleBackChange = (color) => {
    updateData({...page, pageBack: color.hex})
  }

  const changePage = (pageNum) => {
    setCPage(pageNum)
  }

  return (
    <div className="topbar">
      {/* TopBar */}
      <SliderPicker color={page.pageBack} onChange={handleBackChange} className="slider" />
      <div style={{ margin: "10px" }}>
        <button onClick={e => changePage(0)}>
          1
        </button>
        <button onClick={e => changePage(1)}>
          2
        </button>
        <button onClick={e => changePage(2)}>
          3
        </button>
      </div>
    </div>
  )
}

export default TopBar;
