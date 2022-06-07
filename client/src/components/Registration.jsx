import React, {useState} from 'react';
import Axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';



const Registration = ({setModal}) => {

    const [dataReg, setDataReg] = useState({username: '', email: '', password: ''});

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: dataReg.username,
            email: dataReg.email,
            password: dataReg.password,
        }).then((response) => {
            console.log(response)
        });
        setModal(false);
        //setDataReg({username: '', email: '', password: ''});
    };


    return (
        <div>
        <Form name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}>
            <Form.Item
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input
                    value = {dataReg.username}
                    onChange={(e) => setDataReg({...dataReg, username: e.target.value})}
                    type="text"
                />
            </Form.Item>

            <Form.Item
                label="Email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    value = {dataReg.email}
                    onChange={(e) => setDataReg({...dataReg, email: e.target.value})}
                    type="text"
                />
            </Form.Item>

            <Form.Item
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    value = {dataReg.password}
                    onChange={(e) => setDataReg({...dataReg, password: e.target.value})}
                    type="text"
                />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button onClick={register} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default Registration;