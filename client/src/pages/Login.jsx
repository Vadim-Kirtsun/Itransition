import React, {useContext, useState} from 'react';
import { Form, Input, Button } from 'antd';
import Axios from "axios";
import {AuthContext} from "../context";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                alert(response.data.message);
            } else {
                localStorage.setItem('id', response.data[0].id);
                setIsAuth(true);
            };
        });
    };

        return (
            <div className="App">
            <Form name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!'
                        },
                    ]}
                >
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!'
                        },
                    ]}
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                    />
                </Form.Item>

                    <Form.Item
                        className="loginButton"  wrapperCol={{ offset: 8, span: 8 }}
                    >
                        <Button
                            onClick={login}
                            type="primary"
                            htmlType="submit"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
    );
};

export default Login;