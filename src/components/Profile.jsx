import {
  Link2,
  Download,
  Twitter,
  Linkedin,
  GraduationCap,
  MapPinHouse,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

<GraduationCap />;
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
                <div className="flex items-center gap-x-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPinHouse />
                    Sri Lanka
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap />
                    Sri Lanka
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                {/* <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                  <Link2 className="w-4 h-4" />
                  Get Template
                </button> */}

                {/* maybe later */}
                <a href="https://chamalsena.medium.com/" target="_blank">
                  <Button className="flex items-center gap-2 px-4 py-2 bg-white text-black  hover:bg-gray-100 transition-colors">
                    Medium Blog
                  </Button>
                </a>
              </div>
            </div>
            {/* 9CA3AF */}
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
                  target="_blank"
                  className="text-gray-400  transition-colors"
                >
                  <img src={twitter} className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/chamals3n4"
                  target="_blank"
                  className="text-gray-400  transition-colors"
                >
                  <img src={github} className="w-5.1 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/chamalsena"
                  target="_blank"
                  className="text-gray-400  transition-colors"
                >
                  <img src={linkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4 text-gray-400">
              <p>
                I love building things on the internet and helping others do the
                same. I also contribute to open-source projects and work on
                creating tools to improve the developer experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
