import React from "react";
import {Card, CardContent, Container, Typography} from "@mui/material";
import profileImage from '../images/profile.png';
import FadeIn from "../components/FadeIn";



export default function About() {

    return (
        <>
            <Container>
                <div className={'flex-box'} style={{display: 'flex', justifyContent: 'center'}}>
                    <FadeIn>
                    <Card>
                        <CardContent>
                                <Typography variant={'h3'} style={{textAlign: 'center'}}>Ethan Gruening</Typography>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{maxWidth: '500px', alignItems: 'center'}} src={profileImage}
                                         alt={'Ethan Gruening'}/>
                                </div>
                                <Typography variant={'h4'} style={{textAlign: 'center'}}>Iowa State
                                    University</Typography>
                                <Typography variant={'h6'} style={{textAlign: 'center'}}>Software Engineering BS May
                                    2025 - Artificial Intelligence MS May 2026</Typography>
                            <br/>
                        </CardContent>
                    </Card>
                    </FadeIn>
                    <br/>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{width: '50%'}}>
                        <FadeIn>
                            <div style={{padding: 20}}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h6'} style={{textAlign: 'center'}}>
                                            Languages:
                                        </Typography>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            marginTop: 20
                                        }}>
                                            <Card style={{backgroundColor: 'darkred', flexBasis: '20%'}}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        C
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '20%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Java
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '20%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Python
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '20%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        JavaScript
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            marginTop: 20
                                        }}>
                                            <Card style={{backgroundColor: 'darkred', flexBasis: '20%'}}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        TypeScript
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '20%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Verilog
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '20%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Assembly
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-around',
                                            alignContent: 'space-evenly',
                                            marginTop: 20
                                        }}>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </FadeIn>
                    </div>
                    <div style={{width: '50%'}}>
                        <FadeIn>
                            <div style={{padding: 20}}>
                                <Card>
                                    <CardContent>
                                        <Typography variant={'h6'} style={{textAlign: 'center'}}>
                                            Skills:
                                        </Typography>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            marginTop: 20
                                        }}>
                                            <Card style={{backgroundColor: 'darkred', flexBasis: '30%'}}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        React
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '30%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        AWS
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '30%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Circuit Design
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'center',
                                            marginTop: 20
                                        }}>
                                            <Card style={{
                                                backgroundColor: 'darkred',
                                                marginLeft: '5%',
                                                flexBasis: '40%'
                                            }}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Embedded Systems
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card style={{marginLeft: '5%', backgroundColor: 'darkred', flexBasis: '40%'}}>
                                                <CardContent style={{display: 'flex', justifyContent: 'center'}}>
                                                    <Typography variant={'body1'}>
                                                        Network Defense
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-around',
                                            alignContent: 'space-evenly',
                                            marginTop: 20
                                        }}>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </>
    )
}