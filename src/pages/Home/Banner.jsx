import React from "react";
import team1 from "../../assets/team/smiling-colleagues-office-talking .jpg";
import team2 from "../../assets/team/that-s-how-success-looks.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* ✅ Images Section */}
        <div className="flex-1 space-y-6 flex flex-col items-center">
          <motion.img
            src={team1}
            alt="Smiling colleagues in office"
            animate={{ y: [80, 100, 80] }}
            transition={{ duration: 4,  repeat: Infinity, ease: "easeInOut" }}
            className="max-w-sm rounded-t-full shadow-2xl border-t-0 border-s-8 border-b-8 border-blue-800"
          />

          <motion.img
            src={team2}
            alt="Smiling colleagues in office"
            animate={{ x: [50, 100, 50] }}
            transition={{
              duration: 15,
              delay: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="max-w-sm rounded-t-[60px] shadow-2xl border-t-0 border-s-8 border-b-8 border-blue-800"
          />
        </div>

        {/* ✅ Text Section */}
        <div className="flex-1">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4 }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#d0563c", "#766a67"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="inline-block"
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>

          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
