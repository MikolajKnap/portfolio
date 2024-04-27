import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 15,
        }
    },
}


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Mikolaj Knap</motion.h2>
                    <motion.h1 variants={textVariants}>IT student</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="#Work"><motion.button whileHover={{ backgroundColor: "rgb(12, 36, 59)" }} variants={textVariants}>See the latest works</motion.button></a>
                        <a href="#Contact"><motion.button whileHover={{ backgroundColor: "rgb(12, 36, 59)" }} variants={textVariants}>Contact Me</motion.button></a>
                    </motion.div>
                </motion.div>
                <div className="imageContainer">
                    <img src="heromk.png" alt=""></img>
                </div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Networks CCNA
            </motion.div>
        </div>
    )
}

export default Hero