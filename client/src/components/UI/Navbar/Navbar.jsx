import React, {useContext, useState} from 'react';
import {AuthContext} from "../../../context";
import MyButton from "../MyButton/MyButton";
import MyModal from "../MyModal/MyModal";
import Registration from "../../Registration";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [modal, setModal] = useState(false);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    const addUser = () => {
        setModal(true);
    };


    return (
        <div className='navbar'>
            <MyModal visible={modal} setVisible={setModal}>
                <Registration setModal={setModal}/>
            </MyModal>
            {isAuth
                ? <MyButton
                    onClick={logout}
                >
                    Logout
                </MyButton>

                : <MyButton
                onClick={addUser}
                >
                Registration
                </MyButton>
            };
        </div>
    );
};

export default Navbar;