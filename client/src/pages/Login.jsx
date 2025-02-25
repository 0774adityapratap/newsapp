import React from "react";
import { motion } from "motion/react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-150">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full rounded-2xl p-6 shadow-md bg-white"
      >
        <h1>welcome back</h1>
        <form action="">
          <div className="flex gap-2 items-center border-b border-gray-200  ">
            <input
              type="email"
              className="focus:outline-none w-full py-2 "
              placeholder="Enter Email..."
            />{" "}
          </div>
          <div className="flex gap-2 items-center border-b border-gray-200  ">
            <input
              type="password"
              className="focus:outline-none py-2  w-full "
              placeholder="Enter password..."
            />{" "}
          </div>
          <Button fullWidth>Login</Button>
          <p className="text-center text-gray-800">
            Don't have account?{" "}
            <Link to="/register" className="text-sky-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
