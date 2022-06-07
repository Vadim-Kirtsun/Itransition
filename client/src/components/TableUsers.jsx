import React, {useContext, useEffect, useState} from 'react';
import "antd/dist/antd.css";
import { Table } from 'antd';
import axios from "axios";
import {AuthContext} from "../context";

const columns = [
    {
        title: 'Id',
        dataIndex: 'id'
    },
    {
        title: 'Username',
        dataIndex: 'username'
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Registration date',
        dataIndex: 'registrationdate',
    },
    {
        title: 'Last login date',
        dataIndex: 'lastlogindate',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
];

const TableUsers = ({setSelectedIds, changesCount}) => {
    const {setIsAuth} = useContext(AuthContext)
    const [users, setUsers] = useState([]);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedIds(selectedRowKeys);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            name: record.name,
        }),
    };


    async function getUsers() {
        const response = await axios.get('http://localhost:3001/')
        if (response.data.length > 0){
            const results= response.data.map(row => ({
                key: row.id,
                id: row.id,
                username: row.username,
                email: row.email,
                registrationdate: (new Date(row.registrationdate)).toLocaleDateString('en-US'),
                lastlogindate: (new Date(row.lastlogindate)).toLocaleDateString('en-US'),
                status: row.status ? 'blocked' : 'active'
            }))
            setUsers(results);
        } else {
            alert(response.data.message)
            setIsAuth(false);
        }
    }


    useEffect(() => {
        getUsers();
    }, [changesCount])


    const selectionType = 'checkbox';

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={users}
            />
        </div>
    );
};

export default TableUsers;