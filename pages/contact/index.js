// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// EmailJS
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email_id: "",
    subject_id: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_ahq80et", // Your Service ID
        "template_h019rec", // Your Template ID
        {
          from_name: formData.from_name,
          email_id: formData.email_id,
          subject_id: formData.subject_id,
          message: formData.message,
        },
        "6WeNCPg6V0PelpS25" // Your Public Key
      )
      .then(
        (result) => {
          setResponseMessage("Email sent successfully!");
          setFormData({
            from_name: "",
            email_id: "",
            subject_id: "",
            message: "",
          });
        },
        (error) => {
          setResponseMessage("Failed to send email. Please try again.");
          console.error("EmailJS Error:", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div id="contact" className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* Text & Forms */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3 text-center mb-12"
          >
            Got a question or proposal, or just want to say hello? Go ahead.
          </motion.h2>
          {/* Form */}
          <motion.form
            id="contact-form"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* Input Group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                id="from_name"
                placeholder="Enter your name"
                className="input"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email_id"
                placeholder="Enter your email address"
                className="input"
                value={formData.email_id}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              id="subject_id"
              placeholder="Subject"
              className="input"
              value={formData.subject_id}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isSending}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Let&apos;s talk
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                </>
              )}
            </button>
          </motion.form>
          {responseMessage && (
            <p className="mt-4 text-center text-accent">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;