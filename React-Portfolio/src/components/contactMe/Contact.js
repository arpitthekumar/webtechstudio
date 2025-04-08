import React, { useEffect, useState } from "react";
import Rectangular from "../common/buttons/Rectangular";
import { FaTelegramPlane } from "react-icons/fa";
import Header from "../common/header/Header";
import { contact } from "../../assets/svg";
import emailjs from "@emailjs/browser";
import RenderAlert from "../common/alert/RenderAlert";
import Tilt from "react-parallax-tilt";

function Contact() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const inputArray = [
    {
      placeholder: "Name",
      type: "text",
      required: true,
      name: "name",
      value: values.name,
    },
    {
      placeholder: "Email",
      type: "email",
      required: true,
      name: "email",
      value: values.email,
    },
    {
      placeholder: "Phone",
      type: "number",
      required: false,
      name: "phone",
      value: values.phone,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_3pciq1g", "template_tgwof4r", values, "VBBXPf8H8n1FEXT4H")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  const handleChange = (e) => {
    e.preventDefault();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div id="contact" className="lg:min-h-screen py-8">
      <Header title="Get In Touch" />

      <div className="px-12 lg:px-52 py-8 flex justify-center items-center lg:h-[35rem]">
        <div className="bg-black-gradient h-full w-full flex flex-col lg:flex-row gap-4 rounded-lg">
          <Tilt>
            <div className="basis-1/2 h-full w-full hidden lg:flex items-center justify-center">
              <img
                src={contact}
                alt="contact"
                className="h-4/5 w-4/5 rounded-lg"
              />
            </div>
          </Tilt>

          <form
            className="flex flex-col gap-4 justify-center flex-1 p-8"
            onSubmit={handleSubmit}
          >
            <span className="text-center font-semibold text-xl -mt-8 font-poppins text-gradient">
              HIRE ME
            </span>
            {status && <RenderAlert />}
            {inputArray.map((input, index) => {
              return (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  required={input.required}
                  name={input.name}
                  value={input.value}
                  onChange={handleChange}
                  className="input backdrop-blur-sm bg-primary/40 w-full rounded-xl "
                  key={index}
                />
              );
            })}

            <textarea
              className="textarea rounded-xl backdrop-blur-sm bg-primary/40"
              placeholder="Message"
              required
              name="message"
              value={values.message}
              onChange={handleChange}
              rows={4}
            ></textarea>
            <Rectangular
              title={"Submit"}
              icon={<FaTelegramPlane size={20} />}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
