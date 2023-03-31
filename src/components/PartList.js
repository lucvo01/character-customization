import React from 'react';

function PartList({handleClick, path, total}) {
      const lists = [];
      for(let i = 0; i < total; i++){
        lists.push(
        <div className="clickable square">
        <img src={`character/${path}/${i + 1}.png`} alt="" height="60" onClick={() => handleClick(i)}/>
      </div>)
      }
    return (
      <div className="list">{lists}</div>
    )
}

export default PartList