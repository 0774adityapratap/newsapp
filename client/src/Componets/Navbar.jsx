import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-blue-100  py-1.5 rounded-md text-2xl font-medium tracking-tight">
      <div className="flex justify-between items-center mx-5">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          logo
        </motion.h2>
        <ul className=" hidden md:flex  justify-center gap-3 ">
          {["Home", "About", "Contact"].map((item) => (
            <motion.li whileHover={{ scale: 1.1 }} key={item}>
              <Link to={`/${item.toLowerCase()}`}> {item}</Link>
            </motion.li>
          ))}
        </ul>
        <motion.div whileHover={{ scale: 1.1 }} className="flex gap-3  ">
          <Link className="hidden md:block" to={"/login"}>
            <Button variant="white">login</Button>
          </Link>
          <Link className="hidden md:block" to={"/register"}>
            <Button variant="white">register</Button>
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
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
