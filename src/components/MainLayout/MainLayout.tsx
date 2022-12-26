import ThemeUpdater from '../ThemeUpdater'
import styles from './MainLayout.module.scss'
import {Avatar, Divider} from '@mui/material/'
import { propsLayout } from './types'
import SideBarLink from '../SideBarLink/SideBarLink'
import SourceIcon from '@mui/icons-material/Source';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import StyledBox from '../StyledBox/StyledBox'
import { logout } from '../../services/auth'
import Router from 'next/router';
import { useAppSelector } from '../../hooks/redux'

const MainLayout = ({children}: propsLayout) => {

    const {userParams} = useAppSelector<any>(state => state.user)
    const { projects } = useAppSelector<any>(state => state.projects)

    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }

    function stringAvatar(name: string) {
        return {
          sx: {
            bgcolor: stringToColor(name),
            color: 'white',
            width: '50px',
            height: '50px'
          },
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }

    return(
        <div>
            <StyledBox className={styles.sidebar_wrapper}>
                <nav className={styles.sidebar_container}>
                {userParams[0]?.firstName 
                    ? 
                    <div className={styles.person_wrapper}>
                        <Avatar {...stringAvatar(`${userParams[0]?.lastName} ${userParams[0]?.firstName }`)} />
                        <div>
                            <p>{userParams[0]?.lastName} {userParams[0]?.firstName }</p>
                            <p>Руководитель отдела кадров</p>
                        </div>
                    </div>
                    : <div></div>
                }
                    <SideBarLink onClick={()=>Router.push('/projects')} icon={<SourceIcon/>} title='Проекты' count={projects.length}/>
                    <SideBarLink onClick={()=>Router.push('/analytics')} icon={<AssessmentIcon/>} title='Аналитика'/>
                    <SideBarLink onClick={()=>Router.push('/')} icon={<HowToRegIcon/>} title='Администрирование'/>
                    <Divider/>
                    <p className={styles.opacity}>Учетная запись</p>
                    <SideBarLink onClick={()=>Router.push('/settings')} icon={<SettingsIcon/>} title='Настройки'/>
                    <SideBarLink onClick={()=>logout()} icon={<LogoutIcon/>} title='Выйти'/>
                    <ThemeUpdater/>
                </nav>
            </StyledBox>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    )
}

export default MainLayout