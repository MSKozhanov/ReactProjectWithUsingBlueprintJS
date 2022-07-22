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
  // const menu = (
  //   <Menu  style={{ width: "200px" }}>
  //       <MenuItem icon="add" text="Add element" onClick={addElement} />{" "}
        
  //       <MenuItem icon="menu-open" text="Elements"
          
  //         children={array.map((element, index) => (
  //           <MenuItem icon="small-plus" key={index} text={element} />
  //         ))}
  //       />
  //     </Menu>
  // );

  console.log("render");
  return (
    <Card>
      <Popover2 position={Position.RIGHT_TOP} className={Classes.DARK}   >
      
      <Menu  style={{ width: "200px" }}>
        <MenuItem icon="add" text="Add element" onClick={addElement} />
        
        <MenuItem icon="menu-open" text="Elements" children={array.map((element, index) => (
            <MenuItem icon="small-plus" key={index} text={element} />
          ))}
          
        />
      </Menu>
      </Popover2>
      </Card>
  );

  

  // const addElement = () => { 
  //   let array:number[] = arrayList
  //   array.push(randElem()) 
  //   console.log('arrNew', array);
  //   setArrayList(array)
  // }
  // const getMenuItem = () => { console.log("arrL",arrayList)
  //   let newMenuItem = arrayList.map((element, index) => { console.log(111); return <MenuItem icon="small-plus" key={index} text={element} /> });
  //   return newMenuItem
  // } 
  // const menu = (
  //   <Menu >
  //     <MenuItem icon="plus" text="Add element" onClick={addElement} /> {/**onClick={() => addElement()} */}
  //     <MenuItem  icon="menu-open" text="Elements">   
  //       {/* {getMenuItem()} */}
  //       { arrayList.map((element, index) =>  <MenuItem icon="small-plus" key={index} text={index} /> )}
  //     </MenuItem>
  //   </Menu> 
  //// );
  

//   return (
    // <Popover2 content={menu} position={Position.RIGHT_TOP} className={Classes.DARK} >
    //   <Button intent="primary" text="OpenMenu" />
    // </Popover2>
// <Menu >
//       <MenuItem icon="plus" text="Add element" onClick={addElement} /> {/**onClick={() => addElement()} */}
//       <MenuItem icon="menu-open" text="Elements">   
//         {/* {getMenuItem()} */}
//         { arrayList.map((element, index) =>  <MenuItem icon="small-plus" key={index} text={index} /> )}
//       </MenuItem>
//     </Menu> 
//   );
};

