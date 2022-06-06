import React from 'react'

const Sidebar = ({handleClick}) => {
  
  return (
    <div className="organisor-btn" onClick={handleClick}>
      <button value="Great Run">Great Run</button>
      <button value="RunThrough">Run Through</button>
      <button value="Limelight Sports Club">Limelight Sports Club</button>
    </div>
   
  );
}

export default Sidebar;