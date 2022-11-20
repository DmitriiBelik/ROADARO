import { searchType } from './types'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

export const options = ['Любая', 'Сотрудник', 'Администратор']

export const Employees: searchType[] = [
    {
        id: 1,
        name: 'Касаткина София Дмитриевна',
        role: 'Сотрудник',
        position: 'Старший бухгалтер',
        login: 'kassd-dsio@mail.ru',
        password: '************',
    },
    {
        id: 2,
        name: 'Кузнецов Роман Иванович',
        role: 'Администратор',
        position: 'Аналитик производства',
        login: 'kuzri-dsio@mail.ru',
        password: '************',
    },
    {
        id: 3,
        name: 'Ковалева Ульяна Сергеевна',
        role: 'Администратор',
        position: 'Главный инженер',
        login: 'kovus-dsio@mail.ru',
        password: '************',
    },
    {
        id: 4,
        name: 'Горелова Екатерина Михайловна',
        role: 'Администратор',
        position: 'Заместитель директора',
        login: 'gorem-dsio@mail.ru',
        password: '************',
    },
    {
        id: 5,
        name: 'Беляева Полина Андреевна',
        role: 'Администратор',
        position: 'Стратегический менеджер',
        login: 'belpa-dsio@mail.ru',
        password: '************',
    },
    {
        id: 6,
        name: 'Кулагин Степан Никитич',
        role: 'Сотрудник',
        position: 'Менеджер по закупкам',
        login: 'kulsn-dsio@mail.ru',
        password: '************',
    },
    {
        id: 7,
        name: 'Кулагин Степан Никитич',
        role: 'Сотрудник',
        position: 'Менеджер по закупкам',
        login: 'kulsn-dsio@mail.ru',
        password: '************',
    },
    {
        id: 8,
        name: 'Кулагин Степан Никитич',
        role: 'Сотрудник',
        position: 'Менеджер по закупкам',
        login: 'kulsn-dsio@mail.ru',
        password: '************',
    },
]

const labels = [
    'Тальны',
    'Одинск',
    'Стеклянка',
    'Ширяева',
    'Тайтура',
    'Новожилкино',
    'Архиреевка',
]

export const chartData = {
    labels,
    datasets: [
        {
            label: 'Проекты',
            data: [1.8, 2.5, 1.5, 2.3, 3.2, 2.0, 1.2],
            backgroundColor: '#FBBF24',
        },
    ],
}

export const ChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Сравнение проектов',
        },
    },
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
