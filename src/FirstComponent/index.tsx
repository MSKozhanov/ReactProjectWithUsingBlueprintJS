import { Button, Classes, Dialog, H3, Icon, InputGroup } from "@blueprintjs/core";
import { Cell, Column, Table2 } from "@blueprintjs/table";
import '../../node_modules/@blueprintjs/table/lib/css/table.css'
import { useState } from "react";
import users from "./users.json";

interface IProps {
    isOpen: boolean;
    onCloseDialog: (val: boolean) => void

}

interface IUsers{
    login: string;
    name: string;
    age: string;
}

export function FirstComponent(props: IProps) {
    const { isOpen, onCloseDialog } = props
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [searchUser, setSearchUser] = useState<string>('');
    const [userList, setUserList] = useState<IUsers[]>(users);
    const columns = ["Login", "Name", "Age"];

    const getTableContent = (): JSX.Element[] => {
        let newColumn = columns.map((column, index) => { return <Column key={index} name={column} cellRenderer={myCellRenderer} /> });
        return newColumn
    }

    const myCellRenderer = (rowIndex: number, columnIndex: number) => {

        switch (columnIndex) {
            case 0:
                return <Cell>{userList[rowIndex].login}</Cell>
            case 1:
                return <Cell>{userList[rowIndex].name}</Cell>
            case 2:
                return <Cell>{userList[rowIndex].age}</Cell>
        }
    }

    const filterUsers = (search: string): IUsers[] => {
        setSearchUser(search);
        if (!search) {
            return users;
        }
        return users.filter((user) => {
            let result: IUsers | null = null
            Object.values(user).forEach((element) => {
                element.includes(search)
                if (element.includes(search) === true) {
                    result = user;
                }
            })
            if (result) {
                return result
            }
        });
    }

    // useEffect(() => {
    //     const Debounce = setTimeout(() => {
            // const filteredUsers = filterUsers();
            // setUserList(filteredUsers);
    //     }, 300);

    //     return () => clearTimeout(Debounce);
    // }, [searchUser]);


    return (
        
        <Dialog className={darkTheme ? Classes.DARK : undefined}
            isOpen={isOpen} onOpening={getTableContent} onClose={() => onCloseDialog(false)}>   
            <Button icon={darkTheme ? "moon" : "flash"} onClick={() => setDarkTheme(!darkTheme)}> Change theme</Button>
            <div className="bp4-input-group .modifier">
                <InputGroup leftIcon="search" type="search" placeholder="Search input" dir="auto" onChange={(e) => {setUserList(filterUsers(e.target.value))} }/>
            </div>
            <Table2 numRows={userList.length} cellRendererDependencies={[userList]}>
                {getTableContent()}
            </Table2>
        </Dialog >

    )

}