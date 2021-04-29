import React from 'react'
import Input from "@material-ui/core/Input/Input";
import {useForm} from "react-hook-form";
import Button from "@material-ui/core/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from './Inputs.module.css'

const schema = yup.object().shape({
    password: yup.string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters!'),
    passwordRep: yup.string()
        .required('You need to repeat your password!')
        .min(6, 'Password must be at least 6 characters!')
        .oneOf([yup.ref('password'), null], 'Passwords must match!'),
});


const Password = props =>{
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                    <Input type="password"
                           {...register("password")}
                           placeholder={'Password'}
                           className={[errors.password ? Styles.error : '', Styles.inputStyle].join(' ')}/>
                    <p className={Styles.errorMess}>{errors.password?.message}</p>
                </div>
                <div>
                    <Input type="password"
                           {...register("passwordRep")}
                           placeholder={'Repeat Password'}
                           className={[errors.passwordRep ? Styles.error : '', Styles.inputStyle].join(' ')}/>
                    <p className={Styles.errorMess}>{errors.passwordRep?.message}</p>
                </div>
                <span className={Styles.buttonsStyle}>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() =>  props.changeStep(2)}>
                        Prev
                    </Button>
                </span>
                <span className={Styles.buttonsStyle}>
                    <Button variant="outlined"
                            color="secondary"
                            type='submit'>
                        Submit
                    </Button>
                </span>
            </form>
        </>
    )
};

export default Password;