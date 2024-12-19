import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.1 },
    },
};

const Hero = () => {
    return (
        <div className="hero" aria-label="Hero section">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Mikolaj Knap</motion.h2>
                    <motion.h1 variants={textVariants}>IT student</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="#Work" aria-label="See latest works">
                            <motion.button
                                whileHover={{ backgroundColor: "rgb(12, 36, 59)" }}
                            >
                                See the latest works
                            </motion.button>
                        </a>
                        <a href="#Contact" aria-label="Contact me">
                            <motion.button
                                whileHover={{ backgroundColor: "rgb(12, 36, 59)" }}
                            >
                                Contact Me
                            </motion.button>
                        </a>
                    </motion.div>
                </motion.div>
                <div className="imageContainer">
                    <img src="herototest3.png" alt="Mikolaj Knap portrait" />
                </div>
            </div>
            <div className="slidingTextContainer">
                <span className="slidingText">
                    Cybersecurity &nbsp; | &nbsp; Networks &nbsp; | &nbsp; Security+ | &nbsp; CCNA
                </span>
            </div>
        </div>
    );
};

export default Hero;
