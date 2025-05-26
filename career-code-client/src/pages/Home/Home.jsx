import React from "react";
import { motion } from "motion/react";
import teme1 from '../../assets/team/teme1.jpg'
import teme2 from '../../assets/team/teme2.jpg'

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1 ">
         <motion.img
          src={teme1}
          animate={{y:[100, 150,100]}}
          transition={{duration:5, repeat: Infinity}}
          className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl  rounded-br-4xl shadow-2xl"
        />
         <motion.img
          src={teme2}
          animate={{x:[100, 150,100]}}
          transition={{duration:10,delay:5, repeat: Infinity}}
          className="max-w-sm border-blue-600 border-s-8 border-b-8 rounded-t-4xl  rounded-br-4xl shadow-2xl"
        />
       </div>
     <div className="flex-1 ">
          {/* <motion.h1
            animate={{
              transition: { duration: 4 },
              // rotate: 180,
              x:200,
              y:200,
            }}
            className="text-5xl font-bold"
          >
            Remote Job For you!{" "}
          </motion.h1> */}
          <motion.h1
            initial={{
              scale: 0,
            }}
            animate={{
              transition: { duration: 4 },
              scale: 1,
            }}
            className="text-5xl font-bold"
          >
            Latest <motion.span 
              animate={
                {color:['#5ba115','#1596a1','#1535a1'],
                  transition:{duration:4, repeat: Infinity}

                }
              }
            >Jobs</motion.span> For you!{" "}
          </motion.h1>
          <p className="py-6">
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

export default Home;
