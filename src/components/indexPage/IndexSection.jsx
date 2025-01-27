import { Scroll } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import logoimage from "../../assets/Logo_image.png";
import menusymbol from "../../assets/menusymbol.png";
import secondsectionimage1 from "../../assets/secondsectionimage1.png";
import secondsectionimage2 from "../../assets/secondsectionimage2.png";
import fourthIcon1 from "../../assets/fourthIcon1.png";
import fourthIcon2 from "../../assets/fourthIcon2.png";
import fourthIcon3 from "../../assets/fourthIcon3.png";
import AI_image from "../../assets/AI_image.png";
import { Link, useNavigate } from "react-router-dom";
import goalicon1 from "../../assets/goalicon1.png";
import goalicon2 from "../../assets/goalicon2.png";
import goalicon3 from "../../assets/goalicon3.png";
import goalicon4 from "../../assets/goalicon4.png";
import goalicon5 from "../../assets/goalicon5.png";

const Section = (props) => {
  return (
    <section className="w-full h-screen px-16 flex flex-col justify-start items-center">
      <div className="w-full h-full flex flex-col justify-evenly max-w-[1300px]">
        {props.children}
      </div>
    </section>
  );
};

const BlackSection = (props) => {
  return (
    <section className="w-full h-screen px-16 flex bg-black flex-col justify-start items-center">
      <div className="w-full h-full flex justify-end items-center   max-w-[1300px]">
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
      className="partner_section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="partner_arrow">
        <i className={`bi bi-arrow-up ${isHovered ? "rotated" : ""}`}></i>
      </span>
      <h3>
        {isHovered
          ? "Your success is our priority, now and in the future."
          : "Why Choose Us"}
      </h3>
      <span style={{ opacity: isHovered ? 0 : 1 }}>{number}.</span>
      <p>{isHovered ? content : heading}</p>
    </div>
  );
};

const IndexSection = () => {
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
          <>
            <section className="py-8 flex justify-between items-center">
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
            <h1 className="frontheading">Reinvent</h1>
            <h2 className="frontsubheading">Value Chain</h2>
            <div className="w-full mt-10 flex items-end justify-end">
              <p className="frontsubpara">
                Reinvent the value chain, solve unique problems, and boost
                productivity, efficiency, and profitability with bespoke AI
                solutions.
              </p>
            </div>
          </>
        </Section>
        <Section>
          <div className="flex flex-col items-center">
            <div className="w-full secondboxbg rounded-md flex flex-col justify-center items-center p-4">
              <h3 className="secondsectionheading">REINVENTION</h3>
              <h4 className="secondsectionsubheading">STRATEGY FOR SUCCESS</h4>
              <p className="secondsectionsubpara">
                The rate of change affecting businesses has risen over 183% in
                the last 4 years. To counter this, 83% of organisations have
                accelerated the execution of reinvention with GenAI.
              </p>
            </div>
            <p className="secondsectionpara">
              in less than half the time against competitors
            </p>
            <div className="p-2 w-full flex justify-center items-stretch ">
              <div className="px-4 py-4 flex flex-col mx-2 items-center justify-evenly subboxshadow rounded-md w-1/4">
                <img
                  src={secondsectionimage1}
                  alt="secondsectionimage1"
                  className="w-12"
                />
                <h3 className="secondsectionspannumber">2.5x</h3>
                <p className="secondsectionlastpara">
                  Greater improvements in productivity
                </p>
              </div>
              <div className="px-4 py-4 flex flex-col mx-2 items-center justify-evenly subboxshadow bg-white rounded-md w-1/4">
                <img
                  src={secondsectionimage2}
                  alt="secondsectionimage2"
                  className="w-12"
                />
                <h3 className="secondsectionspannumber">2.6x</h3>
                <p className="secondsectionlastpara">
                  Higher average revenue growth.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full py-16">
            <h1 className="thirdSectionheading">GEN AI IN ACTION</h1>
            <div className="w-full  p-2 flex items-center gap-x-1.5 justify-between">
              <div className="w-1/3 px-4 py-4 bg-orange-700 fourthbox relative">
                <img src={fourthIcon1} alt="fourthIcon1" />
                <h3 className="fourthboxheading">3M</h3>
                <p className="fourthboxsubheading">Hours Saved</p>
                <span className="fourthbox_arrow">
                  <i className="bi bi-chevron-right"></i>
                </span>
                <div className="fourth_subcircle"></div>
                <p className="new-paragraph">
                  An agency saved 3 million operational hours using GenAI.
                </p>
              </div>
              <div className="w-1/3 px-4 py-4 bg-orange-700 fourthbox">
                <img src={fourthIcon2} alt="fourthIcon2" className="w-16" />
                <h3 className="fourthboxheading">16M</h3>
                <p className="fourthboxsubheading">CUSTOMER OFFERINGS</p>
                <span className="fourthbox_arrow">
                  <i className="bi bi-chevron-right"></i>
                </span>
                <div className="fourth_subcircle"></div>
                <p className="new-paragraph">
                  A company delivered 16 million personalized offerings to their
                  customers within 3 months. 
                </p>
              </div>
              <div className="w-1/3 px-4 py-4 bg-orange-700 fourthbox">
                <img src={fourthIcon3} alt="fourthIcon3" className="w-16" />
                <h3 className="fourthboxheading">+10%</h3>
                <p className="fourthboxsubheading">Hours Saved</p>
                <span className="fourthbox_arrow">
                  <i className="bi bi-chevron-right"></i>
                </span>
                <div className="fourth_subcircle"></div>
                <p className="new-paragraph">
                  An insurer increased the potential revenue by 10% using AI in
                  only one single function of the whole process. 
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full py-8 ">
            <h1 className="fouthSectionheading">Our suite of Solutions</h1>
            <div className="w-full p-2 flex justify-between gap-3 items-stretch">
              <div className="w-[48%] oursite_box">
                <h3>AI ASSISTANT FOR CUSTOMER SERVICE</h3>
                <p>
                  Eliminate unique customer frustrations and operational issues
                  to deliver a seamless experience that keeps them coming back,
                  all while driving greater operational efficiency and
                  productivity with the custom AI assistant for customer
                  service.
                </p>
                <button className="oursite_box_link">Learn More</button>
              </div>
              <div className="w-[48%] oursite_box">
                <h3>AI WORKFORCE FOR BUSINESS OPERATIONS</h3>
                <p>
                  Imagine a workplace where challenges are met head-on,
                  departments thrive, and employees are empowered to focus on
                  creativity and innovation—all driven by custom AI solutions
                  applicable throughout the value chain.
                </p>
                <button className="oursite_box_link">Learn More</button>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full p-2 h-full ">
            <h3 className="goalachieve_heading">
              Achieve Your Goals <br /> with Altus Solutions
            </h3>
            <div className="w-full flex justify-between gap-3 items-stretch">
              <div className="w-[85%] flex">
                <div className="goalwrapper w-full goalwrapper_padding flex flex-col justify-between">
                  <h3>BOOST YOUR SUCCESS</h3>
                  <p>
                    An agency saved 3 million operational hours using GenAI.
                  </p>
                  <div className="goalouter_circle">
                    <div className="goalinner_circle">
                      <img src={goalicon1} alt="goalicon1" />
                      <span>
                        An agency saved 3 million operational hours using
                        GenAI. 
                      </span>
                      <p>
                        Our intelligent solutions target unique challenges,
                        enhance customer experiences, and fuel innovation,
                        setting you apart in a competitive landscape.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="goalwrapper flex flex-col justify-center">
                  <h3>ADAPTIVE SCALABILITY</h3>
                  <p>AI Tools that grow with you.</p>
                  <div className="goalouter_circle">
                    <div className="goalinner_circle">
                      <img src={goalicon2} alt="goalicon2" />
                      <span>An agency saved 3 million</span>
                      <p>
                        Our intelligent solutions target unique challenges,
                        enhance customer experiences,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <div className="goalwrapper flex flex-col justify-center">
                <h3>
                  EMPOWERED <br />
                  HUMAN CAPITAL
                </h3>
                <p>An agency saved 3 million operational hours using GenAI. </p>
                <div className="goalouter_circle">
                  <div className="goalinner_circle">
                    <img src={goalicon3} alt="goalicon3" />
                    <span>An agency saved 3 million</span>
                    <p>
                      Our intelligent solutions target unique challenges,
                      enhance customer experiences,
                    </p>
                  </div>
                </div>
              </div>
              <div className="goalwrapper flex flex-col justify-center">
                <h3>
                  MAX RESULTS,
                  <br />
                  LOW OVERHEAD
                </h3>
                <p>Achieve more without heavy costs</p>
                <div className="goalouter_circle">
                  <div className="goalinner_circle">
                    <img src={goalicon4} alt="goalicon4" />
                    <span>An agency saved 3 million</span>
                    <p>
                      Our intelligent solutions target unique challenges,
                      enhance customer experiences,
                    </p>
                  </div>
                </div>
              </div>
              <div className="goalwrapper flex flex-col justify-center">
                <h3>BE A DIFFERENTITOR</h3>
                <p>Stand out from the crowd.</p>
                <div className="goalouter_circle">
                  <div className="goalinner_circle">
                    <img src={goalicon5} alt="goalicon5" />
                    <span>An agency saved 3 million</span>
                    <p>
                      Our intelligent solutions target unique challenges,
                      enhance customer experiences,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-full h-full p-2 flex flex-col items-start">
            <h3 className="partner_heading">
              Partner with Us to <br /> Realize Your Vision
            </h3>
            <div className="w-full p-2 flex gap-2 justify-between items-stretch">
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
        <BlackSection>
          <div className="w-[65%] h-full flex flex-col items-start justify-evenly  ">
            <h3 className="logo_subheading">
              Your bold idea, our smart solutions
            </h3>
            <h1 className="logo_heading">Reinvent Your business</h1>
            <button className="logo_button">continue TO scroll</button>
          </div>
        </BlackSection>
        <Section>
          <div className="w-full flex px-2 h-full justify-between items-center">
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
              <div className="px-5 w-full">
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

export default IndexSection;
