import React from "react";




export const Tile = ({infos}) => {
  const input = Object.values(infos)
  return (
    <div className="tile-container">
      {input.map((info,index) => index === 0 ? (<p className="tile-title" key={index}>{info}</p>) : (<p className="tile" key={index}>{info}</p>)
      )}
    </div>
  );
};
