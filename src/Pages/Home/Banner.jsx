import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#FEFCFB]">
      <div className="relative w-full min-h-screen hero  max-w-[1400px] mx-auto">
        <div className="z-10 flex-col hero-content lg:flex-row-reverse">
          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "2",
              delay: "1",
            }}
            src="/bannerGroup.png"
            className="w-[300px] md:w-[400px] lg:w-[600px]"
          />
          <div className="">
            <motion.h1
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1",
              }}
              className="text-[38px] md:text-[64px] text-[#24445D] font-volkhov font-bold"
            >
              Embark on an unforgettable{" "}
              <span className="text-[#4475F2]">adventure</span> with us.
            </motion.h1>
            <motion.p
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: "2",
                delay: "1.2",
              }}
              className="py-6 max-w-[400px]"
            >
              Rely on our expert team for personalized advice, tips, and
              guidance to make your dream destination a remarkable travel
              experience.
            </motion.p>
            <Link to="/allPackages">
              <motion.button
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{
                  duration: "2",
                  delay: "1.4",
                }}
                className="btn border-2 border-[#4475F2] text-[18px] font-medium bg-transparent text-[#4475F2] hover:text-white hover:bg-[#4475F2] shadow-lg"
              >
                Discover Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
