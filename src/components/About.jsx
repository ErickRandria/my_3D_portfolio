import React from "react";
// import Tilt from "react-tilt";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]'
      >
        {/* I graduated from the <a href="https://www.leeds.ac.uk/" className="text-orange-600">University of Leeds</a>, UK, 
        with a background in Data Science and Python programming. Passionate about technology and coding, I enjoy exploring 
        new possibilities in computing. This enthusiasm led me to work as an Assistant Professor
        in the Math and Physics Laboratory, where I assisted students with Python programming
        and provided IT support, including troubleshooting technical issues and managing hardware
        upgrades and system repairs. <br className='sm:block hidden' />
         */}
        
        I'm a skilled software developer with expertise in TypeScript and JavaScript, specializing in frameworks 
        like React, React Native and Node.js. A quick learner, I work closely with clients to build scalable, efficient, 
        and user-friendly solutions that bring ideas to life. I'm also passionate about contributing to open-source 
        projects and engaging with the developer community on social networks.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");