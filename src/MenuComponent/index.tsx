import React from "react";
import { Button, Menu, MenuItem, Classes } from "@blueprintjs/core";
import { ContextMenu2 } from "@blueprintjs/popover2";



export const MenuComponent: React.FC = () => {
    const menu = (
      <Menu >
        <MenuItem icon="download" text="Download" />
        <MenuItem icon="download" text="Download2" />
      </Menu>
    );
  
    return (
      
        <ContextMenu2 content={menu}>
          <Button intent="primary"  text="OpenMenu" />
        </ContextMenu2>
      
    );
  };

