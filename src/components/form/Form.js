import React from 'react';

import TopBar from './topbar/TopBar';
import LeftPanel from './panels/left/LeftPanel';
import RightPanel from './panels/right/RightPanel';

import './panels.scss'

const Form = () => {
  return (
    <div className="form-container">
      <TopBar />
      <div className="panel-container">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}

export default Form;
