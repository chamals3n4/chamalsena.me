import { Link2, Download, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";

export default function Profile() {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-20">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-start gap-8"
        >
          <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chamalsena.jpg-1SBeQq8sAhgQZjOjOkdbr0LgHyVn9e.jpeg"
              alt="Chamal Senarathna"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-semibold mb-1">
                  Chamal Senarathna
                </h1>
                <h2 className="text-gray-400 text-lg mb-1">
                  Self Taught Programmer
                </h2>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Sri Lanka
                </div>
              </div>

              <div className="flex gap-3">
                {/* <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Link2 className="w-4 h-4" />
                  Get Template
                </button> */}

                {/* maybe later */}
                <Button className="flex items-center gap-2 px-4 py-2 bg-white text-black  hover:bg-gray-100 transition-colors">
                  Medium Blog
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">
                  Available for work
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="mailto: chamals004@gmail.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  chamals004@gmail.com
                </a>
                <a
                  href="https://x.com/chamalsena"
                  className="text-gray-400  transition-colors"
                >
                  <img src={twitter} className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/chamalsena"
                  className="text-gray-400  transition-colors"
                >
                  <img src={linkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4 text-gray-400">
              <p>
                I love building things on the internet and helping others do the
                same. I have a goal to develop something that enhances the
                developer experience.
              </p>
              <p>Currently, I’m a first-year undergraduate at SLIIT. </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
