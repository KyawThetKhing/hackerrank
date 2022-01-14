import React from 'react'
import { Outlet } from 'react-router';
import Header from 'components/Header';

const HorizontalLayout = () => {
    return (
        <div className="layoutWrapper">
            <Header />
            <Outlet />
        </div>
    )
}

export default HorizontalLayout
