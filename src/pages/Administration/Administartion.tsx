import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react"
import StyledBox from "../../components/StyledBox/StyledBox";
import { options, Employees, ChartOptions, chartData } from "./data";
import styles from './Administration.module.scss'
import AddIcon from '@mui/icons-material/Add';
import InfoButton from "../../components/InfoButton/InfoButton";
import AdministrationTable from "../../components/Tables/AdministrationTable/AdministrationTable";
import { Bar } from 'react-chartjs-2';


const Administartion:FC = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    return(
        <div style={{height:'510px'}}>
            <StyledBox style={{height:'510px', position:'relative'}}>
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
                    <InfoButton style={{marginTop:'5px'}} endIcon={<AddIcon />}>Добавить</InfoButton>
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