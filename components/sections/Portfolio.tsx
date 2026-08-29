"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa"
const projects = [
  {
    title: "FinTech Dashboard",
    description:
      "A real-time financial analytics platform with dashboards, charts, and secure authentication.",
    image: "💳",
    tags: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    title: "AI Assistant Platform",
    description:
      "An AI-powered productivity tool with intelligent automation and chatbot features.",
    image: "🤖",
    tags: ["AI", "OpenAI", "React"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable online marketplace with payments, inventory, and order management.",
    image: "🛒",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Healthcare App",
    description:
      "A digital healthcare solution connecting patients and medical professionals.",
    image: "🏥",
    tags: ["React Native", "Firebase", "Cloud"],
  },
  {
    title: "SaaS Management Tool",
    description:
      "A business management platform for teams, analytics, and automation.",
    image: "📊",
    tags: ["React", "PostgreSQL", "Docker"],
  },
  {
    title: "Real Estate Platform",
    description:
      "A modern property marketplace with search and interactive listings.",
    image: "🏠",
    tags: ["Next.js", "Maps API", "Prisma"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          className="mb-16 text-center"
        >

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Our Work
          </span>


          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Projects That
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Create Impact
            </span>
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Explore some of the digital products and platforms we have
            designed and developed.
          </p>

        </motion.div>



        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project,index)=>(

            <motion.div
              key={project.title}

              initial={{
                opacity:0,
                y:40,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                delay:index*0.1,
              }}

              whileHover={{
                y:-10,
              }}

              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
            >


              {/* Image Area */}
              <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-indigo-500/20 to-cyan-500/10">

                <span className="text-7xl transition duration-500 group-hover:scale-125">
                  {project.image}
                </span>


                <div className="absolute inset-0 bg-indigo-500/0 transition group-hover:bg-indigo-500/10"/>
              </div>



              {/* Content */}
              <div className="p-7">


                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>


                <p className="mt-3 leading-7 text-gray-400">
                  {project.description}
                </p>



                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tags.map(tag=>(
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>



                {/* Buttons */}
                <div className="mt-7 flex gap-4">

                  <button className="flex items-center gap-2 text-indigo-400 hover:text-cyan-400">
                    Case Study
                    <ExternalLink size={16}/>
                  </button>


                  <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                    Code
                    <FaGithub size={16}/>
                  </button>

                </div>


              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}