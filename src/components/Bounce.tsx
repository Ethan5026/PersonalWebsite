import {ReactNode} from "react";
import {motion} from 'framer-motion'
type BounceProps = {
    children: ReactNode,
}

export default function Bounce(props: BounceProps) {
    return <motion.div
        animate={{y: -30}}
        transition={{ease: "easeOut", duration: 1}}
    >
        {props.children}
    </motion.div>
}

