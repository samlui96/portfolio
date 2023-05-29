import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ path }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9r077k",
        "template_ka6ugic",
        form.current,
        "H5wCnHb3OaKnlB0gA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Messages are successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send messages.");
        }
      );
  };

  return (
    <div id={path} className="w-screen p-4 h-3/4">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together
      </h1>
      <form ref={form} className="max-w-[600px] m-auto" onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            name="from_name"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            name="from_email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          name="from_subject"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          name="message"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="border shadow-lg p-3 w-full mt-2"
        >
          Submit
        </button>
        {/* <input type="submit" value="Send" /> */}
      </form>
    </div>
  );
};

export default Contact;
