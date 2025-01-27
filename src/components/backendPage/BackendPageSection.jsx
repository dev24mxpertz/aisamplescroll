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

const PartnerSection = ({ number, heading, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers for hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="partner_section3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="partner_arrow3">
        <i className={`bi bi-arrow-up ${isHovered ? "rotated" : ""}`}></i>
      </span>
      {/* <h3>
        {isHovered
          ? "Your success is our priority, now and in the future."
          : "How We Work?"}
      </h3> */}
      <span style={{ opacity: isHovered ? 0 : 1 }}>{number}.</span>
      <p>{isHovered ? content : heading}</p>
    </div>
  );
};

const BackendPageSection = () => {
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
          <div className="w-full flex flex-col h-full justify-center font-poppins items-center">
            <h1 className="Backend_heading1">
              Turning data complexities into clarity.
            </h1>
            <p className="Backend_para1">
              Bring clarity to complex datasets and overcome data analysis
              bottlenecks with Altus AI Analytics.
            </p>
          </div>
        </Section>
        <Section>
          <div className="w-ful h-full py-6 flex justify-between items-center">
            <div className="flex w-[45%] flex-col p-2 items-start justify-center">
              <h2 className="BackendPage_heading2">AI ANALYTICS</h2>
              <p className="Backend_para2">
                Unlock seamless clarity in data analysis functions.
              </p>
            </div>
            <div className="flex w-[50%] items-center justify-center flex-col p-4">
              <p className="Backend_para3">
                With AI analytics solutions, Altus goes beyond conventional data
                analysis. By combining state-of-the-art machine learning
                algorithms with advanced data processing, we help tackle unique
                inefficiencies and discern insights that empower businesses to
                stay agile, responsive, and future-focused on their unique
                processes.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="p-2 w-full h-full">
            <h2 className="Backend_heading3">SUITE OF SOLUTIONS</h2>
            <p className="Backend_para4">
              AI solutions focused on the Data analytics functions
            </p>
            <p className="Backend_para5">
              These solutions are customized to address unique challenges and
              requirements, enhancing any business process and delivering
              transformative benefits.  Applicable and adaptable across diverse
              processes.
            </p>
            <div className="w-full py-2 flex gap-2 justify-between items-stretch">
              <PartnerSection
                number={1}
                heading="Expertise"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                number={2}
                heading="Seamless Integration"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                number={3}
                heading="PARTNERSHIP FOR LASTING IMPACT"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                number={4}
                heading="Bespoke Solutions"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full py-2 bg-red-700"></div>
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

export default BackendPageSection;
