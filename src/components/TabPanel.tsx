import {Box, Tab, Tabs} from "@mui/material";
import React, {useState} from "react";

interface CustomTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: CustomTabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box >{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}
interface TabPanelProps {
    tabs: { content: React.ReactElement, name: string }[]
}
export default function TabPanel(props: TabPanelProps) {
    const [value, setValue] = useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const customContent: React.ReactElement[] = []
    const customTabs: React.ReactElement[] = []
    for (let i = 0; i < props.tabs.length; i++) {
        customContent.push(<div style={{marginTop: 20}} ><CustomTabPanel value={value} index={i}>
            {props.tabs[i].content}
        </CustomTabPanel></div>)
        customTabs.push(<Tab label={props.tabs[i].name} {...a11yProps(i)}/>)
    }
    return (
        <Box sx={{ minHeight: '100vh'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider' }}>
                <div style={{backgroundColor: 'black'}} >
                <Tabs value={value} onChange={handleChange}>
                    {customTabs}
                </Tabs>
                </div>
            </Box>
            {customContent}
        </Box>
    );
}