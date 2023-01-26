import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-[85vh]">
        {/* contact form */}
        <form
          name="contact"
          method="post"
          className="w-80 h-[26rem] p-4 rounded-md space-y-4 text-white flex flex-col justify-center"
          style={{ boxShadow: "1px 1px 4px 4px #1aba95" }}
        >
          {/* for netlify bot */}
          <input type="hidden" name="form-name" value="contact" />

          <h1 className="text-center font-semibold text-2xl">Contact Form</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              required
              className="border border-l-0 border-b-[#64ffda] border-t-0 border-r-0 py-1 text-sm"
              type="text"
              name="name"
              placeholder="Enter your name"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              required
              className="border border-l-0 border-b-[#64ffda] border-t-0 border-r-0 py-1 text-sm"
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              required
              className="border border-l-0 border-b-[#64ffda] border-t-0 border-r-0 py-1 text-sm h-28 resize-none"
              name="message"
              id="message"
              placeholder="Write your message here..."
            ></textarea>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
