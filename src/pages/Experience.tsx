import React from "react";
import {Typography} from "@mui/material";
import PrincipalImage from '../images/principal.png'
import PrincipalTeamImage from '../images/principal_team.png'
import PluginPlayImage from '../images/pluginplay.png'
import NWChemEx from '../images/nwchemex.png'
import IowaStateImage from '../images/profile.png'
import ASCImage from '../images/asc.png'
import Slides from "../components/Slides";
import FadeIn from "../components/FadeIn";


export default function Experience() {
    const slides = [
        <>
            <FadeIn>
                <br/>
                <br/>
                <Typography variant={'h3'} style={{textAlign: 'center'}}>
            Principal Financial Group
        </Typography><br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Typography variant={'h6'} textAlign={'center'}>
                    <strong>Position: </strong>Software Engineering Intern
                </Typography>
                <Typography variant={'h6'} textAlign={'center'}>
                    <strong>Time of Employment: </strong>May 2024 - August 2024
                </Typography>
            </div>
            <br/>
            <br/>
            <div style={{display: 'flex'}}>
                <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    As a software engineer intern within the Disability Intakes development team at Principal,
                    my responsibilities were to identify, design, develop, new solutions for their intakes of insurance
                    documentation.
                    <br/>
                    <br/>
                    The most significant project I introduced to Principal, was the automation of an accessible search
                    and calendar entry for employer's to submit the hours of their employee's on paid leave. Working with many
                    of the third party service's APIs, reliable and immediate updates to claims allowed for customers to have
                    their payments and cases updated automatically. The paid leave form is projected to reduce data processing
                    and evaluation costs by $100,000 annually.
                    <br/>
                    <br/>
                    An additional project I completed was the integration of an adaptive saving technique for all
                    disabilities insurance claim forms. The main components of the project included encryption techniques
                    to ensure customer data security, accessibility for the user, and adaptability to be inserted in all forms
                    in previous and future development.
                </Typography>
                <img height={300} src={PrincipalImage} alt={"Principal Logo"}
                     style={{marginLeft: 20, marginRight: 20}}/>
            </div>
            <br/>
            <div style={{display: 'flex'}}>
                    <img height={300} src={PrincipalTeamImage} alt={"Code Jam Team"}
                     style={{marginLeft: 20, marginRight: 20}}/>
                <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    In addition to my work with the Disability Intakes team, all Principal technology interns were invited
                    to compete in the Principal Code Jam. The Code Jam is an annual event where groups of interns develop a
                    potential new solution or addition to Principal's website given a set of prompts. My team placed as finalists
                    for Code Jam 2024 with our proposal of a new documentation search system, linking together 5 sources for a conglomerate
                    of resources for developers.
                    <br/>
                    <br/>
                    Our highlight feature included integrated artificial intelligence, trained on documentation, to summarize
                    and cite the most relevant sources as an alternative search method. Principal decided to continue with our project
                    proposal and proceed with development.
                </Typography>
            </div>
            </FadeIn>
        </>,
        <>
            <FadeIn>
            <br/>
            <br/>
            <Typography variant={'h3'} style={{textAlign: 'center'}}>
            NWChemEx
        </Typography><br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                <div style={{display: 'inline', alignContent: 'center'}}>
                    <Typography variant={'h6'} textAlign={'center'}>
                        <strong>Position: </strong>Undergraduate Research Assistant
                    </Typography>
                    <br/>
                    <Typography variant={'h6'} textAlign={'center'}>
                        <strong>Time of Employment: </strong>May 2023 - May 2024
                    </Typography>
                </div>
                <img height={130} src={NWChemEx} alt={"NWChemEx Logo"}
                     style={{marginLeft: 20, marginRight: 20}}/>
            </div>
            <br/>
            <br/>
            <div style={{display: 'flex', justifyContent: 'right'}}>
            </div>
            <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    NWChemEx is a research group within Ames Laboratories developing simulation software for
                chemical and physical interactions between specific particles. Using CMake, NWChemEx developed plugins to
                hold modules that interact with each other given specific input and output types. Originally, the system required
                the manual connection of these modules within Python or C++ using their PluginPlay software as there was no
                frontend interface for development, testing, or customer use. My role within the
                research team was to develop an IDE for the PluginPlay software to build and simulate module tree for developers
                and users. This project was previously attempted by graduate students, however, no prototype made its way to production.
                </Typography>
            <br/>
            <div style={{display: 'flex'}}>
                <img height={150} src={PluginPlayImage} alt={"PluginPlay Logo"}
                     style={{marginLeft: 20, marginRight: 20}}/>
                <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    After learning the system's architecture, I integrated PluginPlay's API into a GUI that can
                    import, clone, link, and display complex and dynamic graphical tree structures of modules. A significant advantage of the IDE
                    is that no knowledge Python or C++ is required by the user, providing an introductory solution to use the
                    simulation tools for new developers and users that have no previous code experience. Building with CMake,
                    CTests additionally validate the display of the module tree, as well as the accuracy of the output of the simulation.
                    This IDE is still used within the NWChemEx group as a part of the opensource production code to be included in
                    publishing the software.
                </Typography>
            </div>
            </FadeIn>
        </>,
        <>
            <FadeIn>
                <br/>
                <br/>
                <Typography variant={'h3'} style={{textAlign: 'center'}}>
            Academic Success Center
        </Typography><br/><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Typography variant={'h6'} textAlign={'center'}>
                    <strong>Position: </strong>Academic Undergraduate Tutor
                </Typography>
                <Typography variant={'h6'} textAlign={'center'}>
                    <strong>Time of Employment: </strong>December 2023 - September 2024
                </Typography>
            </div>
            <br/>
            <br/>
            <div style={{display: 'flex'}}>
                <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    After tutoring peers and underclassmen, multiple of my professors recommended me to the
                    Academic Success Center, the learning assistance hub at Iowa State University. I began working as a tutor for the
                    Academic Success Center, focusing on circuit design courses (CPRE 281, CPRE 288, CPRE 381), Intro to Algorithmic
                    Proofs (COMS 230), and Chemistry For Engineers (CHEM 167). Iowa State's academic tutoring requires tutors to go through
                    a training on cooperative and interactive learning techniques, lesson planning, and professionalism. Trainings are
                    monthly and introduce new academic practices and guidelines.
                </Typography>
                    <img height={250} src={ASCImage} alt={"Academic Success Center Logo"}
                         style={{marginLeft: 20, marginRight: 20}}/>
            </div>
            <br/>
            <div style={{display: 'flex'}}>
                    <img height={250} src={IowaStateImage} alt={"Iowa State Logo"}
                         style={{marginLeft: 20, marginRight: 20}}/>
                <Typography variant={'body1'} style={{marginLeft: 20, marginRight: 20}}>
                    Tutors are expected to report their lesson plans in advance. Lesson plans require advanced learning strategies to
                    help reintroduce and enforce content from the lecture, homework, and past exams. Tutors must also have a physical
                    meeting with the head professors of each course they choose to tutor to clarify the academic goals of the class.
                    Tutoring groups meet once a week for an hour and half and are comprised of 3-6 students.
                </Typography>
            </div>
            </FadeIn>
        </>,
    ]
    return (
        <>
            <Slides slides={slides}>

            </Slides>
        </>
    )
}