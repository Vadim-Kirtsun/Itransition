import React, {useState} from 'react';
import TableUsers from "../components/TableUsers";
import '../styles/App.css';
import Toolbar from "../components/Toolbar";

const Users = () => {
    const  [selectedIds, setSelectedIds] = useState([]);
    const  [changesCount, setChangesCount] = useState(0);

    return (
        <div className="App">
            <h1>Users:</h1>
            <Toolbar selectedIds={selectedIds} setChangesCount ={setChangesCount} changesCount={changesCount}/>
            <TableUsers setSelectedIds={setSelectedIds} changesCount={changesCount}/>
        </div>
    );
};

export default Users;