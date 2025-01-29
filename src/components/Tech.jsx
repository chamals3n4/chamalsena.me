import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import supabaselogo from "../assets/supabaselogo.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import express from "../assets/express.png";
import shadcnui from "../assets/shadcnui.png";
import choreowhite from "../assets/choreo-white.png";
import vercel from "../assets/vercel.png";
import mongodbgreen from "../assets/mongodbgreen.png";
import expressjs from "../assets/expressjs.png";
import qt from "../assets/qt.png";

const technologies = [
  {
    icon: supabaselogo,
    title: "Supabase",
    description: "Backend as a Service",
    link: "#",
  },
  {
    icon: node,
    title: "NodeJS",
    description: "Web Services",
    link: "#",
  },
  {
    icon: react,
    title: "ReactJS",
    description: "Javascript Library",
    link: "#",
  },
  {
    icon: shadcnui,
    title: "Shadcn/UI",
    description: "Component Library",
    link: "#",
  },
  {
    icon: python,
    title: "Python",
    description: "Collaboration",
    link: "#",
  },
  {
    icon: qt,
    title: "Qt",
    description: "Communication",
    link: "#",
  },
  {
    icon: mongodbgreen,
    title: "MongoDB",
    description: "Communication",
    link: "#",
  },
  {
    icon: vercel,
    title: "Vercel",
    description: "Communication",
    link: "#",
  },
  {
    icon: choreowhite,
    title: "Choreo",
    description: "Communication",
    link: "#",
  },
];

export function Tech() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-3">Primary Tech Stack</h2>
        <p className="text-gray-400 mb-3 max-w-2xl">
          Here are the main tools and technologies I use to build my projects
          these days
        </p>
        <p className="text-gray-400 mb-8 text-sm max-w-2xl">
          *special mention to C and C++ for helping me build strong programming
          fundamentals and shaping my problem-solving skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <motion.a
              key={tech.title}
              href={tech.link}
              className="group p-4 bg-[#1A1A1A] rounded-xl border border-white/[0.08] hover:border-white/[0.16] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.title}
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium">{tech.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  {/* <p className="text-sm text-gray-400">{tech.description}</p> */}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
