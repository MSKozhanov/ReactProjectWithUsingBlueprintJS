import React, { useState } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import { Button} from "@blueprintjs/core";
import { FirstComponent } from './FirstComponent/index';
import { MenuComponent } from './MenuComponent/index'

function App(props:any) { 
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div>
            <div>
                <h1> Click to open dialog with table </h1>
                <MenuComponent/>
                <Button onClick={() => { setIsOpen(true) }}>Open Dialog</Button>
                <FirstComponent isOpen={isOpen} onCloseDialog={(val:boolean)=>{setIsOpen(val)}} />
            </div>
        </div>

    );
};
export default App;