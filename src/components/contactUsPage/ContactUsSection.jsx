import { Scroll } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import logoimage from "../../assets/Logo_image.png";
import menusymbol from "../../assets/menusymbol.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section className="w-full paddinghori16 flex flex-col items-center">
      <div className="w-full h-full flex flex-col justify-evenly max-w-[1300px] bgdiv ">
        {props.children}
      </div>
    </section>
  );
};


const ContactUsSection = () => {
  const [IsMenuVisible, setIsMenuVisible] = useState(false);
  const [isShowoverlay, setisShowoverlay] = useState(false);
  const navigate = useNavigate();
  const closemenuHandler = () => {
    setisShowoverlay(true);
    setTimeout(() => {
      setIsMenuVisible(!IsMenuVisible);
    }, 500);
  };

  const openmenuHandler = () => {
    setisShowoverlay(true);
    setTimeout(() => {
      setIsMenuVisible(!IsMenuVisible);
    }, 500);
  };

  useEffect(() => {
    if (isShowoverlay) {
      setTimeout(() => {
        setisShowoverlay(false);
      }, 1000);
    }
  }, [isShowoverlay]);

  const Navigate_Home = () => {
    closemenuHandler();
    navigate("/");
  };

  const Navigate_AboutUs = () => {
    closemenuHandler();
    navigate("/AboutUs");
  };

  const Navigate_ContactUs = () => {
    closemenuHandler();
    navigate("/ContactUs");
  };

  const Navigate_FrontendPage = () => {
    closemenuHandler();
    navigate("/FrontendPage");
  };

  const Navigate_BackendPage = () => {
    closemenuHandler();
    navigate("/BackendPage");
  };
  return (
    <Scroll html className="w-full">
      <div className="Main_Layout_Container relative">
        <Section>
          <section className="py-16 flex justify-between items-center">
            <motion.div
              className="flex"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={logoimage}
                alt="logoimage"
                className="w-16"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.h3
                className="text-2xl mx-2 font-semibold leading-10 decoration-from-font decoration-skip-ink logo-text-color"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                ALTUS
              </motion.h3>
            </motion.div>

            <motion.img
              onClick={openmenuHandler}
              src={menusymbol}
              alt="menusymbol"
              className="w-8 text-black-800 cursor-pointer"
              initial={{ opacity: 0, rotate: 45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </section>
          <div className="footer_maindiv">
            <motion.div
              className="flex flex-col justify-start max-h-max footersection"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={logoimage}
                alt="logo_image"
                className="footer_logo_image"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.p
                className="my-16 animate-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                3517 W. Gray St. Utica, Pennsylvania 57867
                <br />
              </motion.p>
              <motion.span
                className="text-2xl font-poppins font-bold firstfooterspan"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <i className="bi bi-c-circle"></i> 2025 Altus
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col max-h-max footersection"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Twitter/X
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Instagram
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Linkedin
              </motion.p>
              <motion.span
                className="my-6 animate-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                Reinvent your business
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                support@example.com
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col max-h-max footersection2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              <motion.h3
                className="my-4 animate-text"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                Get in Touch with us
              </motion.h3>
              <div className="px-5 w-full">
                <div className="footer_input_container">
                  <motion.input
                    className="footer_input font-poppins font-semibold"
                    placeholder="Your Email"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                  />
                  <motion.span
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>
        <div className={`menu_overlay ${isShowoverlay ? "open" : ""}`}></div>
        <div className={`menu_container ${IsMenuVisible ? "open" : ""}`}>
          <div className="w-full px-10 py-8 flex justify-between items-center">
            <img src={logoimage} alt="logoimage" className="w-16 " />
            <span
              onClick={closemenuHandler}
              className="text-2xl mx-2 font-bold font-poppins text-black cursor-pointer "
            >
              <i className="bi bi-x-lg"></i>
            </span>
          </div>
          <div className="w-full px-12 py-8 flex flex-col justify-evenly items-start">
            <button onClick={Navigate_Home} className="menu_link">
              HOME
            </button>
            <button onClick={Navigate_AboutUs} className="menu_link">
              About Us
            </button>
            <button onClick={Navigate_ContactUs} className="menu_link">
              Contact us
            </button>
            <button onClick={Navigate_FrontendPage} className="menu_link">
              AI ASSISTANT FOR CUSTOMER SUPPORT
            </button>
            <button onClick={Navigate_BackendPage} className="menu_link">
              AI Workforce for Backend Operations
            </button>
          </div>
        </div>
      </div>
    </Scroll>
  );
};

export default ContactUsSection;
