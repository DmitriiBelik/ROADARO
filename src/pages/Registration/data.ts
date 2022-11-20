import { InitialValuesType } from './types'
import * as Yup from 'yup'

export const initialValuesForm: InitialValuesType = {
    email: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    patrName: '',
    sex: 'male',
    phone: '',
    accept: false,
}

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Обязательное поле'),
    password: Yup.string()
        .required('Обязательное поле')
        .min(8, 'Пароль слишком короткий - минимум 8 символов')
        .matches(
            /[a-zA-Z]/,
            'Пароль должен содержать только латинские символы'
        ),
    repeatPassword: Yup.string()
        .required('Обязательное поле')
        .min(8, 'Пароль слишком короткий - минимум 8 символов')
        .matches(
            /[a-zA-Z]/,
            'Пароль должен содержать только латинские символы'
        ),
    firstName: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Имя слишком короткое - минимум 2 символа'),
    lastName: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Фамилия слишком короткая - минимум 2 символа'),
    patrName: Yup.string()
        .required('Обязательное поле')
        .min(6, 'Отчество слишком короткое - минимум 6 символа'),
    sex: Yup.string().required('Обязательное поле'),
    phone: Yup.string()
        .required('Обязательное поле')
        .matches(phoneRegExp, 'Некорректный номер телефона'),
})
