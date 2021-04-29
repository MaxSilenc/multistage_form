import React from 'react'

const EndReg = props =>{
    return (
        <>
            <h3 style={{color: 'green'}}>Success!</h3>
            <p>Welcome, <b>{props.regData.userInfo.lastName} {props.regData.userInfo.name} {props.regData.userInfo.middleName}</b> ({props.regData.userInfo.date})!</p>
            <p>You can login with your email: <b>{props.regData.email}</b></p>
        </>
    )
};

export default EndReg;