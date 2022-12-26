import { Autocomplete, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react"
import StyledBox from "../../components/StyledBox/StyledBox";
import { options, Employees, ChartOptions, chartData } from "./data";
import styles from './Administration.module.scss'
import AddIcon from '@mui/icons-material/Add';
import InfoButton from "../../components/InfoButton/InfoButton";
import AdministrationTable from "../../components/Tables/AdministrationTable/AdministrationTable";
import { Bar } from 'react-chartjs-2';
import Router from 'next/router';
import { useAppSelector } from "../../hooks/redux";
import { getParams } from "../../services/auth";
import { useDispatch } from "react-redux";


const Administartion = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');
    const {userState, userParams} = useAppSelector<any>(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        userState ? Router.push('/') :  Router.push('/signIn')
    }, [userState])

    useEffect(() => {
        getParams(userState, dispatch)
    }, [userState])

    useEffect(() => {
        if(Array.isArray(userParams)) {
            userParams[0]?.firstName ? Router.push('/') : Router.push('/personalInfo')
        }
    }, [userParams])
    

    return(
        <div style={{height:'510px'}}>
            <StyledBox style={{height:'675px', position:'relative'}}>
                <div className={styles.administartion_header}>
                    <h3>Учетные записи сотрудников</h3>
                    <Autocomplete
                        style={{marginLeft:'40px'}}
                        value={value}
                        onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Роль" />}
                    />
                    <Autocomplete
                        style={{width:'300px', marginLeft:'40px'}}
                        className={styles.search}
                        id="free-solo-demo"
                        freeSolo
                        options={Employees.map((option) => option.name)}
                        renderInput={(params) => <TextField {...params} label="Поиск по имени" />}
                    />
                    <InfoButton onClick={() => Router.push('/createEmployee')} style={{marginTop:'5px'}} endIcon={<AddIcon />}>Добавить</InfoButton>
            </div>
            <AdministrationTable/>
            </StyledBox>
            <div className={styles.bars_wrapper}>
                <StyledBox className={styles.projects_bar}>
                    <Bar options={ChartOptions} data={chartData} />
                </StyledBox>
                <StyledBox className={styles.projects_bar}>
                    <Bar options={ChartOptions} data={chartData} />
                </StyledBox>
            </div>
        </div>
    )
}

export default Administartion