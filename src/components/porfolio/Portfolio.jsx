import "./portfolio.scss"
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";

const Portfolio = () => {

  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetch("portfolioData.json")
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);


  const SinglePortfolio = ({ portfolioItem }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={portfolioItem.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2 >{portfolioItem.title}</h2>
              <p>{portfolioItem.desc}</p>
              <button>More in work</button>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar">

        </motion.div>
      </div>
      {portfolioData.map((portfolioItem, index) => (
        <SinglePortfolio portfolioItem={portfolioItem} key={portfolioItem.id}></SinglePortfolio>
      ))}
    </div>
  )
}

export default Portfolio