import React, { useState } from "react";
import { Button, Card, Classes, Elevation, Intent, Menu, MenuItem, PopoverInteractionKind, Position } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';



export const MenuComponent: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [currentCount, setCurrentCount] = useState<number>(0);
  const randElem = () => {
    let val = 100;
    let randomValue = Math.floor(Math.random() * val)
    console.log('random', randomValue);
    return randomValue;
  }
  const addElement = () => {
    let a: number[] = array;
    setCurrentCount(currentCount + 1);
    a.push(randElem());
    setArray(a);
  };
  const menu = (
    <Menu  style={{ width: "200px" }}>
        <MenuItem icon="add" text="Add element" onClick={addElement} />{" "}
        
        <MenuItem icon="menu-open" text="Elements"
          
          children={array.map((element, index) => (
            <MenuItem icon="small-plus" key={index} text={element} />
          ))}
        />
      </Menu>
  );
  return (
    <Popover2 content={menu} position={Position.RIGHT_TOP} className={Classes.DARK} interactionKind={PopoverInteractionKind.CLICK}   >
      <Button intent="primary">Open Menu</Button>
      </Popover2>
  );

  // console.log("render");

  // return (
  //   <Card>
  //     <Popover2 position={Position.RIGHT_TOP} className={Classes.DARK}   >
      
  //     <Menu  style={{ width: "200px" }}>
  //       <MenuItem icon="add" text="Add element" onClick={addElement} />
        
  //       <MenuItem icon="menu-open" text="Elements" children={array.map((element, index) => (
  //           <MenuItem icon="small-plus" key={index} text={element} />
  //         ))}
          
  //       />
  //     </Menu>
  //     </Popover2>
  //     </Card>
  // );
  
};

