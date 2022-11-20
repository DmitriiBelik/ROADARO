import * as Yup from 'yup'
import { InitialValuesType } from './types'

export const InitialValues: InitialValuesType = {
    responsible: 0,
    projectName: '',
    roadClass: 0,
    workType: 0,
    filial: '',
    roadLength: 0,
    quarry: 0,
    dateStart: new Date(),
    dateEnd: new Date(),
    subcontractor: '',
}

export const ValidationSchema = Yup.object().shape({
    responsible: Yup.number().required('Обязательное поле'),
    projectName: Yup.string().required('Обязательное поле'),
    roadClass: Yup.number().required('Обязательное поле'),
    workType: Yup.number().required('Обязательное поле'),
    filial: Yup.string().required('Обязательное поле'),
    roadLength: Yup.number().required('Обязательное поле'),
    quarry: Yup.number().required('Обязательное поле'),
    dateStart: Yup.date().required('Обязательное поле'),
    dateEnd: Yup.date().required('Обязательное поле'),
    subcontractor: Yup.string(),
})

export const roadClasses = [
    {
        id: 1,
        title: 'Автомагистраль',
    },
    {
        id: 2,
        title: 'Скоростная',
    },
    {
        id: 3,
        title: 'Обычная',
    },
]

export const workTypes = [
    {
        id: 1,
        title: 'Ремонт',
    },
    {
        id: 2,
        title: 'Строительство',
    },
    {
        id: 3,
        title: 'Другое',
    },
]
