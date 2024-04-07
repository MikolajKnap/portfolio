import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <div className="social">
          <a href="https://www.facebook.com/miki.knap" target="_blank"><img src="facebook.png"></img></a>
          <a href="https://www.instagram.com/miki_knap/" target="_blank"><img src="instagram.png"></img></a>
          <a href="https://www.linkedin.com/in/mikołaj-knap-7042a3270" target="_blank"><img src="linkedin.webp"></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar