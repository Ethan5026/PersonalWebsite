import {ReactNode} from "react";
import {motion} from 'framer-motion'
type FadeInProps = {
    children?: ReactNode,
    delay?: number,
    duration?: number,
    id?: string
}

export default function FadeIn(props: FadeInProps) {
    return <motion.div
        id={props.id}
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{
            duration: props.duration ? props.duration : 0.8,
            delay: props.delay ? props.delay : 0.5,
            ease: [0, 0.71, 0.2, 1.01]
        }}>
        {props.children}
    </motion.div>
}