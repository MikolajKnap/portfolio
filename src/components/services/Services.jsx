import { useRef, useEffect, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: -100,
    opacity: 0,
    transition: {
      delay: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const boxVariants = {
  initial: {
    x: 0,
    y: 300,
    opacity: 0,
    transition: {
      delay: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const [servicesData, setServicesData] = useState([]);

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    fetch("servicesData.json")
      .then((response) => response.json())
      .then((data) => setServicesData(data))
      .catch((error) => console.error("Error fetching services data:", error));
  }, []);

  return (
    <motion.div
      className="services"
      ref={ref}
    >
      <motion.div className="containerContent" animate={isInView ? "animate" : "initial"} variants={variants}
        initial="initial">
        <motion.div className="textContainer" variants={variants}>
          <p>Trying to be better than yesterday</p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "pink" }}>My</motion.b> Work
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "pink" }}>My</motion.b> Hobbies
            </h1>
          </div>
        </motion.div>
        <motion.div className="listContainer" variants={boxVariants}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="box"
              variants={boxVariants}
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default Services;
