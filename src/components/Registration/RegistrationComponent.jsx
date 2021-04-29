import React, {useState} from 'react'
import UserInfo from './Steps/UserInfo';
import Email from './Steps/Email'
import Password from './Steps/Password'
import EndReg from  './Steps/EndReg'
import {useDispatch, useSelector} from 'react-redux'
import {registrationThunk} from './../../state/registrationReducer'

const RegistrationComponent = (props) =>{
    const dispatch = useDispatch();
    let [step, setStep] = useState(1);
    let [userInfo, setUserInfo] = useState({
        name: '',
        lastName: '',
        middleName: '',
        date: '2021-01-01'
    });
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const changeStep = step => {
        setStep(step);
    };

    const onSubmitUserInfo = data =>{
        setUserInfo(data);
        changeStep(step+1);
    };
    const onSubmitEmail = data =>{
        setEmail(data.email);
        changeStep(step+1);
    };
    const onSubmitPassword = data =>{
        setPassword(data.password);
        changeStep(step+1);
        dispatch(registrationThunk({
            userInfo,
            email,
            data
        }));
    };
    return (
        <>
            <h2>Registration</h2>
            {step !== 4 && <h5>step: {step}/4</h5>}
            {step === 1 && <UserInfo onSubmit={onSubmitUserInfo} currUserInfo={userInfo}/>}
            {step === 2 && <Email onSubmit={onSubmitEmail} changeStep={changeStep} currEmail={email}/>}
            {step === 3 && <Password onSubmit={onSubmitPassword} changeStep={changeStep}/>}
            {step === 4 && <EndReg regData={{
                userInfo,
                email,
                password
            }}/>}
        </>
    )
};

export default RegistrationComponent;
