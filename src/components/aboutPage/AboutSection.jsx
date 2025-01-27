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

const PartnerSection = ({ heading, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="partner_section2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`partner_arrow2 ${isHovered ? "rotated" : ""}`}>
        <i className={`bi bi-arrow-up ${isHovered ? "rotated" : ""}`}></i>
      </span>

      <h3 className={isHovered ? "hovered" : ""}>
        {isHovered
          ? "Your success is our priority, now and in the future."
          : "How We Work?"}
      </h3>

      <p className={isHovered ? "hovered" : ""}>
        {isHovered ? content : heading}
      </p>
    </div>
  );
};

const AboutSection = () => {
  const [IsMenuVisible, setIsMenuVisible] = useState(false);
  const [isShowoverlay, setisShowoverlay] = useState(false);
  const [windowidth, setwindowwidth] = useState("");
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
    setwindowwidth(window.innerWidth);
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
          {windowidth}
          <section className="py-16 flex justify-between items-center">
            <div className="flex">
              <img src={logoimage} alt="logoimage" className="w-16" />
              <h3 className="text-2xl mx-2 font-semibold leading-10 decoration-from-font decoration-skip-ink logo-text-color">
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

          <div className="w-full h-full flex flex-col items-start justify-center">
            <h1 className="About_Section_heading1">
              Transforming Value Chains, Solving Challenges
            </h1>

            <h2 className="About_Section_heading2">
              With Bespoke AI Solutions
            </h2>

            <div className="About_Sectionflex1">
              <p className="About_Section_para">
                We collaborate with businesses as strategic partners, offering
                insightful consulting to uncover obstacles, seize opportunities,
                and craft bespoke AI solutions. Our approach doesn’t just solve
                challenges or mitigate risks—it reinvents your value chain,
                empowering your team to focus on innovation and high-impact
                work.
              </p>

              <p className="About_Section_para">
                Specializing in AI consulting, we design tailored solutions to
                address unique business needs, streamline both front-end and
                back-end operations, and eliminate inefficiencies. Helping you
                unlock the potential for sustainable growth and unparalleled
                efficiency.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <h2 className="About_Section_heading3">Who are we?</h2>

            <div className="About_Sectionflex2">
              <p className="About_Section_para">
                We are a UK-based GenAI company of passionate professionals
                dedicated to solving business challenges with AI reinvention.
                With a client-first approach and a relentless focus on results,
                we deliver strategic consulting and custom AI solutions to help
                businesses achieve operational excellence.
              </p>

              <p className="About_Section_para">
                We believe in AI's transformative power to overcome challenges,
                drive growth, empower teams, and enhance productivity, enabling
                businesses to achieve their goals and unlock new possibilities.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="w-full h-full flex flex-col items-start justify-center">
            <h2 className="About_Section_heading3">Who are we?</h2>

            <div className="About_Sectionflex2">
              <p className="About_Section_para">
                We are a UK-based GenAI company of passionate professionals
                dedicated to solving business challenges with AI reinvention.
                With a client-first approach and a relentless focus on results,
                we deliver strategic consulting and custom AI solutions to help
                businesses achieve operational excellence.
              </p>

              <p className="About_Section_para">
                We believe in AI's transformative power to overcome challenges,
                drive growth, empower teams, and enhance productivity, enabling
                businesses to achieve their goals and unlock new possibilities.
              </p>
            </div>
          </div>

          <div className="About_Sectionflex3">
            <div className="About_Sectionflexsub3">
              <h2 className="About_Section_heading4">Vision</h2>

              <p className="About_Section_para2">
                Our vision is to create a future where technology and humanity
                coexist symbiotically.
              </p>
            </div>

            <div className="About_Sectionflexsub3_2">
              <p className="About_Section_para3">
                We want to create a world where technology and humanity thrive
                together, unlocking infinite possibilities for innovation,
                growth, and sustainability. We strive to build work environments
                that inspire creativity, amplify human potential, and pave the
                way for a brighter, AI-driven future. We envision a world where
                businesses thrive by fostering work environments that empower
                people and enable them to achieve their fullest potential,
                amplified by the transformative power of artificial
                intelligence. We aspire to bridge the gap between human
                creativity and AI’s limitless capacity to innovate, ensuring a
                sustainable and prosperous future for Businesses, Employees, and
                Customers.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="About_Sectionflex3">
            <div className="About_Sectionflexsub3">
              <h2 className="About_Section_heading4">Mission</h2>
              <p className="About_Section_para2">
                Our mission is to transform businesses through tailored AI
                solutions that don’t just solve problems but create new
                opportunities.
              </p>
            </div>
            <div className="About_Sectionflexsub3_2">
              <p className="About_Section_para3">
                At our core, we empower businesses to embrace the transformative
                potential of artificial intelligence. Through custom-tailored
                solutions, we address unique challenges, streamline
                inefficiencies, and elevate workforce capabilities. Guided by a
                commitment to innovation and sustainability, we aim to reimagine
                industries, deliver exceptional value, and shape a future where
                AI works for humanity. We aim to address inefficiencies, elevate
                productivity, and empower workforces to focus on high-value
                contributions while leaving repetitive tasks to AI. By
                integrating ethical AI practices, we are committed to building
                scalable, secure, and sustainable solutions that fuel
                innovation, enhance employee satisfaction, and ensure long-term
                growth.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <div className="w-full h-full p-2 flex flex-col justify-evenly">
            <h2 className="About_Section_heading5">HOW WE WORK?</h2>
            <p className="About_Section_para4">
              We start with an in-depth consultation to understand your business
              objectives, challenges, and current processes.
            </p>
            <div className="About_Sectionflex4">
              <PartnerSection
                heading="ONGOING SUPPORT AND OPTIMISATION"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                heading="CONSULTATION AND ASSESSMENT"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                heading="IMPLEMENTATION AND TRAINING"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
              <PartnerSection
                heading="SOLUTION DESIGN AND DEVELOPMENT"
                content="We provide regular updates, ongoing support, and continuous optimisation to ensure your unique challenges are always addressed, and our AI solutions continue delivering value as your business grows."
              />
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

export default AboutSection;
