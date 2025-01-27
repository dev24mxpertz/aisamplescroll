import { Scroll } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import logoimage from "../../assets/Logo_image.png";
import menusymbol from "../../assets/menusymbol.png";
import { useNavigate } from "react-router-dom";

const Section = (props) => {
  return (
    <section className="w-full h-screen px-16 flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-evenly max-w-[1300px]">
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
            <div className="flex">
              <img src={logoimage} alt="logoimage" className="w-16" />
              <h3 className="text-2xl mx-2 font-semibold leading-10 decoration-from-font decoration-skip-ink logo-text-color ">
                ALTUS
              </h3>
            </div>
            <img
              onClick={openmenuHandler}
              src={menusymbol}
              alt="menusymbol"
              className="w-8 text-black-800 cursor-pointer"
            />
          </section>
          <div className="w-full flex h-full justify-between items-center">
            <div className="flex flex-col justify-start w-[25%] max-h-max footersection">
              <img
                src={logoimage}
                alt="logo_image"
                className="footer_logo_image "
              />
              <p className="my-16">
                3517 W. Gray St. Utica, Pennsylvania 57867
                <br />
              </p>
              <span className="text-2xl font-poppins font-bold firstfooterspan">
                <i class="bi bi-c-circle"></i> 2025 Altus
              </span>
            </div>
            <div className="flex flex-col w-[25%] max-h-max footersection">
              <p>Twitter/X</p>
              <p>Instagram</p>
              <p>Linkedin</p>
              <span className="my-6">Reinvent your business </span>
              <p>support@example.com</p>
            </div>
            <div className="flex flex-col w-[35%] max-h-max  footersection">
              <h3 className="my-4">Get in Touch with us </h3>
              <div className="px-3 ml-2 w-full">
                <div className="footer_input_container">
                  <input
                    className="footer_input font-poppins font-semibold"
                    placeholder="Your Email"
                  />
                  <span>
                    <i class="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </div>
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
