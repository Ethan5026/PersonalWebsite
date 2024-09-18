import {ReactNode, useEffect, useState} from "react";
import {motion} from 'framer-motion'
type SlideInProps = {
    children: ReactNode,
    direction: 'left' | 'right' | 'up' | 'down',
    duration?: number,

}

export default function SlideIn(props: SlideInProps){
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // Trigger the animation after mounting
        const timer = setTimeout(() => {
            setInView(true);
        }, 50); // slight delay to allow the CSS transition to work

        return () => clearTimeout(timer);
    }, []);

    // Compute the starting position based on direction prop
    const getTranslateValue = () => {
        switch (props.direction) {
            case "right":
                return "translateX(100%)";
            case "up":
                return "translateY(100%)";
            case "down":
                return "translateY(-100%)";
            case "left":
            default:
                return "translateX(-100%)";
        }
    };

    return (
        <div
            className="sliding-container"
            style={{
                transform: inView ? "translate(0, 0)" : getTranslateValue(),
                position: 'fixed',

                transition: `transform ${props.duration ? props.duration : 800}ms ease-out`,
            }}
        >
            {props.children}
        </div>
    );
};