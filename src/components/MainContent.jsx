import React from 'react'
import TopHeader from './topHeader/TopHeader';

export const MainContent = () => {
    const mainContentStyle = {
        backgroundColor: '#2c3254',
        padding: '15px 0',
        width: '100%',
        borderTopLeftRadius: '20px',
        borderTopRightRadius: '20px',
        minHeight: '90vh'

    }
    return (
        <div style={mainContentStyle}>
            <TopHeader/>
            MainContent
        </div>
    )
}
