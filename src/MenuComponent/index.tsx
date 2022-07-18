import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";



export const MenuComponent: React.FC = () => {

  const array = [1,2,3];
  
  const randElem = () => {
    let val = 100;
    let randomValue = Math.floor(Math.random() * val)
    console.log('random', randomValue);
    return randomValue;
  }
  const addElement = (randomValue: number, array: number[] ) => {
    
    console.log('arr', array);
    array.push(randomValue)
    console.log('arrNew', array);
    return array;
  }
  
  const menu = (
    <Menu >
      <MenuItem icon="download" text="Download" onClick={() => addElement(randElem(),array)}  /> 
      <MenuItem icon="download" text="Download2" />
    </Menu>
  );
 
  return (

    <Popover2 content={menu}>
      <Button intent="primary" text="OpenMenu" />
    </Popover2>

  );
};

