import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      style={{ fontFamily: "PolySans-Neutral" }}
      className="bg-blue-100   py-1.5 rounded-md text-2xl  tracking-tight"
    >
      <div className="flex justify-between items-center mx-5">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          logo
        </motion.h2>
        <ul className=" hidden md:flex  justify-center gap-3 ">
          {['Home', 'Categories', 'Channels', 'About'].map((item) => (
            <motion.li whileHover={{ scale: 1.1 }} key={item}>
              <Link to={`/${item.toLowerCase()}`}> {item}</Link>
            </motion.li>
          ))}
        </ul>
        <div  className="flex gap-3  ">
          <Link className="hidden md:block" to={"/login"}>
            <Button variant="white">login</Button>
          </Link>
          <Link className="hidden md:block" to={"/register"}>
            <Button variant="filied">register</Button>
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <motion.div
              key={open ? "close" : "menu"}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X /> : <Menu />}
            </motion.div>
          </button>
        </div>
      </div>
      {open ? (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 150 }}
          transition={{ duration: 0.2 }}
          className=" md:hidden absolute right-3 bg-blue-100 py-2 px-5 text-start  rounded-sm"
        >
          {['Home', 'Categories', 'Channels', 'About'].map((i) => (
            <ul key={i}>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {" "}
                <Link to={`/${i}`}>{i}</Link>{" "}
              </motion.li>
            </ul>
          ))}
        </motion.div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
