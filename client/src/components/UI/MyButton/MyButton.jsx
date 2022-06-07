import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const MyButton = ({children, ...props}) => {
    return (
        <div className="site-button-ghost-wrapper">
            <Button {...props} type="primary" danger ghost>
                {children}
            </Button>
        </div>
    );
};

export default MyButton;