import React from "react";
import FET from "../../../assets/images/home/FET.jpg";
import { Slide, Fade } from "react-awesome-reveal";
import { FaAngleDown } from "react-icons/fa";
import { BsChevronDown, BsFillTelephoneFill } from "react-icons/bs";

function Landing() {
  const bgRef = React.useRef(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Fade triggerOnce={true} direction="up" delay={200}>
        <img
          className={`w-screen  object-cover absolute top-0 -z-50`}
          src={FET}
          style={{
            height: "120vh",
          }}
          alt="Home Background"
          ref={bgRef}
        />
      </Fade>
      <div className={`md:flex-grow  flex-col justify-center font-body flex`}>
        <Slide>
          <div
            className={`md:w-1/3 md:min-w-96 p-10 md:text-black text-white md:bg-slate-100/90 rounded-r-md py-14 md:shadow-2xl transition-all text-left md:my-0 mt-40 `}
          >
            <Slide cascade>
              <h1
                className={`text-6xl font-bold my-2 md:text-left text-center`}
              >
                IEEE JMI
              </h1>
              <p className="md:text-left text-center text-xl font-extralight">
                Jamia Millia Islamia
              </p>
            </Slide>
          </div>
        </Slide>
      </div>

      <div
        className={`
          flex 
          flex-col
          md:flex-row
          flex-grow
          md:flex-grow-0
        `}
      >
        <div
          className={`mb-14 text-1xl font-bold  px-14 transition-all flex flex-col justify-center items-center md:items-start`}
        >
          <button
            className={`bg-white hover:bg-gray-900 hover:text-white py-4 px-10 hover:pl-6 rounded-full 
            flex 
            shadow-xl transition-all
              group
              z-10
              hover:ease-linear
              hover:duration-300
              hover:transition-all
            `}
            onClick={() => {
              const contactForm = document.getElementById("contact-form");
              contactForm.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <BsFillTelephoneFill
              className={`self-center -mr-0
              group-hover:mr-3
              transition-all
              w-0
              group-hover:min-w-max
              group-hover:ease-linear
              group-hover:duration-300
            `}
            />
            Contact Us
          </button>
        </div>
        <div
          className={`
        flex-grow
        md:flex-grow-0
        flex flex-col justify-end items-center
        pb-10
      `}
        >
          <BsChevronDown
            size={50}
            className={`text-white  animate-bounce md:absolute bottom-8 cursor-pointer 
            hover:text-gray-100
            transition-all
            `}
            onClick={() => {
              window.scrollBy(0, 700);
            }}
            style={{
              left: "50vw",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
