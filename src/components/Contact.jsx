import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" my-16 flex items-start gap-10 max-w-[1200px] m-auto lg:flex-row flex-col px-5 2xl:px-0">
        <form className=" w-full lg:w-1/2">
          <h2 className=" text-gray-500 font-semibold mb-3">CONTACT US</h2>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="name"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="phone"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="phone"
              id="phone"
              placeholder="Phone"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <label htmlFor="email"></label>
            <input
              className=" bg-transparent w-full outline-none px-2 py-3 text-sm focus:ring-1"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className=" bg-gray-100 mb-5">
            <textarea
              cols="20"
              rows="10"
              placeholder="How can we serve you?"
              className="bg-transparent w-full px-3 outline-none focus:ring-1"
            ></textarea>
          </div>
          <div>
            <button className=" bg-[#8D6956] w-full px-4 py-3 text-white globalShadow">
              Send
            </button>
            <span className=" text-[12px] text-[rgb(94,94,94)] flex items-center justify-center mt-8 ">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </span>
          </div>
        </form>

        <div className=" w-full lg:w-1/2">
          <h2 className=" text-[rgb(27,27,27)] my-5 font-[16px]">
            SPECIAL REQUESTS?
          </h2>
          <p className=" leading-[1.6] text-[16px] text-[rgb(94,94,94)] my-6">
            Do you have dietary concerns? Questions about an upcoming event?
            Drop us a line and we'll get back to you soon!
          </p>
          <h2 className=" text-[rgb(27,27,27)] my-5 font-[16px]">
            Supreme Home
          </h2>
          <p className=" leading-[1.6] text-[16px] text-[rgb(94,94,94)] my-6">
            9 St Margarets Street Bradford-On-Avon Wiltshire BA15 1DA
          </p>

          <div className="leading-[1.6] text-[rgb(94,94,94)] my-8 font-[16px]">
            <h2>01416111708</h2>
            <h2>Fast Food Restaurant</h2>
            <h2>Trading Since 2017</h2>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.354143997472!2d-2.2542218245441563!3d51.34139817177595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48717fc8d58d7135%3A0xbe573674645bcef2!2s9%20St%20Margaret&#39;s%20St%2C%20Bradford-on-Avon%20BA15%201LG%2C%20UK!5e0!3m2!1sen!2s!4v1706180382628!5m2!1sen!2s"
          width="600"
          height="450"
          className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
