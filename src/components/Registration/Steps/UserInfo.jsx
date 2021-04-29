import React from 'react'
import Input from "@material-ui/core/Input/Input";
import TextField from "@material-ui/core/TextField/TextField";
import {useForm, Controller} from "react-hook-form";
import Button from "@material-ui/core/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Styles from './Inputs.module.css'

const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required!')
        .min(3, 'Name must be at least 3 characters!')
        .matches(/([a-zA-Z])/, 'You can use only latin symbols!'),
    lastName: yup.string()
        .required('Last name is required!')
        .min(3, 'Last name must be at least 3 characters!')
        .matches(/([a-zA-Z])/, 'You can use only latin symbols!'),
    middleName: yup.string()
        .required('Middle Name is required!')
        .min(3, 'Middle Name must be at least 3 characters!')
        .matches(/([a-zA-Z])/, 'You can use only latin symbols!'),
});

const UserInfo = props =>{
    const { control, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div>
                <Controller
                    name="name"
                    control={control}
                    defaultValue={props.currUserInfo.name}
                    render={({ field }) => <Input {...field} placeholder={'Name'}
                                                  className={[errors.name ? Styles.error : '', Styles.inputStyle].join(' ')}/>}
                />
                <p className={Styles.errorMess}>{errors.name?.message}</p>
            </div>
            <div>
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue={props.currUserInfo.lastName}
                    render={({ field }) => <Input {...field} placeholder={'Last Name'}
                                                  className={[errors.lastName ? Styles.error : '', Styles.inputStyle].join(' ')}/>}
                />
                <p className={Styles.errorMess}>{errors.lastName?.message}</p>
            </div>
            <div>
                <Controller
                    name="middleName"
                    control={control}
                    defaultValue={props.currUserInfo.middleName}
                    render={({ field }) => <Input {...field} placeholder={'Middle Name'}
                                                  className={[errors.middleName ? Styles.error : '', Styles.inputStyle].join(' ')}/>}
                />
                <p className={Styles.errorMess}>{errors.middleName?.message}</p>
            </div>
            <div>
                <Controller
                    name="date"
                    control={control}
                    defaultValue={props.currUserInfo.date}
                    render={({ field }) => <TextField {...field}
                                                      placeholder={'Middle Name'}
                                                      id="date"
                                                      type="date"
                                                      className={Styles.inputStyle}
                                                      InputLabelProps={{
                                                          shrink: true,
                                                      }}/>}
                />
            </div>
            <div className={Styles.buttonsStyle}>
                <Button variant="outlined"
                        color="primary"
                        type='submit'>
                    Next
                </Button>
            </div>
        </form>
    )
};

export default UserInfo;