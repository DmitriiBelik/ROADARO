import { Formik } from "formik"
import StyledBox from "../../components/StyledBox/StyledBox"
import { useAppSelector } from "../../hooks/redux"
import SettingForm from "./SettingsForm"
import Router from 'next/router';
import styles from '../CreateProject/CreateProject.module.scss'

import { Button } from "@mui/material"
import InfoButton from "../../components/InfoButton/InfoButton";

const SettingsPage = () => {
    const {userState, userParams} = useAppSelector<any>(state => state.user)

    return(
        <Formik 
            initialValues={{
                password: '123456asfaf',
                email: '',
                firstName: '',
                lastName: '',
                thridName: '',
                phone: ''
            }}
            onSubmit={(values) => console.log(values)}
            enableReinitialize
        >{props => (
            <StyledBox style={{height:'100%', position:'relative'}}>
                <h3 style={{margin:'0', textAlign:'center', paddingTop:'20px'}}>Личный кабинет</h3>
                    <div style={{margin:'0 auto', width: 'fit-content'}}>
                        <SettingForm/>
                        <div className={styles.buttons_wrapper}>
                            <Button onClick={() => Router.push('/')} variant="contained">Отменить</Button>
                            <InfoButton 
                                onClick={() => {
                                    Router.push('/')
                                    }
                                }>
                                Сохранить
                            </InfoButton>
                        </div>
                    </div>
            </StyledBox>
        )}
        </Formik>
    )
}

export default SettingsPage