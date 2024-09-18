import React from "react";
import {Card, CardActionArea, CardContent, Container, Typography} from "@mui/material";
import GithubImage from '../images/github.png'
import LinkedInImage from '../images/linkedin.png'
import EmailImage from '../images/email.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HoverGrow from "../components/HoverGrow";
import FadeIn from "../components/FadeIn";



export default function Contact() {

    return (
        <FadeIn>
            <Container>
                    <Card style={{width: '100%'}}>
                            <CardContent>
                                <br/>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h6'}>
                                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <PhoneIcon fontSize={'large'}/>319-529-2344
                                            </div>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <EmailIcon fontSize={'large'}></EmailIcon>ethgru@iastate.edu
                                                </div>
                                            </div>

                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br/>
                                <Typography variant={'h5'} style={{textAlign: 'center'}}>Quick Links</Typography>

                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <HoverGrow>
                                <Card style={{margin: 20}}>
                                    <a href={'https://github.com/Ethan5026'} target={'_blank'}>
                                                <img style={{filter: 'invert(100%)'}} width={200} height={200} src={GithubImage} alt={"GitHub Logo"}/>
                                    </a>
                                </Card>
                                </HoverGrow>
                                    <HoverGrow>
                                <Card style={{margin: 20}}>
                                    <a href={'https://www.linkedin.com/in/ethan-gruening/'} target={'_blank'}>
                                            <img width={200} height={200} src={LinkedInImage} alt={"LinkedIn Logo"}/>
                                    </a>
                                </Card>
                                    </HoverGrow>
                                    <HoverGrow>
                                    <Card style={{margin: 20}}>
                                        <a href={'mailto:ethgru@iastate.edu'}>
                                                    <img width={200} height={200} src={EmailImage} alt={"Email Icon"}/>
                                        </a>
                                    </Card>
                                    </HoverGrow>
                                </div>
                            </CardContent>
                    </Card>
            </Container>
        </FadeIn>
    )
}