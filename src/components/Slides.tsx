import React, {ReactNode, useState} from "react";
import {
    Card,
    Container, IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type SlidesProps = {
    slides: ReactNode[]
    children?: ReactNode
}

export default function Slides(props: SlidesProps) {
    const [slide, setSlide] = useState(0)

    return (
        <>
            <Container>
                <Card>
                    {
                        slide !== 0 &&
                        <IconButton style={{position: 'fixed', top: '50%'}}
                                    onClick={() => setSlide(slide - 1)}><ArrowBackIosIcon
                            fontSize={'large'}/></IconButton>
                    }
                    {
                        slide !== props.slides.length - 1 &&
                        <div style={{display: 'flex', justifyContent: 'end'}}>
                            <IconButton style={{position: 'fixed', top: '50%'}}
                                        onClick={() => setSlide(slide + 1)}><ArrowForwardIosIcon
                                fontSize={'large'}/></IconButton>
                        </div>
                    }
                    <br/>
                    <div style={{marginLeft: 25, marginRight: 25}}>
                    {getSlide(slide)}
                    </div>
                    <br/>
                </Card>
            </Container>
        </>
    )
    function getSlide(slideNumber: number){
        return props.slides[slideNumber]
    }
}