import { Autocomplete, TextField } from "@mui/material"
import styles from './Projects.module.scss'
import { FC, useEffect, useState } from "react"
import { options } from "./data";
import StyledBox from "../../components/StyledBox/StyledBox";
import ProjectsTable from "../../components/Tables/ProjectsTable/ProjectsTable";
import InfoButton from "../../components/InfoButton/InfoButton";
import AddIcon from '@mui/icons-material/Add';
import Router from 'next/router';
import { useAppSelector } from "../../hooks/redux";
import { useDispatch } from "react-redux";
import { getParams } from "../../services/auth";
import { projectsFetched } from "../../redux/ProjectSlice";
import { getProjects } from "../../services/projects";
import { Formik } from "formik";

const Projects:FC = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');
    const {userState} = useAppSelector(state => state.user)
    const { projects } = useAppSelector<any>(state => state.projects)
    const dispatch = useDispatch();

    useEffect(() => {
        userState ? Router.push('/projects') :  Router.push('/signIn')
        getParams(userState, dispatch)
    }, [userState])

    useEffect(() => {
        getProjects().then(res => dispatch(projectsFetched(res)))
    }, [])

    const getWorkType = (value:number) => {
        return options[value]
    }

    const getFilteredData = (data: any, titleFilter:string, workTypeFilter: string) => {
        let resData:any = data;
        if(titleFilter) {
            resData = resData.filter((res:any) =>  res.projectName == titleFilter)
        }
        if(workTypeFilter && workTypeFilter != 'Любой') {
            resData = resData.filter((res:any) => getWorkType(res.workType) == workTypeFilter)
        }
        console.log(resData)
        return resData
    }

    return(
        <Formik
            initialValues={{
                projectTitle: '',
                workType: ''
            }}
            onSubmit={(values) => console.log(values)}
        >
        {props => (
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
                            onChange={(value) => props.setFieldValue('projectTitle', value.target.innerText)}
                            options={projects.map((option: { projectName: string; }) => option.projectName)}
                            renderInput={(params) => <TextField {...params} label="Название проекта" />}
                        />
                        <Autocomplete
                            style={{marginLeft:'40px'}}
                            value={value}
                            onChange={(event: any, newValue: string | null) => {
                                setValue(newValue);
                                props.setFieldValue('workType', newValue)
                                console.log(props.values)
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
                        <InfoButton onClick={() => Router.push('/createProject')} style={{marginTop:'5px'}} endIcon={<AddIcon />}>Добавить</InfoButton>
                </div>
                </div>
                {projects ? <ProjectsTable tableData={getFilteredData(projects, props.values.projectTitle, props.values.workType)}/> : ''}
            </StyledBox>
        </div>
        )}
        </Formik>
    )
}

export default Projects