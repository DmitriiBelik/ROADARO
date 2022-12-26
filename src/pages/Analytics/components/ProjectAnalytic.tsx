import { useEffect, useState } from "react"
import ProjectsTable from "../../../components/Tables/ProjectsTable/ProjectsTable"
import { useAppSelector } from "../../../hooks/redux"
import { Formik } from "formik";
import { getProjects } from "../../../services/projects";
import { options } from "../../Projects/data";
import { useDispatch } from "react-redux";
import { projectsFetched } from "../../../redux/ProjectSlice";
import { Autocomplete, TextField } from "@mui/material";
import styles from '../../Projects/Projects.module.scss'

const ProjectAnalytic = () => {
    const [value, setValue] = useState<string | null>(options[0]);
    const [inputValue, setInputValue] = useState('');
    const { projects } = useAppSelector<any>(state => state.projects)
    const dispatch = useDispatch();

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
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom:'30px'}}>
                {/*@ts-ignore*/ }
                <Autocomplete style={{marginLeft:'40px'}} className={styles.search} id="free-solo-demo" freeSolo onChange={(value) => props.setFieldValue('projectTitle', value.target.innerText)} options={projects.map((option: { projectName: string; }) => option.projectName)} renderInput={(params) => <TextField {...params} label="Название проекта" />}
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
            </div>
            {projects ? <ProjectsTable tableData={getFilteredData(projects, props.values.projectTitle, props.values.workType)}/> : ''}
        </div>
        )}
        </Formik>
    )
}

export default ProjectAnalytic