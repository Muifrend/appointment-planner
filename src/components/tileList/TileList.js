import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({information}) => {
  return (
    <div>
      {information.map((info,index) => <Tile infos={info} key={index}/>)}
    </div>
  );
};
