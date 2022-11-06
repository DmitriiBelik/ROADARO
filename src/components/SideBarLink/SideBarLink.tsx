import styles from './SideBarLink.module.scss'
import { SideBarLinkProps } from './types'
import {Badge, BadgeProps, styled} from '@mui/material'

const SideBarLink = ({icon, title, count}: SideBarLinkProps) => {

    const StyledBadge = styled(Badge)<BadgeProps>( () => ({
        '& .MuiBadge-badge': {
          right: -80,
          top: 13,
          border: 'none'
        },
      }));

    return(
        <div className={styles.link_wrapper}>
            {icon}
            {count ? 
                <StyledBadge color="warning" badgeContent={count}>
                    {title}
                </StyledBadge> 
            : 
                <div>{title}</div>
            }
        </div>
    )
}

export default SideBarLink