import React from "react";
import "./Loading.css";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        delay: 1,
      }}
      class="book"
    >
      <div class="inner">
        <div class="left"></div>
        <div class="middle"></div>
        <div class="right"></div>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </motion.div>
  );
}
