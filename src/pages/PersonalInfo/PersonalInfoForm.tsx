import {  InputAdornment, IconButton, FormControlLabel, Radio, FormLabel } from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Form, Field } from "formik";
import { TextField, RadioGroup } from 'formik-mui';
import styles from './PersonalInfo.module.scss'

const PersonalInfoForm = () => {
    return (
            <Form>
                <div className={styles.personal_info_wrapper}>
                    <div className={styles.fields_wrapper}>
                        <Field
                            className={styles.wide_input}
                            component={TextField}
                            size='small'
                            name="lastName"
                            type="text"
                            label="Фамилия"
                            variant="outlined"
                        />
                        <Field
                            className={styles.wide_input}
                            component={TextField}
                            size='small'
                            name="firstName"
                            type="text"
                            label="Имя"
                            variant="outlined"
                        />
                        <Field
                            className={styles.wide_input}
                            component={TextField}
                            size='small'
                            name="patrName"
                            type="text"
                            label="Отчество"
                            variant="outlined"
                        />
                    
                        <Field
                            className={styles.wide_input}
                            component={TextField}
                            size='small'
                            name="phone"
                            type="text"
                            label="Номер телефона"
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
                        <FormLabel id="radio-buttons-group-label">Укажите ваш пол</FormLabel>
                            <Field row component={RadioGroup} name="sex">
                                <FormControlLabel
                                    value="male"
                                    control={<Radio/>}
                                    label="Мужчина"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio/>}
                                    label="Женщина"
                                />
                            </Field>
                    </div>
                </div>
            </Form>
    )
}

export default PersonalInfoForm