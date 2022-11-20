import { InitialValuesType } from './types'
import * as Yup from 'yup'

export const initialValuesForm: InitialValuesType = {
    email: '',
    password: '',
}

export const ValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Обязательное поле'),
    password: Yup.string()
        .required('Обязательное поле')
        .min(8, 'Пароль слишком короткий - минимум 8 символов')
        .matches(
            /[a-zA-Z]/,
            'Пароль должен содержать только латинские символы'
        ),
})
