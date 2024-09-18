import {ReactNode} from "react";
import {motion} from 'framer-motion'
type HoverGrowProps = {
    children?: ReactNode,
    scaleHover?: number,
    scaleTap?: number
}

export default function HoverGrow(props: HoverGrowProps) {
    return <motion.div
        whileHover={{ scale: props.scaleHover ? props.scaleHover : 1.1 }}
        whileTap={{ scale: props.scaleTap ? props.scaleTap : 0.9 }}
        >
        {props.children}
    </motion.div>
}