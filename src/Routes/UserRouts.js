import React from 'react';
import Header from '../components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../counatine/Home/Home';

function UserRouts(props) {
    return (
        <>
            <Header />

            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </>
    );
}

export default UserRouts;