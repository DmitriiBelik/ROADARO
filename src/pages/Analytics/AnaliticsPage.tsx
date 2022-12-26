import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import SourceIcon from '@mui/icons-material/Source';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StyledBox from "../../components/StyledBox/StyledBox";
import EmployeeAnalytic from "./components/EmpAnalytic/EmployeeAnalytic";
import ProjectAnalytic from "./components/ProjectAnalytic";
import QuarryAnalytics from "./components/QuarrysAnalytics/QuarryAnalytic";
import FilialAnalytics from "./components/FilialsAnalitics/FilialsAnalytics";
import SubcontractorsAnalytics from "./components/SubcontractorsAnalytics/SubcontractorsAnalytics";

const AnalyticsPage = () => {
    const [value, setValue] = useState<string>('1');
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
        <StyledBox style={{height:'100%', position:'relative'}}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="Analytics" variant="fullWidth">
                <Tab icon={<SupervisedUserCircleIcon/>} label="Сотрудники" value="1" />
                <Tab icon={<SourceIcon/>} label="Проекты" value="2" />
                <Tab icon={<FilterHdrIcon/>} label="Карьеры" value="3" />
                <Tab icon={<HomeIcon/>} label="Филиалы" value="4" />
                <Tab icon={<PeopleAltOutlinedIcon/>} label="Субподрядчики" value="5" />
                </TabList>
            </Box>
            <TabPanel value="1"><EmployeeAnalytic/></TabPanel>
            <TabPanel value="2"><ProjectAnalytic/></TabPanel>
            <TabPanel value="3"><QuarryAnalytics/></TabPanel>
            <TabPanel value="4"><FilialAnalytics/></TabPanel>
            <TabPanel value="5"><SubcontractorsAnalytics/></TabPanel>
            </TabContext>
      </StyledBox>
    );
  }

export default AnalyticsPage