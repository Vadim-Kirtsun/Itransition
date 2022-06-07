import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Users from "../pages/Users";


const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
            isAuth
            ?   <Routes>
                    <Route path='/users' element={<Users/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/users" replace />}
                    />
                </Routes>
            :   <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
                </Routes>
    );
};

export default AppRouter;