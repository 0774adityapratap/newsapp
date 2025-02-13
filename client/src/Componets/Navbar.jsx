import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
function Navbar() {
  
  return (
    <nav className="bg-blue-100 py-1.5 rounded-md text-2xl font-medium tracking-tight">
      <div className="flex justify-between items-center mx-2">
        <motion.h2 initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y:0}}
        transition={{duration: 0.5}} >logo</motion.h2>
        <ul className="flex justify-center gap-3 ">
          {["Home", "About", "Contact"].map((item) => (
            <motion.li whileHover={{scale:1.1}} key={item}>
              <Link to={`/${item.toLowerCase()}`}> {item}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
