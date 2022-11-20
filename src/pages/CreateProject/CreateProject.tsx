/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Form, Formik } from "formik"
import { FC, useState } from "react"
import StyledBox from "../../components/StyledBox/StyledBox"
import { InitialValues, ValidationSchema, roadClasses, workTypes } from "./data"
import styles from './CreateProject.module.scss'
import { TextField as TextFieldF} from 'formik-mui';
import { Autocomplete,Button,IconButton, InputAdornment, Switch, TextField} from "@mui/material"
import Grid from '@mui/material/Grid';
import { Employees } from "../Administration/data"
import InfoButton from "../../components/InfoButton/InfoButton"
import BookIcon from '@mui/icons-material/Book';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { rbFilials, rbQuarrys } from "../../rb/rb"

const CreateProject:FC = () => {
    const [subcontractor, setSubcontractor] = useState<boolean>(false)

    return(
        <Formik 
            initialValues={InitialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values) => console.log(values)}
            enableReinitialize
        >
        {props => (
            <StyledBox style={{height:'100%', position:'relative'}}>
                <h3 style={{margin:'0', textAlign:'center', paddingTop:'20px'}}>Добавление проекта</h3>
                <Form>
                    <div className={styles.fields_wrapper}>
                        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6} >
                                <Autocomplete
                                    style={{width:'100%'}}
                                    id="responsible"
                                    options={Employees}
                                    getOptionLabel={option => option.name}
                                    onChange={(e: object, value: any | null) => {  
                                        props.setFieldValue("responsible", value?.id || '')
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                        <li {...props} key={option.id}>
                                            {option.name}
                                        </li>
                                        );
                                    }}
                                    renderInput={params => (
                                    <TextField
                                        {...params}
                                        name="responsible"
                                        label="Ответственное лицо"
                                        variant="outlined"
                                        error={props.touched['responsible'] && !!props.errors['responsible']}
                                        helperText={props.errors['responsible']}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    style={{width:'100%'}}
                                    component={TextFieldF}
                                    name="projectName"
                                    type="text"
                                    label="Наименование проекта"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton edge="start">
                                                <BookIcon/>
                                            </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <Autocomplete
                                    style={{width:'100%'}}
                                    id="roadClass"
                                    options={roadClasses}
                                    getOptionLabel={option => option.title}
                                    onChange={(e: object, value: any | null) => {  
                                        props.setFieldValue("roadClass", value?.id || '')
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                        <li {...props} key={option.id}>
                                            {option.title}
                                        </li>
                                        );
                                    }}
                                    renderInput={params => (
                                    <TextField
                                        {...params}
                                        name="roadClass"
                                        label="Класс дороги"
                                        variant="outlined"
                                        error={props.touched['roadClass'] && !!props.errors['roadClass']}
                                        helperText={props.errors['roadClass']}
                                    />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                        style={{width:'100%'}}
                                        id="workType"
                                        options={workTypes}
                                        getOptionLabel={option => option.title}
                                        onChange={(e: object, value: any | null) => {  
                                            props.setFieldValue("workType", value?.id || '')
                                        }}
                                        renderOption={(props, option) => {
                                            return (
                                            <li {...props} key={option.id}>
                                                {option.title}
                                            </li>
                                            );
                                        }}
                                        renderInput={params => (
                                        <TextField
                                            {...params}
                                            name="workType"
                                            label="Тип работ"
                                            variant="outlined"
                                            error={props.touched['roadClass'] && !!props.errors['roadClass']}
                                            helperText={props.errors['roadClass']}
                                        />
                                        )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    style={{width:'100%'}}
                                    id="filial"
                                    options={rbFilials}
                                    getOptionLabel={option => option.title}
                                    onChange={(e: object, value: any | null) => {  
                                        props.setFieldValue("filial", value?.id || '')
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                        <li {...props} key={option.id}>
                                            {option.title}
                                        </li>
                                        );
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            name="filial"
                                            label="Филиал"
                                            variant="outlined"
                                            error={props.touched['filial'] && !!props.errors['filial']}
                                            helperText={props.errors['filial']}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    style={{width:'100%'}}
                                    component={TextFieldF}
                                    name="roadLength"
                                    type="text"
                                    label="Протяженность дороги"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton edge="start">
                                                    <SettingsEthernetIcon/>
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">км</InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    style={{width:'100%'}}
                                    id="quarry"
                                    options={rbQuarrys}
                                    getOptionLabel={option => option.title}
                                    onChange={(e: object, value: any | null) => {  
                                        props.setFieldValue("quarry", value?.id || '')
                                    }}
                                    renderOption={(props, option) => {
                                        return (
                                        <li {...props} key={option.id}>
                                            {option.title}
                                        </li>
                                        );
                                    }}
                                    renderInput={params => (
                                        <TextField
                                            {...params}
                                            name="quarry"
                                            label="Карьер"
                                            variant="outlined"
                                            error={props.touched['quarry'] && !!props.errors['quarry']}
                                            helperText={props.errors['quarry']}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Switch 
                                    className="sub_switch" 
                                    aria-label='Switch'
                                    onChange={() => setSubcontractor(!subcontractor)}
                                    />
                                <Field
                                    style={{width:'90%'}}
                                    component={TextFieldF}
                                    name="subcontractor"
                                    type="text"
                                    label="Субподрядчик"
                                    variant="outlined"
                                    disabled={!subcontractor}
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton edge="start">
                                                <BookIcon/>
                                            </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        onChange={(value) => props.setFieldValue("dateStart", value, true)}
                                        value={props.values.dateStart}
                                        label="Дата начала работ"
                                        renderInput={(params) => (
                                            <TextField
                                            error={Boolean(props.touched.dateStart && props.errors.dateStart)}
                                            helperText={props.touched.dateStart && props.errors.dateStart}
                                            label="Дата начала работ"
                                            margin="normal"
                                            name="dateStart"
                                            fullWidth
                                            {...params}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        onChange={(value) => props.setFieldValue("dateEnd", value, true)}
                                        value={props.values.dateEnd}
                                        label="Дата окончания работ"
                                        renderInput={(params) => (
                                            <TextField
                                            error={Boolean(props.touched.dateEnd && props.errors.dateEnd)}
                                            helperText={props.touched.dateEnd && props.errors.dateEnd}
                                            label="Дата начала работ"
                                            margin="normal"
                                            name="dateEnd"
                                            fullWidth
                                            {...params}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                        <div className={styles.buttons_wrapper}>
                            <Button variant="contained">Отменить</Button>
                            <InfoButton>Сохранить</InfoButton>
                        </div>
                    </div>
                </Form>
            </StyledBox>
        )}
        </Formik>
    )
}

export default CreateProject