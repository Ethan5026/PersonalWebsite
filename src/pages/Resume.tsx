import React from "react";
import {Card, Container, Fab} from "@mui/material";
import ResumeImage from '../images/resume.jpg'
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import HoverGrow from "../components/HoverGrow";
import FadeIn from "../components/FadeIn";



export default function Resume() {
    return (
        <div>
            <FadeIn>
            <Container>
                <Card>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <img style={{border: '5px solid grey', marginRight: 20, marginLeft: 20}} src={ResumeImage}
                             alt={"Resume - Ethan Gruening"} width={'75%'}/>
                    </div>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <HoverGrow>
                        <a href={'../../documents/resume.pdf'} download="Ethan-Gruening-Resume"
                           target='_blank'>
                            <Fab style={{marginRight: 20, marginLeft: 20}}
                                 variant="extended" size="large" color="primary">
                                <SaveAltIcon sx={{mr: 1}}/>
                                Download as PDF
                            </Fab>
                        </a>
                        </HoverGrow>
                    </div>
                    <br/>
                </Card>
            </Container>
            </FadeIn>
            <br/>
        </div>
)
}