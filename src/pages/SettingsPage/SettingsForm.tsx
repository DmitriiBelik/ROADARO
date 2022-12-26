import { IconButton, InputAdornment } from "@mui/material";
import { useFormikContext, Field } from "formik";
import { TextField} from 'formik-mui';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import styles from '../Registration/Registration.module.scss'
import { useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";

const SettingForm = () => {
    const {values, setFieldValue} = useFormikContext()
    const {userState, userParams} = useAppSelector<any>(state => state.user)

    useEffect(() => {
        if(userState) {
            setFieldValue('email', userState.email)
        }
    }, [userState])

    useEffect(() => {
        if(userParams[0]) {
            setFieldValue('lastName', userParams[0].lastName)
            setFieldValue('firstName', userParams[0].firstName)
            setFieldValue('thridName', userParams[0].patrName)
            setFieldValue('phone', userParams[0].phone)
        }
    }, [userParams])

    return(
        <div>
            <div>
                <Field
                    style={{margin: '20px'}}
                    className={styles.wide_input}
                    component={TextField}
                    size='small'
                    name="email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton edge="start">
                                <EmailIcon/>
                            </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Field
                    style={{margin: '20px'}}
                    className={styles.wide_input}
                    component={TextField}
                    size='small'
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton edge="start">
                                <KeyIcon/>
                            </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div>
                <Field
                    style={{margin: '20px', width:'30%'}}
                    component={TextField}
                    size='small'
                    name="lastName"
                    type="text"
                    label="Фамилия"
                    variant="outlined"
                />
                <Field
                    style={{margin: '20px', width:'30%'}}
                    component={TextField}
                    size='small'
                    name="firstName"
                    type="text"
                    label="Имя"
                    variant="outlined"
                />
                <Field
                    style={{margin: '20px', width:'30%'}}
                    component={TextField}
                    size='small'
                    name="thridName"
                    type="text"
                    label="Отчество"
                    variant="outlined"
                />
            </div>
            <div>
                <Field
                    style={{margin: '20px'}}
                    className={styles.wide_input}
                    component={TextField}
                    size='small'
                    name="phone"
                    type="text"
                    label="Телефон"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <IconButton edge="start">
                                <LocalPhoneIcon/>
                            </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </div>
    )
}

export default SettingForm