import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "S3n4",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-semibold">Let's talk</h2>

        <div className="grid md:grid-cols-[300px,1fr] gap-12">
          <div className="space-y-8">
            <div>
              <div className="text-gray-400 mb-1">Time for me:</div>
              <div>{currentTime}</div>
            </div>

            <div>
              <div className="text-gray-400 mb-1">Email:</div>
              <div>chamals004@gmail.com</div>
            </div>

            <div>
              <div className="text-gray-400 mb-1">Phone:</div>
              <div>+94 71 7110 160</div>
            </div>

            <div>
              <div className="text-gray-400 mb-1">Socials:</div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://x.com/chamalsena"
                  target="blank"
                  className="hover:text-gray-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com/chamalsena"
                  className="hover:text-gray-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/in/chamalsena"
                  className="hover:text-gray-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-white/10 focus:border-white/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-white/10 focus:border-white/20 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg border border-white/10 focus:border-white/20 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Send Message
            </Button>
          </form>
        </div>

        <div className="flex justify-between items-center pt-8 text-sm text-gray-400 border-t border-white/10">
          <div>
            © 2023 Chamal Senarathna. Inspired by{" "}
            <a
              href="https://framer.com"
              className="hover:text-white transition-colors"
            >
              Framer
            </a>{" "}
          </div>
          <div>
            View the source code on{" "}
            <a
              href="https://github.com/chamals3n4/chamalsena.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
