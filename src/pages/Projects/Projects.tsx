import { Autocomplete, TextField } from "@mui/material"
import styles from './Projects.module.scss'
import { FC, useState } from "react"
import { data, options } from "./data";
import StyledBox from "../../components/StyledBox/StyledBox";
import ProjectsTable from "../../components/Tables/ProjectsTable/ProjectsTable";
import InfoButton from "../../components/InfoButton/InfoButton";
import AddIcon from '@mui/icons-material/Add';

const Projects:FC = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');

    return(
        <div style={{height:'100%'}}>
            <StyledBox style={{padding:'10px 20px', height:'100%', position:'relative'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div className={styles.projects_header}>
                        <h3>Проекты</h3>
                        <Autocomplete
                            style={{marginLeft:'40px'}}
                            className={styles.search}
                            id="free-solo-demo"
                            freeSolo
                            options={data.map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} label="Название проекта" />}
                        />
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
                            renderInput={(params) => <TextField {...params} label="Тип работ" />}
                        />
                        <InfoButton style={{marginTop:'5px'}} endIcon={<AddIcon />}>Добавить</InfoButton>
                </div>
                </div>
                <ProjectsTable/>
            </StyledBox>
        </div>
    )
}

export default Projects