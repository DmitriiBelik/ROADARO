import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react"
import StyledBox from "../StyledBox/StyledBox";
import { options, data } from "./data";
import styles from './Administration.module.scss'
import AddIcon from '@mui/icons-material/Add';
import InfoButton from "../InfoButton/InfoButton";
import AdministrationTable from "../Tables/AdministrationTable/AdministrationTable";

const Administartion:FC = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    return(
        <div>
            <StyledBox>
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
                options={data.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="Поиск по имени" />}
            />
            <InfoButton endIcon={<AddIcon />}>Добавить</InfoButton>
            </div>
            <AdministrationTable/>
            </StyledBox>
        </div>
    )
}

export default Administartion