import React from 'react'
import Input from "@material-ui/core/Input/Input";
import {useForm, Controller} from "react-hook-form";
import Button from "@material-ui/core/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from './Inputs.module.css'

const schema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .email('It\'s not looking like email!'),
});

const Email = props =>{
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={props.currEmail}
                        render={({ field }) => <Input {...field} placeholder={'Email'}
                                                      className={[errors.email ? Styles.error : '', Styles.inputStyle].join(' ')}/>}
                    />
                    <p className={Styles.errorMess}>{errors.email?.message}</p>
                </div>
                <span className={Styles.buttonsStyle}>
                    <Button variant="outlined"
                            color="primary"
                            onClick={() =>
                                props.changeStep(1)}>
                        Prev
                    </Button>
                </span>
                <span className={Styles.buttonsStyle}>
                    <Button variant="outlined"
                            color="primary"
                            type='submit'>
                        Next
                    </Button>
                </span>
            </form>
        </>
    )
};

export default Email;